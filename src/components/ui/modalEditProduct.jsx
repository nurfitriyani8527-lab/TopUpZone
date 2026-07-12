import { useState } from "react";
import { EditProducts } from "../../services/api";

export const ModalEditProduct = ((props) => {
    const [formProducts, setFormProducts] = useState({
        name: props.product.name,
        game: props.product.game,
        price: props.product.price
})
    const handleEdit = async () => {
        try {
            await EditProducts(props.product._id, formProducts)
            props.onSuccess()
            props.onClose()
        } catch (err) {
            console.error("Error:", err)
        }
    }

    const handleChange = (e) => {
        setFormProducts({
            ...formProducts,
            [e.target.name]: e.target.value,
            });
    }
    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="w-full max-w-2xl bg-[#1B1B1B] border border-[#7A1F2B] rounded-2xl shadow-2xl p-8">
            <h1 className="text-3xl font-bold text-white text-center mb-8">Edit Produk</h1>
                <div className="space-y-5">
                    <div>
                        <label className="text-gray-300 font-medium">Diamonds</label>
                        <input
                            type="text"
                            name="name"
                            className="mt-2 w-full bg-[#232323] border border-[#404040] rounded-xl p-3 text-white focus:outline-none focus:border-[#7A1F2B]"
                            value={formProducts.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-gray-300 font-medium">Game</label>
                        <select
                            name="game"
                            value={formProducts.game}
                            onChange={handleChange}
                            className="mt-2 w-full bg-[#232323] border border-[#404040] rounded-xl p-3 text-white focus:outline-none focus:border-[#7A1F2B]"
                        >
                            <option value="">-- Pilih Game --</option>
                            <option value="free fire">Free Fire</option>
                            <option value="Mobile Legends">Mobile Legends</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-gray-300 font-medium">Harga</label>
                        <input
                            type="number"
                            name="price"
                            className="mt-2 w-full bg-[#232323] border border-[#404040] rounded-xl p-3 text-white focus:outline-none focus:border-[#7A1F2B]"
                            value={formProducts.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex gap-4 pt-3">
                        <button className="flex-1 bg-[#7A1F2B] hover:bg-[#962D3E] transition-all duration-300 rounded-xl py-3 font-semibold text-white" onClick={handleEdit}>
                            Simpan
                        </button>
                        <button onClick={props.onClose} className="flex-1 bg-[#2C2C2C] hover:bg-[#404040] transition-all duration-300 rounded-xl py-3 font-semibold text-white">
                            Kembali
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
})
