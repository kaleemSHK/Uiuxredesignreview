import { Activity, AlertTriangle, Clock, MapPin, RefreshCw, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const incidentsByType = [
  { type: "Traffic", count: 3 },
  { type: "Assault", count: 5 },
  { type: "Robbery", count: 2 },
  { type: "Fire", count: 1 },
  { type: "Domestic", count: 2 },
  { type: "Burglary", count: 1 },
  { type: "Suspicious", count: 1 },
];

const incidentsByDistrict = [
  { district: "F-7", count: 2 },
  { district: "F-10", count: 3 },
  { district: "G-9", count: 2 },
  { district: "G-10", count: 1 },
  { district: "Blue Area", count: 3 },
  { district: "I-9", count: 4 },
];

const responseTimeTrend = [
  { time: "00:00", avg: 320 },
  { time: "04:00", avg: 280 },
  { time: "08:00", avg: 450 },
  { time: "12:00", avg: 520 },
  { time: "16:00", avg: 480 },
  { time: "20:00", avg: 390 },
];

const priorityDistribution = [
  { name: "Emergency", value: 8, color: "#ef4444" },
  { name: "High", value: 5, color: "#f59e0b" },
  { name: "Medium", value: 2, color: "#3b82f6" },
];

export function Analytics() {
  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-auto">
      {/* Header */}
      <header className="h-16 border-b border-slate-700/50 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-10">
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Command Analytics</h1>
          <p className="text-sm text-slate-400">Performance metrics and insights</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="7days">
            <SelectTrigger className="w-32 bg-slate-950/50 border-slate-700/50 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="7days">7 days</SelectItem>
              <SelectItem value="30days">30 days</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-districts">
            <SelectTrigger className="w-40 bg-slate-950/50 border-slate-700/50 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-districts">All districts</SelectItem>
              <SelectItem value="f7">F-7</SelectItem>
              <SelectItem value="f10">F-10</SelectItem>
              <SelectItem value="g9">G-9</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="border-slate-700/50 text-slate-300 hover:bg-purple-500/10 hover:text-purple-400 hover:border-purple-500/50">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 hover:border-blue-500/50 transition-all group-hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">14</div>
              <div className="text-sm text-slate-400">Active Incidents</div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 hover:border-green-500/50 transition-all group-hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/50">
                  <Clock className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">4:05</div>
              <div className="text-sm text-slate-400">Avg Response Time (min)</div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-all group-hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">1 / 4</div>
              <div className="text-sm text-slate-400">Units Available / Busy</div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 hover:border-red-500/50 transition-all group-hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-500 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/50">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">0</div>
              <div className="text-sm text-slate-400">Incidents Today</div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Incidents by Type */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 shadow-2xl hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Incidents by Type</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={incidentsByType}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="type" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="count" fill="url(#blueGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Incidents by District */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 shadow-2xl hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Incidents by District</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={incidentsByDistrict}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="district" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="count" fill="url(#purpleGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Response Time Trend */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 shadow-2xl hover:border-green-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/50">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Response Time Trend (min)</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={responseTimeTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="time" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line type="monotone" dataKey="avg" stroke="url(#greenGradient)" strokeWidth={3} dot={{ fill: '#10b981', r: 5, strokeWidth: 2, stroke: '#fff' }} />
                <defs>
                  <linearGradient id="greenGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Priority Distribution */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 shadow-2xl hover:border-amber-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/50">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Priority Distribution</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={priorityDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {priorityDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Map Heatmap */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl hover:border-cyan-500/30 transition-all">
          <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-cyan-500/10 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold text-white">GIS Heatmap & Units</h2>
            </div>
          </div>
          <div className="h-96 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur flex items-center justify-center text-slate-500 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>
            <div className="text-center relative z-10">
              <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50 animate-bounce" />
              <p className="font-semibold">Map Heatmap Visualization</p>
              <p className="text-sm">Geographic incident distribution analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}