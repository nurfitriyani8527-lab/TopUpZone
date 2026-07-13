import { useState, useEffect } from "react"
import { GetProducts } from "../../services/api"
import ff from "../../assets/ff.jpg"
import ml from "../../assets/ml.jpg"
import { Modal } from "../../components/ui/modal"
import { Loading } from "../../components/ui/buffering"
import { NavbarPublic } from "../../components/navbar/NavbarPublic"
import Hero from "../../components/public/Hero"
import WhyChooseUs from "../../components/public/whyUs"
import PaymentMethods from "../../components/public/paymentMethods"
import { Background } from "../../components/backgroundDesign/Background"
import Footer from "../../components/public/footer"
import FAQ from "../../components/public/FAQ"
import { HowToTopup } from "../../components/public/howToTopup"

export const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedGame, setSelectedGame] = useState(null)
    useEffect(() => {
        GetProducts()
            .then((data) => setProducts(data)) 
            .finally(() => setLoading(false))
    }, [])

    if(loading == true){
        return (
            Loading()
        )
    }

    const games = [
        { id: 'free fire', name: 'Free Fire', gameCode : "ff", image: ff },
        { id: 'Mobile Legends', name: 'Mobile Legends', gameCode : "ml", image: ml },
    ]

    const closeModal = () => setSelectedGame(null)
    const filteredProducts = products.filter(
        (p) => p.game === selectedGame?.id
    );
    return (
        <>
            <NavbarPublic />

            <div className="relative overflow-hidden">
            <Background/>

            <Hero />
            <section id="games" className="max-w-4xl mx-auto px-6 py-16">

                <div className="text-center mb-12">

                    <h2 className="text-4xl font-bold text-white">
                        Pilih Game
                    </h2>

                    <p className="text-gray-400 mt-3">
                        Pilih game yang ingin kamu top up.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-10 justify-items-center">

                    {games.map((g) => (
                    
                        <div
                            key={g.id}
                            onClick={() => setSelectedGame(g)}
                            className="
                                group
                                w-full
                                max-w-[340px]
                                cursor-pointer
                                overflow-hidden
                                rounded-3xl
                                bg-[#1B1B1B]
                                border
                                border-[#2A2A2A]
                                hover:border-[#962D3E]
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:shadow-[0_0_35px_rgba(150,45,62,.35)]
                            "
                        >
                        
                            {/* Image */}
                    
                            <div className="relative overflow-hidden">
                    
                                <img
                                    src={g.image}
                                    alt={g.name}
                                    className="
                                    h-44
                                    w-full
                                    object-cover
                                    transition-all
                                    duration-500
                                    group-hover:scale-110
                                    "
                                />

                                <div
                                    className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-[#111]
                                    via-transparent
                                    to-transparent
                                    "
                                />

                            </div>
                    
                            {/* Content */}
                    
                            <div className="p-6">
                    
                                <h3 className="text-2xl font-bold text-white">
                                    {g.name}
                                </h3>
                    
                                <p className="text-gray-400 mt-3">
                                    Top up cepat, aman, dan otomatis menggunakan Midtrans.
                                </p>
                    
                                <button
                                    className="
                                    mt-6
                                    bg-[#7A1F2B]
                                    hover:bg-[#962D3E]
                                    px-5
                                    py-3
                                    rounded-xl
                                    font-semibold
                                    text-white
                                    transition
                                    "
                                >
                                    Top Up Sekarang
                                </button>
                    
                            </div>
                    
                        </div>

                    ))}

                </div>
                
            </section>
            <HowToTopup/>
            <PaymentMethods/>
            <WhyChooseUs/>
            <FAQ/>
            <Footer/>
            </div>

            {selectedGame && (
                <Modal
                    onClose={closeModal}
                    game={selectedGame.name}
                    products={filteredProducts}
                    gameCode={selectedGame.gameCode}
                />
            )}
            
        </>
    )
}