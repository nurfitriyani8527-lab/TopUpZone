const BASE_URL = import.meta.env.VITE_API_BASE_URL
import { useNavigate } from "react-router-dom"

// public
export async function GetProducts() {
    const res = await fetch(`${BASE_URL}/public/products`)
    const result = await res.json()
    return result.data
}

export async function PostCheckout(data){
    const res = await fetch(`${BASE_URL}/public/checkout`,{
        method : "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            customer_name : data.customer_name,
            game_id : data.game_id,
            whatsapp : data.whatsapp,
            gameCode : data.gameCode,
            items : data.items
        })
    })
    const result = await res.json()
    console.log(result)
    return result
}

export async function GetOrder(whatsapp){
    console.log("GetOrder dipanggil, whatsapp:", whatsapp)  // ← tambah ini
    const res = await fetch(`${BASE_URL}/public/orders?whatsapp=${whatsapp}`)
    console.log("res status:", res.status)  // ← dan ini
    const result = await res.json()
    console.log("result mentah:", result)  // ← dan ini
    return result.data
}

export async function PostContact(data){
    const res = await fetch(`${BASE_URL}/public/contact`,{
        method : "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            name : data.name,
            email : data.email,
            subject : data.subject,
            message : data.message
        })
    })
    const result = await res.json()
    console.log(result)
    return result
}

// admin
export function getAuthHeader() {
    const token = localStorage.getItem("token")
    return{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
    }
}

export async function fetchWithAuth(url, options = {}) {
    const res = await fetch(url, {
        ...options,
        headers: getAuthHeader()
    })

    if (res.status === 401) {
        localStorage.removeItem("token")
        window.location.href = "/admin/login"  // hard redirect
        return
    }

    return res
}

export async function PostLogin(data){
    const res = await fetch(`${BASE_URL}/admin/login`,{
        method : "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            email : data.email,
            password : data.password
        })
    })
    const result = await res.json()
    console.log(result)
    // window.location.href = result.redirect_url
    return result

}

export async function GetDashboard(navigate) {
    
    const res = await fetchWithAuth(`${BASE_URL}/admin/dashboard`, {
        headers : getAuthHeader()
    })

    if (res.status === 401) {
        localStorage.removeItem("token")
        navigate("/admin/login")
        return
    }

    const result = await res.json()
    return result
}

export async function GetStats(){
    const res = await fetchWithAuth(`${BASE_URL}/admin/stats`, {
        headers : getAuthHeader()
    })
    const result = await res.json()
    return result
}

export async function GetProductsAdmin(){
    const res = await fetchWithAuth(`${BASE_URL}/admin/product`, {
        headers : getAuthHeader()
    })
    const result = await res.json()
    return result.data
}

export async function PostProducts(data){
    const res = await fetchWithAuth(`${BASE_URL}/admin/product`,{
        method : "POST",
        headers: getAuthHeader(),
        body: JSON.stringify({
            name : data.name,
            game : data.game,
            price : data.price
        })
    })
    const result = await res.json()
    console.log(result)
    return result
}

export async function DeleteProducts(id){
    const res = await fetchWithAuth(`${BASE_URL}/admin/product/${id}`,{
        method : "DELETE",
        headers : getAuthHeader()
    })
    const result = await res.json()
    return result
}

export async function EditProducts(id, data){
    const res = await fetchWithAuth(`${BASE_URL}/admin/product/${id}`,{
        method : "PUT",
        headers: getAuthHeader(),
        body: JSON.stringify(data)
    })
    const result = await res.json()
    console.log(result)
    return result
}

export async function GetOrdersAdmin(){
    const res = await fetchWithAuth(`${BASE_URL}/admin/order`, {
        headers : getAuthHeader()
    })
    const result = await res.json()
    return result.data
}

export async function GetOrdersAdminByStatus(status){
    const res = await fetchWithAuth(`${BASE_URL}/admin/order${status}`, {
        headers : getAuthHeader()
    })
    const result = await res.json()
    return result.data
}

export async function GetOrdersAdminByWhatsapp(whatsapp){
    const res = await fetchWithAuth(`${BASE_URL}/public/orders?whatsapp=${whatsapp}`,{
        headers : getAuthHeader()
    })
    const result = await res.json()
    return result.data
}

export async function DeleteOrdersAdmin(id){
    const res = await fetchWithAuth(`${BASE_URL}/admin/order/${id}`,{
        method : "DELETE",
        headers : getAuthHeader()
    })
    const result = await res.json()
        console.log(result)
    return result
}

export async function EditOrdersAdmin(id, data){
    const res = await fetchWit(`${BASE_URL}/admin/order/${id}`,{
        method : "PUT",
        headers: getAuthHeader(),
        body: JSON.stringify(data)
    })
    const result = await res.json()
    console.log(result)
    return result
}

export async function PostResend(id){
        const res = await fetchWithAuth(`${BASE_URL}/admin/orderResend/${id}`,{
        method : "POST",
        headers : getAuthHeader()
    })
    const result = await res.json()
        console.log(result)
    return result
}

export async function PostOrdersProcess(id){
    const res = await fetchWithAuth(`${BASE_URL}/admin/orderProcess/${id}`,{
        method : "POST",
        headers : getAuthHeader()
    })
    const result = await res.json()
        console.log(result)
    return result
}

export async function PostCheckNickname(gameCode, userId){
    const res = await fetch(`${BASE_URL}/public/check-nickname`,{
        method : "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            gameCode,
            userId
        })
    })
    const result = await res.json()
    console.log(result)
    return result
}