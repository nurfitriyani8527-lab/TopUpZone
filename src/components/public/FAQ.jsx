import { useState } from "react";

const faqs = [
    {
        question: "Berapa lama proses top up?",
        answer: "Biasanya hanya membutuhkan waktu 1-3 menit setelah pembayaran berhasil."
    },
    {
        question: "Metode pembayaran apa saja yang tersedia?",
        answer: "Semua metode pembayaran tersedia melalui Midtrans seperti QRIS, Virtual Account, E-Wallet, dan kartu kredit."
    },
    {
        question: "Bagaimana jika diamond belum masuk?",
        answer: "Silakan cek status pesanan melalui halaman Track Order."
    },
    {
        question: "Apakah website ini aman?",
        answer: "Ya. Semua transaksi diproses melalui Midtrans dan data pelanggan disimpan secara aman."
    }
];

const FAQ = () => {

    const [open, setOpen] = useState(null);

    return (

        <section className="max-w-4xl mx-auto px-6 py-20">

            <div className="text-center mb-12">

                <h2 className="text-4xl font-bold text-white">
                    FAQ
                </h2>

                <p className="text-gray-400 mt-3">
                    Pertanyaan yang sering ditanyakan.
                </p>

            </div>

            <div className="space-y-4">

                {faqs.map((faq, index) => (

                    <div
                        key={index}
                        className="
                        bg-[#1B1B1B]
                        border
                        border-[#2A2A2A]
                        rounded-2xl
                        overflow-hidden
                        "
                    >

                        <button
                            onClick={() => setOpen(open === index ? null : index)}
                            className="
                            w-full
                            flex
                            justify-between
                            items-center
                            p-5
                            text-left
                            "
                        >

                            <span className="font-semibold text-white">
                                {faq.question}
                            </span>

                            <span className="text-[#E53950] text-2xl">
                                {open === index ? "−" : "+"}
                            </span>

                        </button>

                        {open === index && (

                            <div className="px-5 pb-5 text-gray-400 leading-7">

                                {faq.answer}

                            </div>

                        )}

                    </div>

                ))}

            </div>

        </section>

    );
};

export default FAQ;