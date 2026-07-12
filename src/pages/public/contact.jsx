import {
    Mail,
    Phone,
    MapPin,
    Headset
} from "lucide-react";
import { NavbarPublic } from "../../components/navbar/NavbarPublic";
import Footer from "../../components/public/footer"
import { ContactBackground } from "../../components/backgroundDesign/contactBackground";
import { useEffect, useState } from "react";
import { PostContact } from "../../services/api";
import { Loading } from "../../components/ui/buffering";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [errors, setErrors] = useState ({})
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "instant",
    });
    }, []);

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });

        setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
        }));
    };

    const handleContact = async (e) => {
        e.preventDefault()
        let newErrors = {};
          // Cek masing-masing field
            if (!formData.name) newErrors.name = "Nama wajib diisi!"
            if (!formData.email) newErrors.email = "Email wajib diisi!"
            if (!formData.subject) newErrors.subject = "Subject wajib diisi"
            if (!formData.message) newErrors.message = "message wajib diisi"

            // Jika ada satu saja error, masukkan ke state dan HENTIKAN fungsi
            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return; 
            }
            // Bersihkan error jika semua form sudah valid
            setErrors({});
            setIsLoading(true);

        try {
            const result = await PostContact({
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            })
            console.log(result)
        } catch(err) {
            console.error("Error:", err) 
        } finally {
            setIsLoading(false);
        }
    }
    return (
    <>
        <div className="relative overflow-hidden min-h-screen">
            <NavbarPublic/>
            <ContactBackground/>
            <section className="max-w-6xl mx-auto px-6 py-20">
        
                <div
                    className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-10
                    "
                >
                
                    {/* Glow */}
                    <div
                        className="
                        absolute
                        -top-20
                        -right-20
                        w-72
                        h-72
                        rounded-full
                        bg-[#7A1F2B]
                        opacity-20
                        blur-[120px]
                        pointer-events-none
                        "
                    />
    
                    <div className="relative z-10">
        
                        <div className="flex items-center gap-3 mb-5">
        
                            <div
                                className="
                                w-14
                                h-14
                                rounded-2xl
                                bg-[#7A1F2B]/30
                                border
                                border-[#962D3E]
                                flex
                                items-center
                                justify-center
                                "
                            >
                                <Headset
                                    className="text-[#E53950]"
                                    size={28}
                                />
                            </div>
        
                            <div>
        
                                <h2 className="text-4xl font-bold text-white">
                                    Hubungi Kami!
                                </h2>
        
                                <p className="text-gray-400 mt-2 max-w-3xl leading-7">
                                    Mengalami kendala saat melakukan top up atau
                                    pembayaran? Atau ingin bekerja sama dengan kami
                                    sebagai mitra bisnis? Jangan ragu untuk
                                    menghubungi tim kami melalui kontak yang
                                    tersedia di bawah ini.
                                </p>
        
                            </div>
        
                        </div>
        
                        <div className="grid md:grid-cols-3 gap-6 mt-10">
        
                            {/* Email */}
                            <div
                                className="
                                rounded-2xl
                                bg-white/5
                                border
                                border-white/10
                                p-6
                                hover:border-[#962D3E]
                                transition
                                "
                            >
                                <Mail
                                    className="text-[#E53950] mb-4"
                                    size={28}
                                />
    
                                <p className="text-gray-400 text-sm">
                                    Email
                                </p>
        
                                <p className="text-white font-semibold mt-2">
                                    cs.topupzone@gmail.com
                                </p>
        
                            </div>
        
                            {/* WhatsApp */}
                            <div
                                className="
                                rounded-2xl
                                bg-white/5
                                border
                                border-white/10
                                p-6
                                hover:border-[#962D3E]
                                transition
                                "
                            >
                                <Phone
                                    className="text-[#E53950] mb-4"
                                    size={28}
                                />
    
                                <p className="text-gray-400 text-sm">
                                    WhatsApp
                                </p>
        
                                <p className="text-white font-semibold mt-2">
                                    +6283857434681
                                </p>
        
                            </div>
        
                            {/* Lokasi */}
                            <div
                                className="
                                rounded-2xl
                                bg-white/5
                                border
                                border-white/10
                                p-6
                                hover:border-[#962D3E]
                                transition
                                "
                            >
                                <MapPin
                                    className="text-[#E53950] mb-4"
                                    size={28}
                                />
    
                                <p className="text-gray-400 text-sm">
                                    Lokasi
                                </p>
        
                                <p className="text-white font-semibold mt-2">
                                    Indonesia
                                </p>
        
                            </div>
        
                        </div>
        
                    </div>
        
                </div>
        
                {/* Contact Form */}
                <div className="mt-12">
                    
                    <h3 className="text-2xl font-bold text-white mb-6">
                        Kirim Pesan
                    </h3>
                    
                    <div
                        className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        p-8
                        "
                    >
                    
                        <div className="grid md:grid-cols-2 gap-6">
                    
                            <div>
                    
                                <label className="text-gray-300">
                                    Nama Lengkap
                                </label>
                    
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Masukkan nama..."
                                    className="
                                    mt-2
                                    w-full
                                    rounded-xl
                                    border
                                    border-[#333]
                                    bg-[#1B1B1B]/70
                                    p-3
                                    text-white
                                    placeholder:text-gray-500
                                    focus:outline-none
                                    focus:border-[#E53950]
                                    "
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-sm">
                                        {errors.name}
                                    </p>
                                )}
                
                            </div>
                    
                            <div>
                    
                                <label className="text-gray-300">
                                    Email
                                </label>
                    
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="Masukkan email..."
                                    className="
                                    mt-2
                                    w-full
                                    rounded-xl
                                    border
                                    border-[#333]
                                    bg-[#1B1B1B]/70
                                    p-3
                                    text-white
                                    placeholder:text-gray-500
                                    focus:outline-none
                                    focus:border-[#E53950]
                                    "
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-sm">
                                        {errors.email}
                                    </p>
                                )}
                
                            </div>
                    
                        </div>
                    
                        <div className="mt-6">
                    
                            <label className="text-gray-300">
                                Subjek
                            </label>
                    
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                type="text"
                                placeholder="Contoh: Kendala Pembayaran"
                                className="
                                mt-2
                                w-full
                                rounded-xl
                                border
                                border-[#333]
                                bg-[#1B1B1B]/70
                                p-3
                                text-white
                                placeholder:text-gray-500
                                focus:outline-none
                                focus:border-[#E53950]
                                "
                            />
                                {errors.subject && (
                                    <p className="text-red-400 text-sm">
                                        {errors.subject}
                                    </p>
                                )}                
                        </div>
                    
                        <div className="mt-6">
                    
                            <label className="text-gray-300">
                                Pesan
                            </label>
                    
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                placeholder="Tuliskan pesan kamu disini..."
                                className="
                                mt-2
                                w-full
                                rounded-xl
                                border
                                border-[#333]
                                bg-[#1B1B1B]/70
                                p-3
                                text-white
                                placeholder:text-gray-500
                                resize-none
                                focus:outline-none
                                focus:border-[#E53950]
                                "
                            />
                                {errors.message && (
                                    <p className="text-red-400 text-sm">
                                        {errors.message}
                                    </p>
                                )}
                        </div>
                    
                        <button
                            onClick={handleContact}
                            disabled={isLoading}
                            className={`
                                mt-8
                                w-full
                                rounded-xl
                                py-4
                                font-semibold
                                text-white
                                transition-all
                                ${
                                    isLoading
                                        ? "bg-[#962D3E] cursor-not-allowed"
                                        : "bg-[#E53950] hover:bg-[#ff5d74] hover:shadow-[0_0_20px_rgba(229,57,80,.35)]"
                                }
                            `}
                        >
                            {isLoading ? "Mengirim..." : "Kirim Pesan"}
                        </button>
                    
                    </div>
                    
                </div>
        
            </section>
            <Footer/>
        </div>
        </>
    );
};