import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { TrendingUp } from "lucide-react";

export const Chart = (props) => {
    return(
        <div className="col-span-3 m-10 bg-[#1B1B1B] border border-[#7A1F2B] rounded-2xl shadow-2xl p-6 min-h-[300px]">

    {/* Header */}
    <div className="flex justify-between items-center mb-6">
        <div>
            <h2 className="text-xl font-bold text-white">
                Revenue Overview
            </h2>

            <p className="text-gray-400 text-sm">
                Total revenue per day
            </p>
        </div>

        <div className="flex items-center gap-2 bg-[#272727] px-4 py-2 rounded-xl">
            <TrendingUp size={18} className="text-green-400"/>
            <span className="text-green-400 font-semibold">
                +12%
            </span>
        </div>
    </div>

    {/* Revenue Card */}
    <div className="bg-[#232323] rounded-xl p-4 border border-[#383838] mb-5">
        <p className="text-gray-400 text-sm">
            Total Revenue
        </p>

        <h1 className="text-3xl font-bold mt-1 text-white">
            Rp {props.dash.total_revenue}
        </h1>
    </div>

    <div className="px-6">
    <ResponsiveContainer width="100%" height={260}>
        <LineChart data={props.chart}>

            <CartesianGrid
                stroke="#333"
                strokeDasharray="5 5"
            />

            <XAxis
                dataKey="date"
                stroke="#9CA3AF"
            />

            <YAxis
                stroke="#9CA3AF"
            />

            <Tooltip
                contentStyle={{
                    background: "#1B1B1B",
                    border: "1px solid #7A1F2B",
                    borderRadius: "12px",
                    color: "#fff",
                }}
            />

            <Line
                type="monotone"
                dataKey="total"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{
                    r: 5,
                    fill: "#ef4444",
                    stroke: "#fff",
                    strokeWidth: 2,
                }}
                activeDot={{
                    r: 8,
                }}
            />

        </LineChart>
    </ResponsiveContainer>
    </div>
</div>
    )
}
