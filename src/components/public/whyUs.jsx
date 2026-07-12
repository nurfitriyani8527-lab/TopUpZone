import { FiZap, FiShield, FiCreditCard } from "react-icons/fi";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FiZap size={30} />,
            title: "Proses Otomatis",
            desc: "Pesanan diproses secara otomatis hanya dalam beberapa menit."
        },
        {
            icon: <FiShield size={30} />,
            title: "100% Aman",
            desc: "Transaksi aman menggunakan Midtrans tanpa perlu login akun game."
        },
        {
            icon: <FiCreditCard size={30} />,
            title: "Banyak Pembayaran",
            desc: "Mendukung QRIS, E-Wallet, Virtual Account, dan kartu debit/kredit."
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-20">

            <div className="text-center mb-12">

                <h2 className="text-4xl font-bold text-white">
                    Kenapa Memilih Kami?
                </h2>

                <p className="text-gray-400 mt-3">
                    Pengalaman top up yang cepat, aman, dan terpercaya.
                </p>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

                {features.map((item, index) => (

                    <div
                        key={index}
                        className="
                        bg-[#1B1B1B]
                        rounded-3xl
                        border
                        border-[#2C2C2C]
                        p-8
                        text-center
                        hover:border-[#962D3E]
                        hover:-translate-y-2
                        transition-all
                        duration-300
                        "
                    >

                        <div
                            className="
                            w-16
                            h-16
                            rounded-2xl
                            bg-[#7A1F2B]
                            flex
                            items-center
                            justify-center
                            text-white
                            mx-auto
                            "
                        >
                            {item.icon}
                        </div>

                        <h3 className="text-xl font-semibold text-white mt-6">
                            {item.title}
                        </h3>

                        <p className="text-gray-400 mt-3 leading-7">
                            {item.desc}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default WhyChooseUs;