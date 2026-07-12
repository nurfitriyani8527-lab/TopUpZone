import {Link} from 'react-router-dom'

export const NavbarPublic = () => {
    return (
        <div className="flex justify-between items-center bg-[#1B1B1B] text-white border-b border-[#7A1F2B] px-6 py-4">
                <h2 className="text-3xl font-bold text-white">
                    TopUp<span className="text-[#E53950]"> Zone</span>
                </h2>
            <div className='flex items-center gap-10'>
                <div className="hover:text-[#ff6078]"><Link to="/">Home</Link></div>
                <div className="hover:text-[#ff6078]"><Link to="/trackorder">Lacak Pesanan</Link></div>
                <div className="hover:text-[#ff6078]"><Link to="/contact">Contact</Link></div>
            </div>
        </div>
    )
}