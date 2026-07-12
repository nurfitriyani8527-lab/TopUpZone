import { useEffect, useState } from "react"
import { GetDashboard,getAuthHeader,GetStats } from "../../services/api"
import { Loading } from "../../components/ui/buffering"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Chart } from "../../components/charts/chartAdmin"
import { ShoppingCart,Wallet,BadgeCheck,Clock3,CircleX } from "lucide-react";

export const Dashboard = () => {
    const [loading, setLoading] = useState(true)
    const [dashboard, setDashboard] = useState({})
    const [stats, setStats] = useState([])
    // const Navigate = useNavigate() 
    useEffect(() => {
        async function fetchAll(){
            await GetDashboard()
                .then((data) => {
                    console.log(data)
                    setDashboard(data)
                }) 
            await GetStats()
                .then((data) => {
                    console.log(data)
                    setStats(data)
            })
            .finally(() => setLoading(false))
        }
        fetchAll()
    }, [])

    if(loading == true){
        return (
            Loading()
        )
    }
    const chartData = stats.map((item) => ({
        date: `${item._id.day}/${item._id.month}`, 
        total: item.total
    }))
    console.log(chartData)

    return (
        <>
            <Chart dash={dashboard} chart={chartData} />
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="grid grid-cols-6 gap-6">
                
                    <div className="col-span-3 bg-gradient-to-br from-[#1B1B1B] to-[#252525] border border-[#7A1F2B] rounded-3xl p-7 shadow-xl hover:shadow-[#7A1F2B]/30 hover:-translate-y-1 transition duration-300">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-400 text-sm uppercase tracking-widest">
                                    Total Orders
                                </p>
                                <h1 className="text-5xl font-bold text-white mt-4">
                                    {dashboard.total_orders}
                                </h1>
                            </div>
                            <div className="w-14 h-14 rounded-2xl bg-[#7A1F2B]/20 flex items-center justify-center">
                                <ShoppingCart size={28} className="text-[#E14D62]" />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 bg-gradient-to-br from-[#1B1B1B] to-[#252525] border border-[#7A1F2B] rounded-3xl p-7 shadow-xl hover:shadow-[#7A1F2B]/30 hover:-translate-y-1 transition duration-300">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-400 text-sm uppercase tracking-widest">
                                    Total Revenue
                                </p>
                                <h1 className="text-4xl font-bold text-white mt-4">
                                    Rp. {dashboard.total_revenue}
                                </h1>
                            </div>
                            <div className="w-14 h-14 rounded-2xl bg-[#7A1F2B]/20 flex items-center justify-center">
                                <Wallet size={28} className="text-[#E14D62]" />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 bg-[#1B1B1B] border border-green-500 rounded-3xl p-6 shadow-xl hover:-translate-y-1 transition duration-300">
                        <div className="flex flex-col items-center justify-center h-full">
                        <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">
                            <BadgeCheck size={28} className="text-green-400" />
                        </div>
                            <p className="text-gray-400 uppercase tracking-wider">
                                Paid
                            </p>
                            <h1 className="text-5xl font-bold text-green-400 mt-3">
                                {dashboard.paid}
                            </h1>
                        </div>
                    </div>

                    <div className="col-span-2 bg-[#1B1B1B] border border-yellow-400 rounded-3xl p-6 shadow-xl hover:-translate-y-1 transition duration-300">
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
                                <Clock3 size={28} className="text-yellow-400" />
                            </div>
                            <p className="text-gray-400 uppercase tracking-wider">
                                Pending
                            </p>
                            <h1 className="text-5xl font-bold text-yellow-300 mt-3">
                                {dashboard.pending}
                            </h1>
                        </div>
                    </div>

                    <div className="col-span-2 bg-[#1B1B1B] border border-red-500 rounded-3xl p-6 shadow-xl hover:-translate-y-1 transition duration-300">
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center">
                                <CircleX size={28} className="text-red-400" />
                            </div>
                            <p className="text-gray-400 uppercase tracking-wider">
                                Failed
                            </p>
                            <h1 className="text-5xl font-bold text-red-400 mt-3">
                                {dashboard.failed}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}