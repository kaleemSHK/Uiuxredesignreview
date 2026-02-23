import { AlertTriangle, MapPin, Plus, Radio, RefreshCw, Search, Zap, TrendingUp, Activity } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const stats = [
  { label: "Active Incidents", value: "15", icon: AlertTriangle, gradient: "from-rose-500 to-pink-600", glow: "rose" },
  { label: "Ready to Dispatch", value: "1", icon: Radio, gradient: "from-emerald-500 to-teal-600", glow: "emerald" },
  { label: "Dispatch Log Queue", value: "4", icon: Zap, gradient: "from-amber-500 to-orange-600", glow: "amber" },
  { label: "Today Alerts", value: "0", icon: Activity, gradient: "from-purple-500 to-violet-600", glow: "purple" },
];

const incidents = [
  {
    id: "240000000-HL3XVGD2-2294",
    type: "Traffic",
    priority: "emergency",
    status: "assigned",
    unit: "—",
    time: "3:53:37 PM",
  },
  {
    id: "240000000-HL6Z7MR2-203",
    type: "Assault",
    priority: "emergency",
    status: "new",
    unit: "—",
    time: "2:56:47 AM",
  },
  {
    id: "240000000-HL9Z2KCP-52",
    type: "Assault",
    priority: "high",
    status: "assigned",
    unit: "—",
    time: "9:51:12 PM",
  },
  {
    id: "HC4PPAA2-",
    type: "Suspicious",
    priority: "high",
    status: "assigned",
    unit: "—",
    time: "—",
  },
  {
    id: "240000000-HL8VVDQH-692",
    type: "Assault",
    priority: "emergency",
    status: "assigned",
    unit: "—",
    time: "—",
  },
];

const units = [
  { id: "Alpha-1", status: "on-route", gradient: "from-purple-500 to-pink-500", pulse: true },
  { id: "Alpha-2", status: "on-route", gradient: "from-purple-500 to-pink-500", pulse: true },
  { id: "Bravo-1", status: "available", gradient: "from-emerald-500 to-teal-500", pulse: false },
  { id: "Charlie-1", status: "busy", gradient: "from-amber-500 to-orange-500", pulse: false },
  { id: "VAN-1", status: "available", gradient: "from-emerald-500 to-teal-500", pulse: false },
];

export function Dashboard() {
  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="h-16 border-b border-slate-700/50 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-20">
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Command Center</h1>
          <p className="text-sm text-slate-400">Real-time dispatch overview</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-950/50 rounded-lg border border-slate-700/50">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
            <span className="text-sm text-slate-300 font-mono">21:19:19</span>
          </div>
          <Button variant="outline" size="sm" className="border-slate-700/50 text-slate-300 hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/50">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4 p-6">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="relative group cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" 
              style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} 
            />
            <div className={`relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-5 hover:border-${stat.glow}-500/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden`}>
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="flex items-center justify-between mb-3 relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 10px 40px -10px var(--tw-${stat.glow}-500)` }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 relative z-10">{stat.value}</div>
              <div className="text-sm text-slate-400 relative z-10">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6 px-6 pb-6">
        {/* Incidents Panel */}
        <div className="col-span-2 space-y-4">
          {/* Incidents Header */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-700/50 flex items-center justify-between bg-gradient-to-r from-blue-500/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-bold text-white">Active Incidents</h2>
              </div>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-500/50 border-0">
                <Plus className="w-4 h-4 mr-2" />
                New Complaint
              </Button>
            </div>

            {/* Search & Filters */}
            <div className="p-4 border-b border-slate-700/50 flex items-center gap-3 bg-slate-950/30">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search incidents..."
                  className="pl-9 bg-slate-950/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-32 bg-slate-950/50 border-slate-700/50 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Incidents Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-950/50 text-xs text-slate-400 uppercase">
                  <tr>
                    <th className="px-4 py-3 text-left">Incident No</th>
                    <th className="px-4 py-3 text-left">Type</th>
                    <th className="px-4 py-3 text-left">Priority</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Unit</th>
                    <th className="px-4 py-3 text-left">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {incidents.map((incident, index) => (
                    <tr
                      key={incident.id}
                      className="hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-transparent cursor-pointer transition-all duration-200 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <td className="px-4 py-3 text-sm text-blue-400 font-mono group-hover:text-blue-300">
                        {incident.id}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-300">{incident.type}</td>
                      <td className="px-4 py-3">
                        <Badge
                          variant="outline"
                          className={`${
                            incident.priority === "emergency"
                              ? "border-red-500/50 text-red-400 bg-red-500/10"
                              : "border-amber-500/50 text-amber-400 bg-amber-500/10"
                          } shadow-lg`}
                        >
                          {incident.priority}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          variant="outline"
                          className={`${
                            incident.status === "new"
                              ? "border-blue-500/50 text-blue-400 bg-blue-500/10"
                              : "border-purple-500/50 text-purple-400 bg-purple-500/10"
                          } shadow-lg`}
                        >
                          {incident.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-400">{incident.unit}</td>
                      <td className="px-4 py-3 text-sm text-slate-400">{incident.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Map */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden h-96 shadow-2xl">
            <div className="p-4 border-b border-slate-700/50 flex items-center justify-between bg-gradient-to-r from-emerald-500/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/50">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-bold text-white">Dispatch Map</h2>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800/50">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="h-[calc(100%-60px)] bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur flex items-center justify-center text-slate-500 relative overflow-hidden">
              {/* Animated grid background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              </div>
              <div className="text-center relative z-10">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50 animate-bounce" />
                <p className="font-semibold">Map Integration Area</p>
                <p className="text-sm">Integrate with your preferred mapping service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Units Panel */}
        <div className="space-y-4">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-purple-500/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <Radio className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-bold text-white">Active Units</h2>
              </div>
            </div>
            <div className="p-4 space-y-3">
              {units.map((unit, index) => (
                <div
                  key={unit.id}
                  className="group relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${unit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                  <div className="relative flex items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all cursor-pointer group-hover:scale-105">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${unit.gradient} shadow-lg ${unit.pulse ? 'animate-pulse' : ''}`} />
                      <span className="text-sm font-bold text-white">{unit.id}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className={`${
                        unit.status === "available"
                          ? "border-emerald-500/50 text-emerald-400 bg-emerald-500/10"
                          : unit.status === "on-route"
                          ? "border-purple-500/50 text-purple-400 bg-purple-500/10"
                          : "border-amber-500/50 text-amber-400 bg-amber-500/10"
                      } shadow-lg`}
                    >
                      {unit.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Activity */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-cyan-500/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-bold text-white">Live Activity</h2>
              </div>
            </div>
            <div className="p-4">
              <div className="text-sm text-slate-500 text-center py-8">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-slate-600 animate-pulse" />
                </div>
                <p>No activity yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
