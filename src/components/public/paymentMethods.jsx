import bca from "../../assets/bca.png"
import bri from "../../assets/bri.png"
import dana from "../../assets/dana.png"
import bni from "../../assets/bni.png"
import gopay from "../../assets/gopay.png"
import mandiri from "../../assets/mandiri.png"
import ovo from "../../assets/ovo.jpg"
import qris from "../../assets/qris.png"
import visa from "../../assets/visa.png"
import shopee from "../../assets/shopee.png"

const payments = [
  { image: bca, className: "" },
  { image: bri, className: "" },
  { image: bni, className: "" },
  { image: mandiri, className: "" },

  { image: dana, className: "" },
  { image: gopay, className: "" },
  { image: ovo, className: "" },
  { image: shopee, className: "h-10" },

  { image: qris, className: "" },
  { image: visa, className: "h-10" },
]

const PaymentMethods = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Metode Pembayaran
        </h2>

        <p className="text-gray-400 mt-3">
          Mendukung berbagai metode pembayaran melalui Midtrans.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {payments.map((item, index) => (
          <div
            key={index}
            className="
              h-20
              rounded-2xl
              border
              border-[#2E2E2E]
              bg-[#1B1B1B]
              flex
              items-center
              justify-center
              hover:border-[#962D3E]
              hover:bg-[#222]
              transition-all
              duration-300
              p-4
            "
          >
            <img
              src={item.image}
              alt="Payment"
              className={`${item.className} object-contain`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PaymentMethods