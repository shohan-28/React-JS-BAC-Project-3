import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Login = () => {
    const { login } = useContext(UserContext);
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const res = login(input.email, input.password);

        if(res.success){
            Swal.fire({
                title: "Login Successful!",
                icon: "success",
                time: 1500,
                showConfirmButton: false
            });
            navigate("/")

        } else{
            setError(res.message);
            toast.error(res.message)
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-slate-300 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-gray-300 backdrop-blur-lg rounded-xl shadow-xl p-8 border border-white/20">
                <h2 className="text-3xl font-semibold text-black text-center mb-6 tracking-wide">
                    Welcome Back
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm text-black mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 rounded-lg bg-white/20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                            onChange={e => setInput({...input, email: e.target.value })}

                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-black mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 rounded-lg bg-white/20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"

                            onChange={e => setInput({...input, password: e.target.value })}

                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-black text-center mt-6">
                    Don't have an account? <a href="#" className="text-cyan-600 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;

