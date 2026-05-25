import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const navigate = useNavigate();
    const [userContext, setUserContext] = useState(null);
    const [authChecking, setAuthChecking] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        if (!token) {
            navigate('/login');
            return;
        }

        const verifySession = async () => {
            try {
                const response = await axios.get("https://backend-project-login-production.up.railway.app/verify", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserContext(response.data.user);
                setAuthChecking(false);
            } catch (err) {
                console.error("Session identity validation failed:", err);
                localStorage.removeItem("token");
                navigate('/login');
            }
        };

        verifySession();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/login');
    };

    if (authChecking) {
        return (
            <div className="bg-[#10131a] min-h-screen flex items-center justify-center text-white font-mono text-xs md:text-sm p-4">
                COMPILING_SECURE_SESSION_STATE...
            </div>
        );
    }

    return (
        <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen font-['Inter'] selection:bg-[#d2e4fb] overflow-x-hidden">
            
            {mobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            <aside className={`fixed h-screen w-64 left-0 top-0 bg-[#f7f9fb] border-r border-[#c4c6cd] flex flex-col py-6 px-4 z-50 select-none transition-transform duration-300 lg:translate-x-0 ${
                mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className="flex justify-between items-center mb-8 px-2">
                    <div>
                        <h1 className="text-xl font-bold text-[#041627]">Enterprise OS</h1>
                        <p className="text-sm text-[#44474c]">Management Suite</p>
                    </div>
                    <button 
                        onClick={() => setMobileMenuOpen(false)}
                        className="lg:hidden p-1 text-[#44474c] hover:text-[#041627]"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                
                <nav className="flex flex-col gap-1 flex-grow overflow-y-auto">
                    {[
                        { name: 'Dashboard', icon: 'dashboard', active: true },
                        { name: 'Projects', icon: 'assignment' },
                        { name: 'Analytics', icon: 'leaderboard' },
                        { name: 'Directory', icon: 'group' },
                        { name: 'Settings', icon: 'settings' }
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={`#${item.name.toLowerCase()}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center gap-4 p-4 text-base transition-colors duration-200 ${
                                item.active 
                                ? 'text-[#041627] font-bold border-r-2 border-[#041627] bg-[#f2f4f6]' 
                                : 'text-[#44474c] hover:bg-[#eceef0]'
                            }`}
                        >
                            <span className="material-symbols-outlined">{item.icon}</span>
                            {item.name}
                        </a>
                    ))}
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-4 p-4 text-base transition-colors duration-200 text-red-600 hover:bg-red-50 text-left mt-auto cursor-pointer font-semibold"
                    >
                        <span className="material-symbols-outlined">logout</span>
                        Terminate Session
                    </button>
                </nav>

                <div className="mt-auto px-4 pt-4">
                    <div className="flex items-center gap-4 pt-6 border-t border-[#c4c6cd]">
                        <div className="w-8 h-8 rounded-lg bg-[#041627] flex items-center justify-center text-white font-bold text-xs shrink-0">
                            NX
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-xs font-semibold text-[#191c1e] truncate">Nexus global</p>
                            <p className="text-[10px] text-[#44474c] uppercase tracking-wider">Premium Plan</p>
                        </div>
                    </div>
                </div>
            </aside>

            <header className="flex justify-between items-center w-full h-16 px-4 md:px-6 fixed top-0 bg-[#f7f9fb] border-b border-[#c4c6cd] z-40 select-none lg:ml-64 lg:max-w-[calc(100%-16rem)]">
                <div className="flex items-center flex-1 gap-3">
                    <button 
                        onClick={() => setMobileMenuOpen(true)}
                        className="lg:hidden p-2 text-[#44474c] hover:text-[#041627] cursor-pointer"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <div className="relative w-full max-w-xs md:max-w-md hidden sm:block">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#44474c] text-lg">search</span>
                        <input 
                            className="w-full bg-[#f2f4f6] border border-[#c4c6cd] rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#041627] transition-all" 
                            placeholder="Search operations..." 
                            type="text"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3 md:gap-6">
                    <div className="flex items-center gap-1 md:gap-4">
                        <button className="p-2 text-[#44474c] hover:text-[#041627] transition-colors cursor-pointer">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="p-2 text-[#44474c] hover:text-[#041627] transition-colors cursor-pointer hidden sm:block">
                            <span className="material-symbols-outlined">help_outline</span>
                        </button>
                    </div>
                    <div className="h-6 w-px bg-[#c4c6cd] hidden sm:block"></div>
                    <button className="text-sm font-medium text-[#44474c] hover:text-[#041627] transition-colors cursor-pointer hidden sm:block">Support</button>
                    <div className="flex items-center gap-2 bg-[#041627] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg select-none uppercase font-bold tracking-wider text-[10px] md:text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                        <span className="truncate max-w-[70px] md:max-w-none">
                            {userContext?.username ? userContext.username.split('@')[0] : 'Operator'}
                        </span>
                    </div>
                </div>
            </header>

            <main className="pt-16 lg:ml-64 transition-all duration-300">
                <div className="max-w-[1440px] mx-auto p-4 md:p-6 lg:p-10 space-y-6 md:space-y-8">
                    
                    <section className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end select-none">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#041627] tracking-tight">Dashboard Overview</h2>
                            <p className="text-sm md:text-base text-[#44474c] mt-1">Welcome back. Here is what is happening with your projects today.</p>
                        </div>
                        <div className="flex gap-3 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-[#c4c6cd] px-4 py-2 rounded-lg text-sm font-medium text-[#041627] hover:bg-[#f2f4f6] transition-all cursor-pointer">
                                <span className="material-symbols-outlined text-lg">download</span>
                                <span className="hidden xs:inline">Export Report</span>
                            </button>
                            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#041627] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a2b3c] transition-all cursor-pointer">
                                <span className="material-symbols-outlined text-lg">add</span>
                                <span>Create Project</span>
                            </button>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 select-none">
                        {[
                            { label: 'Total Revenue', value: '$428,230.00', icon: 'payments', trend: '+12%', trendColor: 'bg-[#ffdad6] text-[#ba1a1a]', iconTrend: 'trending_up' },
                            { label: 'Active Projects', value: '24', icon: 'layers', trend: 'Stable', trendColor: 'bg-[#d3e4fe] text-[#54647a]', iconTrend: 'check_circle' },
                            { label: 'Avg. Completion Time', value: '4.2 Days', icon: 'timer' },
                            { label: 'Active Members', value: '156', icon: 'group', trend: '+5', trendColor: 'bg-[#feddb5] text-[#584326]', iconTrend: 'trending_up' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white border border-[#c4c6cd] p-5 md:p-6 rounded-lg hover:shadow-lg transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-[#d0e1fb] rounded-lg text-[#041627]">
                                        <span className="material-symbols-outlined">{stat.icon}</span>
                                    </div>
                                    {stat.trend && (
                                        <span className={`flex items-center px-2 py-1 rounded text-[10px] font-bold ${stat.trendColor}`}>
                                            <span className="material-symbols-outlined text-[14px] mr-1">{stat.iconTrend}</span> {stat.trend}
                                        </span>
                                    )}
                                </div>
                                <p className="text-[10px] md:text-xs font-bold text-[#44474c] uppercase tracking-widest">{stat.label}</p>
                                <h3 className="text-xl md:text-2xl font-semibold text-[#041627] mt-1">{stat.value}</h3>
                            </div>
                        ))}
                    </section>

                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-[#041627] text-white p-6 md:p-8 rounded-xl relative overflow-hidden h-[280px] md:h-[320px] flex flex-col justify-end select-none">
                                <img 
                                    className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" 
                                    alt="Abstract Platform Data Matrix" 
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                                />
                                <div className="relative z-10 max-w-lg">
                                    <span className="bg-[#505f76] px-2 py-1 rounded text-[10px] uppercase font-bold tracking-widest mb-3 inline-block">Platform Spotlight</span>
                                    <h4 className="text-xl md:text-3xl font-semibold mb-3 leading-tight tracking-tight">Q4 Market Expansion Approved</h4>
                                    <p className="text-xs md:text-sm text-[#8192a7] mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">Your team's latest analytical report suggests a 15% increase in operational efficiency if resources are reallocated to the Northern region.</p>
                                    <button className="bg-white text-[#041627] px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-xs md:text-sm font-bold hover:bg-[#e0e3e5] transition-all flex items-center gap-2 group w-fit cursor-pointer">
                                        Review Strategy Detail
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm md:text-base">arrow_forward</span>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white border border-[#c4c6cd] rounded-lg p-4 md:p-6 overflow-x-auto">
                                <div className="flex justify-between items-center mb-6 select-none min-w-[500px]">
                                    <h4 className="text-lg md:text-xl font-semibold text-[#041627]">Key Projects</h4>
                                    <button className="text-xs md:text-sm font-semibold text-[#041627] hover:underline cursor-pointer">View all projects</button>
                                </div>
                                <div className="min-w-[500px]">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-[#c4c6cd] select-none">
                                                <th className="pb-3 text-[10px] md:text-xs font-bold text-[#44474c] uppercase tracking-widest">Project Name</th>
                                                <th className="pb-3 text-[10px] md:text-xs font-bold text-[#44474c] uppercase tracking-widest">Status</th>
                                                <th className="pb-3 text-[10px] md:text-xs font-bold text-[#44474c] uppercase tracking-widest">Lead</th>
                                                <th className="pb-3 text-[10px] md:text-xs font-bold text-[#44474c] uppercase tracking-widest">Timeline</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-xs md:text-sm">
                                            {[
                                                { name: 'Alpha Rebrand', status: 'In Progress', statusColor: 'bg-[#feddb5] text-[#281802]', lead: 'James S.' },
                                                { name: 'Nexus API Beta', status: 'Planning', statusColor: 'bg-[#d3e4fe] text-[#38485d]', lead: 'Maria L.' },
                                                { name: 'Client Portal Update', status: 'Completed', statusColor: 'bg-[#d2e4fb] text-[#38485a]', lead: 'Kevin D.' }
                                            ].map((row, i) => (
                                                <tr key={i} className="border-b border-[#c4c6cd] last:border-0 hover:bg-[#f2f4f6] transition-colors">
                                                    <td className="py-4 md:py-6 font-semibold text-[#041627]">{row.name}</td>
                                                    <td className="py-4 md:py-6 select-none">
                                                        <span className={`px-2 py-1 rounded-sm text-[10px] md:text-[11px] font-bold ${row.statusColor}`}>{row.status}</span>
                                                    </td>
                                                    <td className="py-4 md:py-6 flex items-center gap-2">
                                                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-slate-200" /> {row.lead}
                                                    </td>
                                                    <td className="py-4 md:py-6 text-[#44474c] font-mono text-xs">2026-11-12</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-[#c4c6cd] rounded-lg p-4 md:p-6 flex flex-col">
                            <div className="flex justify-between items-center mb-6 select-none">
                                <h4 className="text-lg md:text-xl font-semibold text-[#041627]">Recent Activity</h4>
                                <span className="material-symbols-outlined text-[#44474c] cursor-pointer">more_vert</span>
                            </div>
                            <div className="space-y-6 md:space-y-8 flex-grow">
                                {[
                                    { user: 'Sarah Miller', action: 'commented on Alpha Rebrand', sub: '"The new typography looks much cleaner. Let\'s proceed."', time: '2 minutes ago', active: true },
                                    { user: 'System', action: 'generated monthly revenue report', time: '1 hour ago' },
                                    { user: 'New Client', action: 'onboarded: Horizon Ventures', time: '4 hours ago', active: true },
                                    { user: 'David Chen', action: 'uploaded 4 files to Nexus API', time: 'Yesterday at 5:45 PM', files: true }
                                ].map((act, i) => (
                                    <div key={i} className="flex gap-3 md:gap-4">
                                        <div className="mt-1 select-none shrink-0">
                                            <div className={`w-2 h-2 rounded-full ${act.active ? 'bg-[#041627] ring-4 ring-[#d2e4fb]' : 'bg-[#c4c6cd]'}`}></div>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs md:text-sm text-[#041627]"><strong>{act.user}</strong> {act.action}</p>
                                            {act.sub && <p className="text-xs md:text-sm text-[#44474c] italic font-normal">{act.sub}</p>}
                                            {act.files && (
                                                <div className="flex gap-1 mt-2 select-none">
                                                    <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-[#f2f4f6] border border-[#c4c6cd] flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-xs md:text-sm">description</span>
                                                    </div>
                                                    <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-[#f2f4f6] border border-[#c4c6cd] flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-xs md:text-sm">image</span>
                                                    </div>
                                                </div>
                                            )}
                                            <p className="text-[10px] md:text-[12px] text-[#44474c]">{act.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-6 py-2.5 border border-[#c4c6cd] rounded-lg text-xs md:text-sm font-bold text-[#041627] hover:bg-[#f2f4f6] transition-all cursor-pointer select-none">
                                Load More Activity
                            </button>
                        </div>
                    </section>
                </div>
            </main>

            <button className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-12 h-12 md:w-14 md:h-14 bg-[#041627] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group cursor-pointer select-none">
                <span className="material-symbols-outlined text-xl md:text-2xl">add</span>
                <span className="absolute right-16 bg-[#041627] text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:inline">
                    New Record
                </span>
            </button>
        </div>
    );
};

export default Dashboard;