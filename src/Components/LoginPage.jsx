import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router';
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

    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:5050/signup", {
                username: email,
                password: password
            });
            alert("Account has been created ");
            setAuthTab('signin');
        } catch (err) {
            alert(err.response?.data?.message || "Signup failed");
        }

    };


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5050/login", {
                username: email,
                password: password
            });
            localStorage.setItem("token", response.data.token);
            alert("Login Successful!");
            navigate('/dashboard');
        } catch (err) {
            alert(err.response?.data?.message || "Invalid Credentials");
        }

    };
    return (
        <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen flex flex-col font-['Inter'] selection:bg-[#d2e4fb]">

            {/* TopAppBar */}
            <header className="bg-white border-b border-[#c4c6cd] fixed top-0 w-full z-50">
                <div className="flex justify-between items-center w-full px-10 py-4 max-w-[1440px] mx-auto">
                    <div className="text-2xl font-bold tracking-tight text-[#041627]">Nexus Enterprise</div>

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
                        <button className="material-symbols-outlined text-[#505f76] hover:text-[#041627] transition-colors">search</button>
                        <button className="material-symbols-outlined text-[#505f76] hover:text-[#041627] transition-colors">help_outline</button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-32 pb-8 px-10 flex items-center justify-center">
                <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-6 bg-white border border-[#c4c6cd] overflow-hidden rounded-sm shadow-sm">

                    {/* Branding/Image Side */}
                    <div className="hidden lg:flex lg:w-1/2 bg-[#041627] relative min-h-[650px] items-center justify-center p-8">
                        <div className="absolute inset-0 opacity-40">
                            <img
                                className="w-full h-full object-cover"
                                alt="Architecture"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4dqQqmpcfXTmXC-iVNBIQz9BZ9fZ6rkUxXDFCZPcIe1UTLNfODyMq6-R_1ffcCjB7uk8DQURBgxNj5jVQwrlvXiHleD7YlsFVhZ8rEocaMz_Hrb5QBmru7SC3jsF-8tOE7FqvLrYywaR8wZ9obUIL320QxWGduxGCdnezuTc9DopU6nfQRFZ53sEdj7_w3I6OnMbynl1edu85gdDBFQDIHdKoaub41fk81pv3a1F2zM94v9uz6WY5bdz3kxqIy_zG2JTO9-L6tg83"
                            />
                        </div>
                        <div className="relative z-10 text-white max-w-md">
                            <h1 className="text-5xl font-bold leading-tight mb-4 tracking-tighter">Enterprise Intelligence. Redefined.</h1>
                            <p className="text-lg opacity-80 font-normal leading-relaxed">
                                Access the Nexus Enterprise ecosystem to manage global infrastructure, data pipelines, and operational excellence with executive precision.
                            </p>
                        </div>
                    </div>

                    {/* Auth Forms Side */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col">
                        <div className="mb-8">
                            <div className="flex gap-6 border-b border-[#c4c6cd] mb-8">
                                <button
                                    onClick={() => setAuthTab('signin')}
                                    className={`pb-4 text-sm font-semibold transition-all border-b-2 ${authTab === 'signin' ? 'border-[#041627] text-[#041627]' : 'border-transparent text-[#505f76]'}`}
                                >
                                    Sign In
                                </button>
                                <button
                                    onClick={() => setAuthTab('signup')}
                                    className={`pb-4 text-sm font-semibold transition-all border-b-2 ${authTab === 'signup' ? 'border-[#041627] text-[#041627]' : 'border-transparent text-[#505f76]'}`}
                                >
                                    Create Account
                                </button>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <h2 className="text-3xl font-bold text-[#041627]">Welcome back</h2>
                                <p className="text-sm text-[#505f76]">Enter your credentials to access your dashboard.</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-[#505f76] uppercase tracking-wider">Email Address</label>
                                    <input
                                        className="w-full px-4 py-3 border border-[#c4c6cd] rounded-sm focus:outline-none focus:border-[#041627] text-sm bg-transparent transition-colors"
                                        placeholder="name@company.com"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} // Email store hogi
                                    />
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between items-center">
                                        <label className="block text-xs font-bold text-[#505f76] uppercase tracking-wider">Password</label>
                                        <a className="text-xs font-bold text-[#041627] hover:underline" href="#forgot">Forgot password?</a>
                                    </div>
                                    <input
                                        className="w-full px-4 py-3 border border-[#c4c6cd] rounded-sm focus:outline-none focus:border-[#041627] text-sm bg-transparent transition-colors"
                                        placeholder="••••••••"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <input className="w-4 h-4 accent-[#041627] cursor-pointer" id="remember" type="checkbox" />
                                    <label className="text-sm text-[#505f76] cursor-pointer" htmlFor="remember">Remember this device for 30 days</label>
                                </div>

                                <button
                                    onClick={authTab === 'signin' ? handleLogin : handleSignup}
                                    className="w-full bg-[#041627] text-white px-6 py-4 rounded-lg font-bold text-sm hover:bg-[#1a2b3c] transition-all shadow-md active:scale-[0.98] uppercase tracking-wide"
                                >
                                    {authTab === 'signin' ? 'Sign In' : 'Create Account'}
                                </button>
                            </form>

                            <div className="pt-4 flex items-center gap-4">
                                <div className="h-px flex-grow bg-[#c4c6cd]"></div>
                                <span className="text-xs font-bold text-[#505f76] uppercase">Or continue with</span>
                                <div className="h-px flex-grow bg-[#c4c6cd]"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-2 border border-[#c4c6cd] py-3 hover:bg-[#eceef0] transition-colors rounded-sm">
                                    <span className="material-symbols-outlined text-[20px]">account_circle</span>
                                    <span className="text-sm font-bold">SSO</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 border border-[#c4c6cd] py-3 hover:bg-[#eceef0] transition-colors rounded-sm">
                                    <span className="material-symbols-outlined text-[20px]">key</span>
                                    <span className="text-sm font-bold">Keycard</span>
                                </button>
                            </div>
                        </div>

                        <p className="mt-auto pt-12 text-sm text-[#505f76] text-center">
                            Managing multiple accounts? <a className="text-[#041627] font-bold hover:underline" href="#portal">Enterprise Portal</a>
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#f7f9fb] border-t border-[#c4c6cd]">
                <div className="w-full py-8 px-10 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="text-sm font-bold text-[#041627]">Nexus Enterprise Solutions</div>
                        <div className="text-xs text-[#505f76]">© 2024 Nexus Enterprise Solutions. All rights reserved.</div>
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