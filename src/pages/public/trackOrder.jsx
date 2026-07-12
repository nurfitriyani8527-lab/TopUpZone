import { useState } from "react"
import { GetOrder } from "../../services/api"
import { Loading } from "../../components/ui/buffering"
import { NavbarPublic } from "../../components/navbar/NavbarPublic"
import { Background } from "../../components/backgroundDesign/background"
import Footer from "../../components/public/footer"

export const Ordertrack = () => {
    const [isSearch, setIsSearch] = useState(false)
    const [order, setOrder] = useState([])
    const [whatsapp, setwhatsapp] = useState("")
    const [loading, setLoading] = useState(false)
    const [errors ,setErrors] = useState({})

    const handleSearch = async (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!whatsapp) {
            newErrors.whatsapp = "No whatsapp wajib diisi!";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        console.log("lolos validasi, mau fetch")

        try {
            const result = await GetOrder(whatsapp);
            console.log(result);
            setOrder(result);
            setIsSearch(true);
        } catch (error) {
            console.error("Error:", error);
        }
    };


    const handleChange = (e) => {
      setwhatsapp(e.target.value)  // langsung set string-nya aja
    }

    if(loading == true){
        return (
            Loading()
        )
    }
    return (
    <>
        <NavbarPublic />

        <div className="relative overflow-hidden min-h-screen">
            <Background />

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white">
                        Lacak Pesanan
                    </h1>

                    <p className="text-gray-400 mt-3">
                        Masukkan nomor WhatsApp yang digunakan saat checkout.
                    </p>
                </div>

                {/* Search */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">

                    <input
                        type="text"
                        placeholder="Masukkan nomor WhatsApp..."
                        value={whatsapp}
                        onChange={handleChange}
                        className="
                            w-full
                            sm:w-[380px]
                            bg-[#1B1B1B]
                            border
                            border-[#404040]
                            rounded-xl
                            px-4
                            py-3
                            text-white
                            placeholder:text-gray-500
                            focus:outline-none
                            focus:border-[#962D3E]
                        "
                    />

                    <button
                        onClick={handleSearch}
                        className="
                            bg-[#E53950]
                            hover:bg-[#ff6078]
                            px-7
                            rounded-xl
                            font-semibold
                            transition-all
                            duration-300
                            hover:scale-105
                            text-white
                        "
                    >
                        Cek Order
                    </button>

                </div>

                {errors.whatsapp && (
                    <p className="text-center text-red-400 text-sm mt-2">
                        {errors.whatsapp}
                    </p>
                )}

                {/* Result */}
                <div className="max-w-2xl mx-auto mt-12">

                    <h2 className="text-2xl font-bold text-white text-center mb-8">
                        Detail Pesanan
                    </h2>

                    {!isSearch ? (

                        <div className="bg-[#1B1B1B] border border-[#404040] rounded-2xl p-8 text-center text-gray-500">
                            Belum ada data yang dicari.
                        </div>

                    ) : order.length === 0 ? (

                        <div className="bg-[#1B1B1B] border border-[#404040] rounded-2xl p-8 text-center text-gray-500">
                            Data tidak ditemukan.
                        </div>

                    ) : (

                        order.map((item) => (
                            <div
                                key={item._id}
                                className="
                                    bg-[#1B1B1B]
                                    border
                                    border-[#404040]
                                    rounded-2xl
                                    p-6
                                    mb-6
                                    hover:border-[#962D3E]
                                    transition-all
                                    duration-300
                                    shadow-[0_0_25px_rgba(122,31,43,.15)]
                                "
                            >

                                <div className="flex justify-between items-center mb-6">

                                    <h3 className="text-lg font-semibold text-white">
                                        Detail Pesanan
                                    </h3>

                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                            item.status.toLowerCase() === "paid"
                                                ? "bg-green-500/20 text-green-400"
                                                : item.status.toLowerCase() === "pending"
                                                ? "bg-yellow-500/20 text-yellow-400"
                                                : "bg-red-500/20 text-red-400"
                                        }`}
                                    >
                                        {item.status}
                                    </span>

                                </div>

                                <div className="space-y-4">

                                    <div className="flex justify-between border-b border-[#333] pb-3">
                                        <span className="text-gray-400">
                                            Order ID
                                        </span>

                                        <span className="text-white">
                                            {item.midtrans_order_id}
                                        </span>
                                    </div>

                                    <div className="flex justify-between border-b border-[#333] pb-3">
                                        <span className="text-gray-400">
                                            Nama
                                        </span>

                                        <span className="text-white">
                                            {item.customer_name}
                                        </span>
                                    </div>

                                    <div className="flex justify-between border-b border-[#333] pb-3">
                                        <span className="text-gray-400">
                                            Total
                                        </span>

                                        <span className="font-bold text-[#E53950]">
                                            Rp {item.total_price.toLocaleString("id-ID")}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-400">
                                            Tanggal
                                        </span>

                                        <span className="text-white">
                                            {new Date(item.createdAt).toLocaleString("id-ID")}
                                        </span>
                                    </div>

                                </div>

                            </div>
                        ))

                    )}

                </div>

            </div>

            <Footer />
        </div>

    </>
    )
}