import Hayabusa from "../../assets/Hayabusa.png"
import hayabusaSkin from "../../assets/hayabusaSkin.png"

const Hero = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 pt-8"> {/* max-w dikurangi dari 7xl ke 6xl, pt-12 ke pt-8 */}

            <div className="relative bg-gradient-to-r from-[#151515] via-[#1B1B1B] to-[#211417] border border-[#7A1F2B] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(122,31,43,0.2)]">

                <div className="relative min-h-[380px]"> {/* min-h dikurangi dari 500px ke 380px */}

                    <div className="relative z-10 max-w-lg p-8 lg:p-10 flex flex-col justify-center min-h-[380px]"> {/* padding dikurangi dari p-12, max-w dari xl ke lg */}
                        
                        <h1 className="text-4xl lg:text-5xl tracking-tight font-bold text-white leading-tight"> {/* Font dikurangi dari 6xl/7xl ke 4xl/5xl */}
                            Top Up Game
                            <br />
                            <span className="text-[#E53950]">
                                Cepat, Aman
                            </span>
                            <span className="text-white">
                                {" "} & Murah
                            </span>
                        </h1>

                        <p className="text-gray-400 mt-4 text-base leading-relaxed"> {/* margin dan ukuran font deskripsi dikurangi */}
                            Top up Free Fire dan Mobile Legends
                            dengan proses otomatis menggunakan
                            pembayaran Midtrans.
                        </p>

                        <div className="flex gap-4 mt-6"> {/* margin top tombol dikurangi */}
                            <button
                                onClick={() => document
                                    .getElementById("games")
                                    ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="
                                bg-[#E53950]
                                hover:bg-[#ff5c72]
                                transition
                                px-6
                                py-2.5
                                rounded-xl
                                font-semibold
                                "
                            >
                                Top Up Sekarang
                            </button>
                        </div>

                    </div>

                    {/* Glow */}
                    <div
                        className="
                        absolute
                        -right-16
                        -top-16
                        w-[500px]
                        h-[500px]
                        rounded-full
                        bg-[#B61D37]
                        opacity-20
                        blur-[120px]
                        "
                    /> {/* Ukuran glow dikurangi dari 700px ke 500px */}

                    {/* Character */}
                    <img
                        src={hayabusaSkin}
                        alt="Hayabusa"
                        className="
                        absolute
                        right-0
                        bottom-0
                        w-[400px]
                        lg:w-[480px]
                        pointer-events-none
                        select-none
                        drop-shadow-[0_0_45px_rgba(229,57,80,.35)]
                        "
                    /> {/* Ukuran Hayabusa dikurangi drastis dari 650px agar tidak menutupi layar */}

                </div>

            </div>

        </section>
    )
}

export default Hero