import { GetOrdersAdmin, GetOrdersAdminByStatus, GetOrdersAdminByWhatsapp, DeleteOrdersAdmin, EditOrdersAdmin,PostResend,PostOrdersProcess } from "../../services/api"
import { useState, useEffect } from "react"
import { Loading } from "../../components/ui/buffering"
import { OrderCards } from "../../components/cards/orderCard";

export const Order = () => {
    const [isSearch, setIsSearch] = useState(false)
    const [orders, setOrders] = useState([])
    const [whatsapp, setwhatsapp] = useState("")
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [editProduct, setEditProduct] = useState(null)
    const [selectedStatus, setSelectedStatus] = useState("All")

    useEffect(() => {
        async function fetchAll(){
            await GetOrdersAdmin()
                .then((data) => {
                    console.log(data)
                    setOrders(data)
                }) 
            .finally(() => setLoading(false))
        }
        fetchAll()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        console.log("handleSearch dipanggil, whatsapp:", whatsapp)
        if(!whatsapp){
            alert("nomor whatsapp wajib diisi!")
            return
        }

        try {
            const result = await GetOrdersAdminByWhatsapp(whatsapp)
            console.log(result)
            setOrders(result)
            setIsSearch(true) 
        } catch (error) {
            console.error("Error:", error)
        }
    }

    const handleChange = (e) => {
        setwhatsapp(e.target.value) 
    }

    if(loading == true){
        return (
            Loading()
        )
    }

    const refreshProducts = async () => {
        const data = await GetOrdersAdmin()
        setOrders(data)
    }
    const handleDelete = (async(id) => {
        try {
            const result = await DeleteOrdersAdmin(id)
            console.log(result)
            refreshProducts()
        } catch (err) {
            console.error("Error:", err)
        }
    })
    const filteredOrders =
    selectedStatus === "All"
        ? orders
        : orders.filter(order => order.status === selectedStatus);

    const handleResend = async(id) => {
        try {
            const result = await PostResend(id)
            console.log(result)
            refreshProducts()
        } catch (err) {
            console.error("Error:", err)
        }
    }

    const handleProcess = async(id) => {
        try {
            const result = await PostOrdersProcess(id)
            console.log(result)
            refreshProducts()
        } catch (err) {
            console.error("Error:", err)
        }
    }

    return (
        <>
            <div className="flex justify-center items-center gap-4 mt-8">
                <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="bg-[#1B1B1B] border border-[#7A1F2B] text-white rounded-xl px-4 py-2 outline-none"
                >
                    <option value="All">Semua</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                </select>
        
                <input
                    type="text"
                    placeholder="Masukkan nomor WhatsApp..."
                    value={whatsapp}
                    onChange={handleChange}
                    className="w-80 h-10 border border-gray-400 rounded-xl px-4 outline-none focus:ring-2 focus:ring-[#962D3E] text-white bg-[#1B1B1B]"
                />
    
                <button
                    className="
                    bg-[#7A1F2B]
                    hover:bg-[#962D3E]
                    hover:scale-105
                    hover:shadow-xl
                    transition-all
                    duration-300
                    text-white
                    font-semibold
                    rounded-xl
                    px-6
                    py-2
                    "
                    onClick={handleSearch}
                >
                    Cek Order
                </button>
            </div>
            <div className="max-w-6xl mx-auto px-6 pb-8 mt-7">
                <div className="bg-[#1B1B1B] border border-[#7A1F2B] rounded-3xl shadow-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-5 border-b border-[#7A1F2B]">
                        <h2 className="text-white text-xl font-bold">
                            Order History
                        </h2>
                        <span className="text-gray-400 text-sm">
                            Total : {filteredOrders.length} Orders
                        </span>
                    </div>
                <OrderCards handleSearch={handleSearch} filteredOrders={filteredOrders} handleResend={handleResend} handleProcess={handleProcess} handleDelete={handleDelete}/>    
                </div>
            </div>
        </>
    )
}