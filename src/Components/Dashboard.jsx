import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen font-['Inter'] selection:bg-[#d2e4fb]">
      
      {/* SideNavBar */}
      <aside className="fixed h-screen w-64 left-0 top-0 bg-[#f7f9fb] border-r border-[#c4c6cd] flex flex-col py-6 px-4 z-50">
        <div className="mb-8 px-2">
          <h1 className="text-xl font-bold text-[#041627]">Enterprise OS</h1>
          <p className="text-sm text-[#44474c]">Management Suite</p>
        </div>
        
        <nav className="flex flex-col gap-1 flex-grow">
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
        </nav>

        <div className="mt-auto px-4">
          <div className="flex items-center gap-4 pt-6 border-t border-[#c4c6cd]">
            <img 
              alt="Logo" 
              className="w-8 h-8 rounded-lg bg-[#1a2b3c] p-1" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLgSIcLKePKCmo3uso1CCTYWm4agQ1nU4f9iC1bWWMICxWH8VyiXZLc9WP5lR3fZaUJ1X2-uj8I4Lf6Hcaim51VLE38O_c8kspRobDxmQVbYD_SwQp_OVd2UgFkM2lIFo8B3bMm05_ojKaxYUy0_V9VGDW8txhz2oVykaNnDTXxT_YdZ9IdWS-RqbTLzKT1sVn3tCHWdnO4lTk-8KDI7u0js9Xd2aFerhgS4OgV3KRGobRGBzGXnsd99vfnByZQMx2y4Ju9Y_L1yLs"
            />
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-[#191c1e] truncate">Global Corp</p>
              <p className="text-[10px] text-[#44474c] uppercase tracking-wider">Premium Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full h-16 px-6 ml-64 max-w-[calc(100%-16rem)] fixed top-0 bg-[#f7f9fb] border-b border-[#c4c6cd] z-40">
        <div className="flex items-center flex-1">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#44474c] text-lg">search</span>
            <input 
              className="w-full bg-[#f2f4f6] border border-[#c4c6cd] rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#041627] transition-all" 
              placeholder="Search operations..." 
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <button className="p-2 text-[#44474c] hover:text-[#041627] transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-[#44474c] hover:text-[#041627] transition-colors">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
          </div>
          <div className="h-6 w-px bg-[#c4c6cd]"></div>
          <button className="text-sm font-medium text-[#44474c] hover:text-[#041627] transition-colors">Support</button>
          <button className="flex items-center gap-2 bg-[#041627] text-white px-6 py-2 rounded-lg text-sm hover:bg-[#1a2b3c] transition-colors">
            <img 
              alt="User" 
              className="w-6 h-6 rounded-full bg-[#e0e3e5]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG3Ea2VaV03ISPbSPSP68_hvskbvTFfn2bkZsZzfUG28ul7_Iqr_VWQ3cgWWlGe-WYJC_NMqlWeBmcgxm8FIh-cxE2KOheY4HWfxdKEScnWsHVEPazOk9XtqmD9sS4X13J1_wFxRRwgiu_5mSISC1ZCIWoJZj5YOL6N6hTV7lOnvT5kNnZXOFLaeXupVQ6PS9bJnfzUbfsHBXXadZGiObLJ6Dw1xNcG0LGig8XxJ9Z0fBucmEyspzJQVVUq2Gb9SbeWqmo0ZSvw74P"
            />
            Profile
          </button>
        </div>
      </header>

      {/* Main Canvas */}
      <main className="ml-64 pt-16">
        <div className="max-w-[1440px] mx-auto p-10 space-y-8">
          
          {/* Welcome Header */}
          <section className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-semibold text-[#041627] tracking-tight">Dashboard Overview</h2>
              <p className="text-base text-[#44474c] mt-1">Welcome back. Here is what is happening with your projects today.</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 border border-[#c4c6cd] px-6 py-2 rounded-lg text-sm font-medium text-[#041627] hover:bg-[#f2f4f6] transition-all">
                <span className="material-symbols-outlined text-lg">download</span>
                Export Report
              </button>
              <button className="flex items-center gap-2 bg-[#041627] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#1a2b3c] transition-all">
                <span className="material-symbols-outlined text-lg">add</span>
                Create Project
              </button>
            </div>
          </section>

          {/* High Level Metrics Bento */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Revenue', value: '$428,230.00', icon: 'payments', trend: '+12%', trendColor: 'bg-[#ffdad6] text-[#ba1a1a]', iconTrend: 'trending_up' },
              { label: 'Active Projects', value: '24', icon: 'layers', trend: 'Stable', trendColor: 'bg-[#d3e4fe] text-[#54647a]', iconTrend: 'check_circle' },
              { label: 'Avg. Completion Time', value: '4.2 Days', icon: 'timer' },
              { label: 'Active Members', value: '156', icon: 'group', trend: '+5', trendColor: 'bg-[#feddb5] text-[#584326]', iconTrend: 'trending_up' }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-[#c4c6cd] p-6 rounded-lg hover:shadow-lg transition-all group">
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
                <p className="text-xs font-bold text-[#44474c] uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-2xl font-semibold text-[#041627] mt-1">{stat.value}</h3>
              </div>
            ))}
          </section>

          {/* Insights & Activity */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="lg:col-span-2 space-y-6">
              {/* Highlight Card */}
              <div className="bg-[#041627] text-white p-8 rounded-xl relative overflow-hidden h-[320px] flex flex-col justify-end">
                <img 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay grayscale" 
                  alt="Abstract Data" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHAQEbs3sxiPsafE1EzablrE7txT1AipR3j9AJGYht13PmQ7VGQ9T0BIg2HCmKyc3P7Ears8wT03BIwXLT2fJ83p-J0u7HvLufvBzI5O3QqBE5XG-ZBf6PIhi-axVMS44t47AEIw9JGrCTz6Hywe6LWG4JZcXKST6qgzRgdZFadAJTrionzsRAjl1JHfGN-Jh6lHbuVXIqHW7VYUS6dLbo_BmVwn8AZXNMjBYG1Py882YSmygD9_aclOrhxkMeYg6V8F5WMdG6q42w"
                />
                <div className="relative z-10 max-w-lg">
                  <span className="bg-[#505f76] px-2 py-1 rounded text-[10px] uppercase font-bold tracking-widest mb-4 inline-block">Platform Spotlight</span>
                  <h4 className="text-3xl font-semibold mb-4 leading-tight tracking-tight">Q4 Market Expansion Strategy has been approved</h4>
                  <p className="text-base text-[#8192a7] mb-6">Your team's latest analytical report suggests a 15% increase in operational efficiency if resources are reallocated to the Northern region.</p>
                  <button className="bg-white text-[#041627] px-8 py-3 rounded-lg text-sm font-bold hover:bg-[#e0e3e5] transition-all flex items-center gap-2 group w-fit">
                    Review Strategy Detail
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Project Table */}
              <div className="bg-white border border-[#c4c6cd] rounded-lg p-6">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-xl font-semibold text-[#041627]">Key Projects</h4>
                  <button className="text-sm font-semibold text-[#041627] hover:underline">View all projects</button>
                </div>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[#c4c6cd]">
                      <th className="pb-4 text-xs font-bold text-[#44474c] uppercase tracking-widest">Project Name</th>
                      <th className="pb-4 text-xs font-bold text-[#44474c] uppercase tracking-widest">Status</th>
                      <th className="pb-4 text-xs font-bold text-[#44474c] uppercase tracking-widest">Lead</th>
                      <th className="pb-4 text-xs font-bold text-[#44474c] uppercase tracking-widest">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      { name: 'Alpha Rebrand', status: 'In Progress', statusColor: 'bg-[#feddb5] text-[#281802]', lead: 'James S.' },
                      { name: 'Nexus API Beta', status: 'Planning', statusColor: 'bg-[#d3e4fe] text-[#38485d]', lead: 'Maria L.' },
                      { name: 'Client Portal Update', status: 'Completed', statusColor: 'bg-[#d2e4fb] text-[#38485a]', lead: 'Kevin D.' }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[#c4c6cd] last:border-0 hover:bg-[#f2f4f6] transition-colors">
                        <td className="py-6 font-semibold text-[#041627]">{row.name}</td>
                        <td className="py-6">
                          <span className={`px-2 py-1 rounded-sm text-[11px] font-bold ${row.statusColor}`}>{row.status}</span>
                        </td>
                        <td className="py-6 flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-200" /> {row.lead}
                        </td>
                        <td className="py-6 text-[#44474c]">Nov 12 - Dec 20</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white border border-[#c4c6cd] rounded-lg p-6 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-xl font-semibold text-[#041627]">Recent Activity</h4>
                <span className="material-symbols-outlined text-[#44474c] cursor-pointer">more_vert</span>
              </div>
              <div className="space-y-8 flex-grow">
                {[
                  { user: 'Sarah Miller', action: 'commented on Alpha Rebrand', sub: '"The new typography looks much cleaner. Let\'s proceed."', time: '2 minutes ago', active: true },
                  { user: 'System', action: 'generated monthly revenue report', time: '1 hour ago' },
                  { user: 'New Client', action: 'onboarded: Horizon Ventures', time: '4 hours ago', active: true },
                  { user: 'David Chen', action: 'uploaded 4 files to Nexus API', time: 'Yesterday at 5:45 PM', files: true }
                ].map((act, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <div className={`w-2 h-2 rounded-full ${act.active ? 'bg-[#041627] ring-4 ring-[#d2e4fb]' : 'bg-[#c4c6cd]'}`}></div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-[#041627]"><strong>{act.user}</strong> {act.action}</p>
                      {act.sub && <p className="text-sm text-[#44474c] italic font-normal">{act.sub}</p>}
                      {act.files && (
                        <div className="flex gap-1 mt-2">
                          <div className="w-8 h-8 rounded bg-[#f2f4f6] border border-[#c4c6cd] flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm">description</span>
                          </div>
                          <div className="w-8 h-8 rounded bg-[#f2f4f6] border border-[#c4c6cd] flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm">image</span>
                          </div>
                        </div>
                      )}
                      <p className="text-[12px] text-[#44474c]">{act.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 border border-[#c4c6cd] rounded-lg text-sm font-bold text-[#041627] hover:bg-[#f2f4f6] transition-all">
                Load More Activity
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-10 right-10 w-14 h-14 bg-[#041627] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
        <span className="material-symbols-outlined">add</span>
        <span className="absolute right-16 bg-[#041627] text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          New Record
        </span>
      </button>
    </div>
  );
};

export default Dashboard;