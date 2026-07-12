import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="border-t border-[#2A2A2A] mt-24 bg-[#1B1B1B]">

            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid md:grid-cols-3 gap-10">

                    {/* Logo */}
                    <div>

                        <h2 className="text-3xl font-bold text-white">
                            TopUp<span className="text-[#E53950]">Zone</span>
                        </h2>

                        <p className="text-gray-400 mt-4 leading-7">
                            Top up Free Fire dan Mobile Legends dengan proses
                            cepat, aman, dan otomatis melalui Midtrans.
                        </p>

                    </div>

                    {/* Menu */}

                    <div>

                        <h3 className="text-white font-semibold mb-4">
                            Menu
                        </h3>

                        <div className="flex flex-col gap-3">

                            <a
                                href="#games"
                                className="text-gray-400 hover:text-[#E53950] transition"
                            >
                                Top Up Game
                            </a>

                            <Link
                                to="/trackorder"
                                className="text-gray-400 hover:text-[#E53950] transition"
                            >
                                Track Order
                            </Link>

                        </div>

                    </div>

                    {/* contact */}
                    

                    {/* Payment */}
                    <div>

                        <h3 className="text-white font-semibold mb-4">
                            Pembayaran
                        </h3>

                        <p className="text-gray-400">
                            Mendukung berbagai metode pembayaran melalui
                            <span className="text-white font-semibold">
                                {" "}Midtrans
                            </span>.
                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;