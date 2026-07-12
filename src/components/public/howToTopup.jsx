export const HowToTopup = () => {
    const steps = [
        {
            number: "01",
            title: "Pilih Game",
            desc: "Pilih Free Fire atau Mobile Legends sesuai kebutuhan."
        },
        {
            number: "02",
            title: "Pilih Nominal",
            desc: "Tentukan nominal diamond yang ingin dibeli."
        },
        {
            number: "03",
            title: "Isi Data",
            desc: "Masukkan nickname, Game ID, dan nomor WhatsApp."
        },
        {
            number: "04",
            title: "Bayar",
            desc: "Lakukan pembayaran melalui Midtrans menggunakan metode favoritmu."
        },
        {
            number: "05",
            title: "Diamond Masuk",
            desc: "Pesanan diproses otomatis dan diamond akan masuk dalam beberapa menit."
        }
    ];

    return (
        <>
            <section className="max-w-6xl mx-auto px-6 py-20">
        
                <div className="text-center mb-14">
        
                    <h2 className="text-4xl font-bold text-white">
                        Cara Top Up
                    </h2>
        
                    <p className="text-gray-400 mt-3">
                        Hanya membutuhkan beberapa langkah sederhana.
                    </p>
        
                </div>
        
                <div className="grid md:grid-cols-5 gap-6">
        
                    {steps.map((step) => (
                    
                        <div
                            key={step.number}
                            className="
                            bg-[#1B1B1B]
                            border
                            border-[#2A2A2A]
                            rounded-3xl
                            p-6
                            hover:border-[#962D3E]
                            transition
                            "
                        >
                        
                            <div className="text-4xl font-bold text-[#E53950]">
                                {step.number}
                            </div>
                    
                            <h3 className="mt-4 text-white font-semibold text-xl">
                                {step.title}
                            </h3>
                    
                            <p className="text-gray-400 mt-3 leading-7">
                                {step.desc}
                            </p>
                    
                        </div>
    
                    ))}
    
                </div>
                
            </section>
        </>
    )
}