import { Send,Play,Trash2,Filter } from "lucide-react";

export const OrderCards = ({handleSearch, filteredOrders, handleResend, handleProcess, handleDelete}) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-white">
                <thead className="bg-[#252525] text-gray-300 uppercase tracking-wider">
                    <tr>
                        <th className="px-6 py-4 text-left">Order ID</th>
                        <th className="px-6 py-4 text-left">Nama</th>
                        <th className="px-6 py-4 text-left">Game ID</th>
                        <th className="px-6 py-4 text-left">Total</th>
                        <th className="px-6 py-4 text-left">Whatsapp</th>
                        <th className="px-6 py-4 text-center">Status</th>
                        <th className="px-6 py-4 text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map((order) => (
                        <tr
                            key={order._id}
                            className="border-t border-gray-800 hover:bg-[#252525] transition">
                            <td className="px-6 py-5 font-medium">
                                {order.midtrans_order_id}
                            </td>
                            <td className="px-6 py-5">
                                {order.customer_name}
                            </td>
                            <td className="px-6 py-5">
                                {order.game_id}
                            </td>
                            <td className="px-6 py-5 font-semibold text-[#E14D62]">
                                Rp {order.total_price}
                            </td>
                            <td className="px-6 py-5">
                                {order.whatsapp}
                            </td>
                            <td className="px-6 py-5 text-center">
                                <span
                                    className={`px-4 py-1 rounded-full text-xs font-semibold
                                    ${
                                        order.status === "paid"
                                            ? "bg-green-500/20 text-green-400"
                                            : order.status === "pending"
                                            ? "bg-yellow-500/20 text-yellow-300"
                                            : "bg-red-500/20 text-red-400"
                                    }`}
                                >
                                    {order.status}
                                </span>
                            </td>
                            <td>
                                <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleResend(order._id)}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-900/20 border border-red-700/40 text-red-300 hover:bg-red-800/30 hover:border-red-500 transition-all duration-300"
                                >
                                    <Send size={16} />
                                    Resend
                                </button>
                                                                
                                <button
                                    onClick={() => handleProcess(order._id)}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-900/20 border border-green-700/40 text-green-300 hover:bg-green-800/30 hover:border-green-500 transition-all duration-300"
                                >
                                    <Play size={16} />
                                    Proses
                                </button>
                                    <button
                                        onClick={handleDelete}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-900/20 border border-red-700/40 text-red-300 hover:bg-red-800/30 hover:border-red-500 transition-all duration-300"
                                    >
                                        <Trash2 size={16} />
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


