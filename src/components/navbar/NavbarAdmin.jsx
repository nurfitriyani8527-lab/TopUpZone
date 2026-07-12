import {Link, useNavigate} from 'react-router-dom'

export const NavbarAdmin = () => {
    const navigate = useNavigate()
    const logoutBtn = () => {
        localStorage.removeItem("token")
        navigate("/admin/login")
    }
    return (
        <div className="flex justify-between items-center bg-[#1B1B1B] text-white border-b border-[#7A1F2B] px-6 py-4">
            <div className="text-2xl font-bold">Dashboard Admin</div>
            <div className='flex items-center gap-10'>
                <div className="hover:text-gray-300"><Link to="/admin/dashboard">Dashboard</Link></div>
                <div className="hover:text-gray-300"><Link to="/admin/products">Products</Link></div>
                <div className="hover:text-gray-300"><Link to="/admin/orders">Orders</Link></div>
                <div className="bg-red-600 rounded-2xl w-20 h-7 text-center hover:bg-red-800"><button onClick={logoutBtn}>Logout</button></div>
            </div>
        </div>
    )
}