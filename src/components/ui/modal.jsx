import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostCheckout, PostCheckNickname } from "../../services/api"
import { Loading } from "./buffering";
import { Headset } from "lucide-react";

export const Modal = (props) => {
  const navigate = useNavigate()
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({
        customer_name: "",
        game_id: "",
        whatsapp: "",
    });
    const [nickname, setNickname] = useState("");
    const [errors ,setErrors] = useState({})
    const [loading, setLoading] = useState(false);
    const [checking, setChecking] = useState(false);
    const [idValid, setIdValid] = useState(null);

    const adminFee = 1000;
    const productPrice = Number(selectedProduct?.price) || 0; 
    const totalPrice = selectedProduct ? productPrice + adminFee : 0;

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };
    
    const isValidWhatsapp = (number) => {
      const regex = /^(\+62|62|0)8[1-9][0-9]{6,10}$/;
      return regex.test(number);
    };

    const handleCheckout = async (e) => {
      e.preventDefault()
      let newErrors = {};
        // Cek masing-masing field
        if (!formData.customer_name) newErrors.customer_name = "Nama wajib diisi!"
        if (!formData.game_id) newErrors.game_id = "ID game wajib diisi!"
        if (!formData.whatsapp) newErrors.whatsapp = "No WhatsApp wajib diisi"
        if (!selectedProduct) newErrors.product = "Pilih product dulu!"
        if (formData.whatsapp.length <= 11) newErrors.whatsapp = "nomor whatsapp minimal 11 angka"
        if (idValid === false) newErrors.game_id = "id game tidak valid"
        if (!isValidWhatsapp(formData.whatsapp)) {newErrors.whatsapp = "Nomor WhatsApp tidak valid"}

        // Jika ada satu saja error, masukkan ke state dan HENTIKAN fungsi
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return; 
        }
      
        // Bersihkan error jika semua form sudah valid
        setErrors({});
        
      try {
          const result = await PostCheckout({
            customer_name: formData.customer_name,
            game_id: formData.game_id,
            whatsapp: formData.whatsapp,
            gameCode: props.gameCode,
            items: [{ product_id: selectedProduct._id, qty: 1 }]
          })
          console.log(result)

          if(!result.redirect_url) {
            alert("Gagal: " + result.message)
            return
          }
          window.location.href = result.redirect_url
        } catch(err) {
          console.error("Error:", err) 
        }
    }

    const handleCheckNickname = async () => {
        if (!formData.game_id) return;
    
        try {
            setLoading(true);
        
            const result = await PostCheckNickname(props.gameCode, formData.game_id);
        
        if (result.success) {
            setNickname(result.data);
            setIdValid(true);
        } else {
            setNickname("");
            setIdValid(false);
        }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const formatRupiah = (angka) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0, // Ubah ke 2 jika ingin tampil Rp 7.000,00
      }).format(angka);
    };

    const navigateContact = () => {
      navigate("/contact")
    }
    return (
      
      <div className="fixed inset-0 bg-[#111111]/70 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="
          bg-[#1B1B1B]
          text-white
            rounded-2xl
            border
            border-[#333333]
            shadow-2xl
            p-6
            w-full
            max-w-5xl
            mx-4
            max-h-[90vh]
            overflow-y-auto">
          
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{props.game}</h1>
          
            <button
              onClick={props.onClose}
              className="text-2xl text-gray-400 hover:text-red-500 transition-colors duration-300"
            >
              ✕
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
            {/* Produk */}
            <div>
              <h2 className="font-semibold text-lg mb-4 text-gray-300">
                Pilih Nominal
              </h2>
          
              <div className="grid grid-cols-2 gap-3">
                {props.products.map((item) => (
                  <button
                    key={item._id}
                    onClick={() => setSelectedProduct(item)}
                    className={`
                      rounded-2xl
                      border
                      p-4
                      text-left
                      transition-all
                      duration-300
                    
                      ${
                        selectedProduct?._id === item._id
                          ? `
                            bg-[#7A1F2B]
                            border-[#E53950]
                            scale-105
                            shadow-[0_0_20px_rgba(229,57,80,.35)]
                          `
                          : `
                            bg-[#232323]
                            border-[#404040]
                            hover:bg-[#2A2A2A]
                            hover:border-[#E53950]
                            hover:-translate-y-1
                          `
                      }
                    `}
                  >
                    <div className="flex justify-between items-start">
                      <p className="font-semibold text-white">
                        💎 {item.name}
                      </p>
                    
                      {selectedProduct?._id === item._id && (
                        <span className="text-xs bg-[#E53950] px-2 py-1 rounded-full">
                          Dipilih
                        </span>
                      )}
                    </div>
                    
                    <p className="text-[#D9A5AF] font-bold mt-3">
                      {formatRupiah(item.price)}
                    </p>
                  </button>
                ))}
              </div>
              <div
                className="
                mt-6
                bg-[#232323]
                border
                border-[#404040]
                rounded-2xl
                p-4
                space-y-3
                "
                >
            </div>

              <p className="text-green-400">
                  ✓ Proses Otomatis
              </p>
                            
              <p className="text-green-400">
                  ✓ Estimasi 1-3 Menit
              </p>
                            
              <p className="text-green-400">
                  ✓ Aman & Terpercaya
              </p>    
            </div>
              
            {/* Form */}
            <div>
              <h2 className="font-semibold text-lg mb-4 text-gray-300">
                Data Pembeli
              </h2>
              
              <div className="space-y-4">
              
                <input
                  type="text"
                  name="customer_name"
                  placeholder="Nama"
                  value={formData.customer_name}
                  onChange={handleChange}
                  className="
                    w-full
                    bg-[#232323]
                    border border-[#404040]
                    rounded-xl
                    p-3
                    text-white
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:border-[#962D3E]
                  "/>
                  {errors.customer_name && (
                    <p className="text-red-400 text-sm">
                      {errors.customer_name}
                    </p>
                  )}
      
                <input
                  type="text"
                  name="game_id"
                  placeholder="Game ID"
                  value={formData.game_id}
                  onChange={handleChange}
                  onBlur={handleCheckNickname}
                  className="
                    w-full
                    bg-[#232323]
                    border border-[#404040]
                    rounded-xl
                    p-3
                    text-white
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:border-[#962D3E]
                  "/>
                  {errors.game_id && (
                    <p className="text-red-400 text-sm">
                      {errors.game_id}
                    </p>
                  )}
                  {nickname && (
                  <p className="text-red-400 text-sm">
                      Nickname: {nickname}
                  </p>
                  )}
      
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="Nomor WhatsApp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="
                    w-full
                    bg-[#232323]
                    border border-[#404040]
                    rounded-xl
                    p-3
                    text-white
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:border-[#962D3E]
                  "/>
                  {errors.whatsapp && (
                    <p className="text-red-400 text-sm">
                      {errors.whatsapp}
                    </p>
                  )}
      
              </div>
              
                {selectedProduct && (
                    <div
                        className="
                        mt-6
                        bg-[#232323]
                        border
                        border-[#404040]
                        rounded-2xl
                        p-5
                        "
                    >
                    
                        <h3 className="font-semibold text-white mb-4">
                            Ringkasan Pesanan
                        </h3>
                
                        <div className="space-y-3 text-sm">
                
                            <div className="flex justify-between">
                
                                <span className="text-gray-400">
                                    Produk
                                </span>
                
                                <span>
                                    {selectedProduct.name}
                                </span>
                
                            </div>
                
                            <div className="flex justify-between">
                
                                <span className="text-gray-400">
                                    Harga
                                </span>
                
                                <span>
                                    Rp {selectedProduct.price.toLocaleString("id-ID")}
                                </span>
                
                            </div>
                
                            <div className="flex justify-between">
                
                                <span className="text-gray-400">
                                    Admin
                                </span>
                
                                <span>
                                    Rp {adminFee.toLocaleString("id-ID")}
                                </span>
                
                            </div>
                
                            <hr className="border-[#404040]" />
                
                            <div className="flex justify-between text-lg font-bold">
                
                                <span>Total</span>
                
                                <span className="text-[#E53950]">
                                    Rp {totalPrice.toLocaleString("id-ID")}
                                </span>
                
                            </div>
                
                        </div>
                
                    </div>
                )}

              <button
                  className="
                      mt-4
                      w-full
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-[#2E2E2E]
                      bg-white/5
                      hover:bg-white/10
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      p-5
                      group
                  "
                  onClick={navigateContact}
              >
                  <div
                      className="
                          flex
                          items-center
                          justify-center
                          w-12
                          h-12
                          rounded-full
                          border
                          border-[#3A3A3A]
                          bg-[#1B1B1B]
                          group-hover:border-[#E53950]
                          transition-all
                      "
                  >
                      <Headset
                          className="w-6 h-6 text-white"
                          strokeWidth={2}
                      />
                  </div>

                  <div className="text-left">
                      <h3 className="font-semibold text-white">
                          Butuh Bantuan?
                      </h3>

                      <p className="text-gray-400 text-sm mt-1">
                          Kamu bisa hubungi admin disini.
                      </p>
                  </div>
              </button>

              <button
                onClick={handleCheckout}
                className="
                  w-full
                  mt-6
                  bg-[#E53950]
                  hover:bg-[#ff6078]
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  py-4
                  rounded-2xl
                  font-bold
                  text-lg
                  flex
                  justify-center
                  items-center
                  gap-2
                  shadow-[0_0_20px_rgba(229,57,80,.35)]
                ">
                Checkout
              </button>
            
            </div>
            
          </div>
        </div>
      </div>
  );
};