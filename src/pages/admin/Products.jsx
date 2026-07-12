import { useEffect,useState } from "react"
import { getAuthHeader,GetProductsAdmin, PostProducts,DeleteProducts } from "../../services/api"
import { Loading } from "../../components/ui/buffering"
import { ModalAddProducts } from "../../components/ui/modalAddProducts"
import { ModalEditProduct } from "../../components/ui/modalEditProduct"

export const Product = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [editProduct, setEditProduct] = useState(null)

    useEffect(() => {
        async function fetchAll(){
            await GetProductsAdmin()
                .then((data) => {
                    console.log(data)
                    setProducts(data)
                }) 
            .finally(() => setLoading(false))
        }
        fetchAll()
    }, [])

    if(loading == true){
        return (
            Loading()
        )
    }
    const closeModal = () => setAddProducts(null)
    const refreshProducts = async () => {
        const data = await GetProductsAdmin()
        setProducts(data)
    }
    const handleDelete = (async(id) => {
        try {
            const result = await DeleteProducts(id)
            console.log(result)
            refreshProducts()
        } catch (err) {
            console.error("Error:", err)
        }
    })


    return (
        <>
            <div className="min-h-screen bg-[#111111] text-white p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Product Management</h1>
                    <button className="bg-[#7A1F2B] hover:bg-[#962D3E] transition-colors px-5 py-2 rounded-xl font-semibold" onClick={() => setShowModal(true)}>
                        + Tambah Produk
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="bg-[#1B1B1B] border border-[#333333] rounded-2xl p-5 shadow-xl hover:border-[#7A1F2B] hover:-translate-y-1 transition-all duration-300"
                        >
                            <h2 className="text-xl font-bold mb-4">{product.name}</h2>
                            <div className="space-y-2 mb-5">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Game</span>
                                    <span>{product.game}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Harga</span>
                                    <span className="text-[#D8A3AC] font-bold">Rp {product.price.toLocaleString("id-ID")}</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex-1 bg-green-500 hover:bg-green-600 transition-colors rounded-xl py-2 font-semibold" onClick={() => setEditProduct(product)}>Edit</button>
                                <button className="flex-1 bg-red-700 hover:bg-red-800 transition-colors rounded-xl py-2 font-semibold" onClick={() => handleDelete(product._id)} disabled={loading}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && <ModalAddProducts onClose={() => setShowModal(false)} onSuccess={refreshProducts}/>}
            {editProduct && (<ModalEditProduct product={editProduct} onClose={() => setEditProduct(null)} onSuccess={refreshProducts}/>)}
        </>
    )
}