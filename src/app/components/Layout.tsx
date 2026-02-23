import { Outlet, NavLink } from "react-router";
import {
  LayoutDashboard,
  FileText,
  Radio,
  Phone,
  BarChart3,
  TrendingUp,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User,
  Bell,
  Search,
} from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Incidents", href: "/incidents", icon: FileText },
  { name: "Units", href: "/units", icon: Radio },
  { name: "Call Center", href: "/call-center", icon: Phone },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Analytics", href: "/analytics", icon: TrendingUp },
  { name: "Administration", href: "/administration", icon: Settings },
];

export function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Sidebar */}
      <aside
        className={`${
          collapsed ? "w-20" : "w-64"
        } bg-slate-900/50 backdrop-blur-xl border-r border-slate-700/50 flex flex-col transition-all duration-300 relative`}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
        
        {/* Logo/Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700/50 relative z-10">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                <Radio className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Police CAD</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 hover:bg-slate-800/50 rounded-lg text-slate-400 hover:text-white transition-all hover:scale-110"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Search */}
        {!collapsed && (
          <div className="p-3 relative z-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Quick search..."
                className="pl-9 bg-slate-950/50 border-slate-700/50 text-white placeholder:text-slate-500 h-9 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 relative z-10">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative overflow-hidden ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 animate-pulse" />
                  )}
                  <item.icon className="w-5 h-5 flex-shrink-0 relative z-10" />
                  {!collapsed && <span className="text-sm font-medium relative z-10">{item.name}</span>}
                  {!collapsed && isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* User Section */}
        <div className="p-3 border-t border-slate-700/50 relative z-10">
          <div className="flex items-center gap-3 px-3 py-2.5 mb-2 bg-slate-950/50 rounded-lg border border-slate-700/50">
            <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
              <User className="w-5 h-5 text-white" />
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">System Admin</p>
                <p className="text-xs text-slate-400 truncate">admin@cad.local</p>
              </div>
            )}
          </div>
          <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all hover:border-red-500/30 border border-transparent">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}