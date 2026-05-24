import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const navLinks = [
        { name: 'Products', href: '/products' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Support', href: '/support', active: true },
    ];
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authTab, setAuthTab] = useState("signin");
    const [loading, setLoading] = useState(false);

    const BACKEND_URL = "https://backend-project-login-production.up.railway.app";

    const handleAuthSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            alert("Please fill in all security fields.");
            return;
        }

        setLoading(true);
        const endpoint = authTab === 'signin' ? '/login' : '/signup';

        try {
            const response = await axios.post(`${BACKEND_URL}${endpoint}`, {
                username: email,
                password: password
            });

            if (authTab === 'signin') {
                localStorage.setItem("token", response.data.token);
                alert("Login Successful!");
                navigate('/dashboard');
            } else {
                alert("Account has been created successfully!");
                setAuthTab('signin');
                setPassword("");
            }
        } catch (err) {
            console.error(`Auth Core Failure [${endpoint}]:`, err);
            alert(err.response?.data?.message || "Authentication network lookup failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen flex flex-col font-['Inter'] selection:bg-[#d2e4fb]">

            <header className="bg-white border-b border-[#c4c6cd] fixed top-0 w-full z-50">
                <div className="flex justify-between items-center w-full px-10 py-4 max-w-[1440px] mx-auto">
                    <div className="text-2xl font-bold tracking-tight text-[#041627] select-none">Nexus Enterprise</div>

                    <nav className="hidden md:flex gap-6 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-200 ${link.active
                                    ? 'text-[#041627] font-bold border-b-2 border-[#041627]'
                                    : 'text-[#505f76] hover:text-[#041627]'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <button className="material-symbols-outlined text-[#505f76] hover:text-[#041627] transition-colors cursor-pointer">search</button>
                        <button className="material-symbols-outlined text-[#505f76] hover:text-[#041627] transition-colors cursor-pointer">help_outline</button>
                    </div>
                </div>
            </header>

            <main className="flex-grow pt-32 pb-8 px-10 flex items-center justify-center">
                <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-6 bg-white border border-[#c4c6cd] overflow-hidden rounded-sm shadow-sm">

                    <div className="hidden lg:flex lg:w-1/2 bg-[#041627] relative min-h-[650px] items-center justify-center p-8">
                        <div className="absolute inset-0 opacity-40">
                            <img
                                className="w-full h-full object-cover"
                                alt="Enterprise Architecture Infrastructure"
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                            />
                        </div>
                        <div className="relative z-10 text-white max-w-md select-none">
                            <h1 className="text-5xl font-bold leading-tight mb-4 tracking-tighter">Enterprise Intelligence. Redefined.</h1>
                            <p className="text-lg opacity-80 font-normal leading-relaxed">
                                Access the Nexus Enterprise ecosystem to manage global infrastructure, data pipelines, and operational excellence with executive precision.
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col">
                        <div className="mb-8">
                            <div className="flex gap-6 border-b border-[#c4c6cd] mb-8">
                                <button
                                    onClick={() => setAuthTab('signin')}
                                    className={`pb-4 text-sm font-semibold transition-all border-b-2 cursor-pointer ${authTab === 'signin' ? 'border-[#041627] text-[#041627]' : 'border-transparent text-[#505f76]'}`}
                                >
                                    Sign In
                                </button>
                                <button
                                    onClick={() => setAuthTab('signup')}
                                    className={`pb-4 text-sm font-semibold transition-all border-b-2 cursor-pointer ${authTab === 'signup' ? 'border-[#041627] text-[#041627]' : 'border-transparent text-[#505f76]'}`}
                                >
                                    Create Account
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-1 select-none">
                                <h2 className="text-3xl font-bold text-[#041627]">
                                    {authTab === 'signin' ? 'Welcome back' : 'Get started'}
                                </h2>
                                <p className="text-sm text-[#505f76]">
                                    {authTab === 'signin'
                                        ? 'Enter your credentials to access your secure dashboard.'
                                        : 'Register an account identity inside the global core registry.'}
                                </p>
                            </div>

                            <form className="space-y-4" onSubmit={handleAuthSubmit}>
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-[#505f76] uppercase tracking-wider">Email Address</label>
                                    <input
                                        className="w-full px-4 py-3 border border-[#c4c6cd] rounded-sm focus:outline-none focus:border-[#041627] text-sm bg-transparent transition-colors text-[#041627]"
                                        placeholder="name@company.com"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between items-center">
                                        <label className="block text-xs font-bold text-[#505f76] uppercase tracking-wider">Password</label>
                                        {authTab === 'signin' && (
                                            <a className="text-xs font-bold text-[#041627] hover:underline" href="#forgot">Forgot password?</a>
                                        )}
                                    </div>
                                    <input
                                        className="w-full px-4 py-3 border border-[#c4c6cd] rounded-sm focus:outline-none focus:border-[#041627] text-sm bg-transparent transition-colors text-[#041627]"
                                        placeholder="••••••••"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                {authTab === 'signin' && (
                                    <div className="flex items-center gap-2 select-none">
                                        <input className="w-4 h-4 accent-[#041627] cursor-pointer" id="remember" type="checkbox" />
                                        <label className="text-sm text-[#505f76] cursor-pointer" htmlFor="remember">Remember this device for 30 days</label>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#041627] text-white px-6 py-4 rounded-lg font-bold text-sm hover:bg-[#1a2b3c] transition-all shadow-md active:scale-[0.98] uppercase tracking-wide cursor-pointer disabled:bg-slate-400"
                                >
                                    {loading ? 'Processing...' : authTab === 'signin' ? 'Sign In' : 'Create Account'}
                                </button>
                            </form>

                            <div className="pt-4 flex items-center gap-4 select-none">
                                <div className="h-px flex-grow bg-[#c4c6cd]"></div>
                                <span className="text-xs font-bold text-[#505f76] uppercase">Or continue with</span>
                                <div className="h-px flex-grow bg-[#c4c6cd]"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-2 border border-[#c4c6cd] py-3 hover:bg-[#eceef0] transition-colors rounded-sm cursor-pointer">
                                    <span className="material-symbols-outlined text-[20px]">account_circle</span>
                                    <span className="text-sm font-bold">SSO</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 border border-[#c4c6cd] py-3 hover:bg-[#eceef0] transition-colors rounded-sm cursor-pointer">
                                    <span className="material-symbols-outlined text-[20px]">key</span>
                                    <span className="text-sm font-bold">Keycard</span>
                                </button>
                            </div>
                        </div>

                        <p className="mt-auto pt-12 text-sm text-[#505f76] text-center select-none">
                            Managing multiple accounts? <a className="text-[#041627] font-bold hover:underline" href="#portal">Enterprise Portal</a>
                        </p>
                    </div>
                </div>
            </main>

            <footer className="bg-[#f7f9fb] border-t border-[#c4c6cd] select-none">
                <div className="w-full py-8 px-10 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="text-sm font-bold text-[#041627]">Nexus Enterprise Solutions</div>
                        <div className="text-xs text-[#505f76]">© 2026 Nexus Enterprise Solutions. All rights reserved.</div>
                    </div>
                    <div className="flex gap-6 flex-wrap justify-center">
                        {['Privacy Policy', 'Terms of Service', 'Security', 'Status'].map(item => (
                            <a key={item} className="text-xs font-semibold text-[#505f76] hover:text-[#041627] transition-colors" href={`#${item.toLowerCase().replace(' ', '-')}`}>
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Login;