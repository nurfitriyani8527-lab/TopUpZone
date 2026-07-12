import { useState } from "react";
import { PostLogin } from "../../services/api"
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [formLogin, setFormLogin] = useState({
        email : "",
        password : ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value,
            });
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        if(!formLogin.email){
            alert("email wajib diisi!")
        }
        if(!formLogin.password){
            alert("password wajib diisi!")
        }
        console.log("sebelum fetch, formLogin:", formLogin)
        try {
            const result = await PostLogin({
                email : formLogin.email,
                password : formLogin.password
            })
            console.log(result)

            localStorage.setItem("token", result.data.token);
            navigate("/admin/dashboard");
        } catch(err) {
            console.error("Error:", err)  // ← ini yang penting, lihat di console
        }
    }

    return (
    <div className="min-h-screen flex justify-center items-center bg-[#232323]">
        <form className="w-96 bg-[#111111] p-8 rounded-2xl shadow-lg border border-[#7A1F2B]">
            <h1 className="text-2xl font-bold text-white mb-2">
                Login Admin
            </h1>
            <p className="text-sm text-white mb-6">
                Hanya administrator yang dapat login.
            </p>
            <div className="mb-4">
                <label className="block text-sm font-medium text-white mb-2">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Masukkan email"
                    name="email"
                    value={formLogin.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-white mb-2">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="Masukkan password"
                    name="password"
                    value={formLogin.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
                />
            </div>
            <button
                onClick={handleLogin}
                type="button"
                className="w-full py-3 bg-[#7A1F2B] hover:bg-[#962D3E] text-white rounded-lg font-medium transition"
            >
                Login
            </button>
        </form>
    </div>
    )
}