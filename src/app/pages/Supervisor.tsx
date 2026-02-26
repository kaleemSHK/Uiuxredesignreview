import { 
  Activity, 
  AlertTriangle, 
  BarChart3,
  Clock,
  MapPin,
  Phone,
  Radio,
  TrendingUp,
  User,
  Users,
  Zap
} from "lucide-react";
import { Badge } from "../components/ui/badge";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const responseTimeData = [
  { time: "00:00", avg: 3.2 },
  { time: "04:00", avg: 2.8 },
  { time: "08:00", avg: 4.5 },
  { time: "12:00", avg: 5.2 },
  { time: "16:00", avg: 6.1 },
  { time: "20:00", avg: 4.3 },
];

const incidentsByHour = [
  { hour: "18h", count: 8 },
  { hour: "19h", count: 12 },
  { hour: "20h", count: 15 },
  { hour: "21h", count: 10 },
  { hour: "22h", count: 6 },
  { hour: "23h", count: 4 },
];

const incidentTypes = [
  { type: "Traffic", count: 45, color: "#3b82f6" },
  { type: "Assault", count: 28, color: "#ef4444" },
  { type: "Theft", count: 22, color: "#f59e0b" },
  { type: "Other", count: 18, color: "#8b5cf6" },
];

const dispatchers = [
  { id: "D-001", name: "Ahmad Khan", calls: 24, incidents: 18, avgResponse: "3.2 min", status: "active" },
  { id: "D-002", name: "Sarah Ali", calls: 31, incidents: 22, avgResponse: "2.8 min", status: "active" },
  { id: "D-003", name: "Hassan Shah", calls: 19, incidents: 15, avgResponse: "4.1 min", status: "active" },
  { id: "D-004", name: "Fatima Malik", calls: 27, incidents: 20, avgResponse: "3.5 min", status: "break" },
];

const activeIncidents = [
  { id: "INC-2026-001", type: "Assault", priority: "emergency", dispatcher: "D-002", elapsed: "2m 34s", status: "dispatched" },
  { id: "INC-2026-002", type: "Traffic", priority: "high", dispatcher: "D-001", elapsed: "5m 12s", status: "on-scene" },
  { id: "INC-2026-003", type: "Theft", priority: "normal", dispatcher: "D-003", elapsed: "8m 45s", status: "new" },
  { id: "INC-2026-004", type: "Medical", priority: "emergency", dispatcher: "D-002", elapsed: "1m 08s", status: "dispatched" },
];

export function Supervisor() {
  return (
    <div className="h-screen bg-slate-950 flex flex-col overflow-hidden">
      {/* HEADER */}
      <div className="h-14 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white">SUPERVISOR DASHBOARD</h1>
            <p className="text-xs text-slate-400">Real-time command center monitoring</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded border border-slate-700">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-slate-300">21:45:32</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded border border-slate-700">
            <User className="w-4 h-4 text-slate-400" />
            <span className="text-xs text-white font-medium">Supervisor Ahmad</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          {/* KEY METRICS */}
          <div className="grid grid-cols-6 gap-3">
            <div className="bg-slate-900 border border-blue-500/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-xs text-slate-400">Active Calls</div>
            </div>

            <div className="bg-slate-900 border border-red-500/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-xs text-slate-400">Active Incidents</div>
            </div>

            <div className="bg-slate-900 border border-green-500/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Radio className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">6</div>
              <div className="text-xs text-slate-400">Units Online</div>
            </div>

            <div className="bg-slate-900 border border-purple-500/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-xs text-slate-400">Dispatchers</div>
            </div>

            <div className="bg-slate-900 border border-amber-500/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-2xl font-bold text-white">3.4m</div>
              <div className="text-xs text-slate-400">Avg Response</div>
            </div>

            <div className="bg-slate-900 border border-cyan-500/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold text-white">113</div>
              <div className="text-xs text-slate-400">Today Total</div>
            </div>
          </div>

          {/* MIDDLE SECTION */}
          <div className="grid grid-cols-12 gap-4">
            {/* DISPATCHER PERFORMANCE */}
            <div className="col-span-7 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              <div className="p-3 bg-slate-950/50 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-bold text-white uppercase">Dispatcher Performance</span>
                </div>
                <Badge variant="outline" className="border-green-500/50 text-green-400 bg-green-500/10 text-xs">
                  4 Active
                </Badge>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-950/50 text-xs text-slate-400 uppercase">
                    <tr>
                      <th className="px-3 py-2 text-left">ID</th>
                      <th className="px-3 py-2 text-left">Dispatcher</th>
                      <th className="px-3 py-2 text-left">Calls</th>
                      <th className="px-3 py-2 text-left">Incidents</th>
                      <th className="px-3 py-2 text-left">Avg Response</th>
                      <th className="px-3 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {dispatchers.map((dispatcher) => (
                      <tr key={dispatcher.id} className="hover:bg-slate-800/50">
                        <td className="px-3 py-3 text-xs font-mono text-blue-400">{dispatcher.id}</td>
                        <td className="px-3 py-3 text-sm text-white font-medium">{dispatcher.name}</td>
                        <td className="px-3 py-3 text-sm text-slate-300">{dispatcher.calls}</td>
                        <td className="px-3 py-3 text-sm text-slate-300">{dispatcher.incidents}</td>
                        <td className="px-3 py-3 text-sm text-slate-300">{dispatcher.avgResponse}</td>
                        <td className="px-3 py-3">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              dispatcher.status === 'active' 
                                ? 'border-green-500/50 text-green-400 bg-green-500/10' 
                                : 'border-amber-500/50 text-amber-400 bg-amber-500/10'
                            }`}
                          >
                            {dispatcher.status === 'active' && (
                              <div className="w-2 h-2 rounded-full bg-green-500 mr-1.5 animate-pulse" />
                            )}
                            {dispatcher.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* LIVE CALLS */}
            <div className="col-span-5 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              <div className="p-3 bg-slate-950/50 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-bold text-white uppercase">Live Calls</span>
                </div>
                <Badge variant="outline" className="border-orange-500/50 text-orange-400 bg-orange-500/10 text-xs">
                  4 Active
                </Badge>
              </div>
              <div className="p-3 space-y-2">
                <div className="bg-slate-950 border border-orange-500/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">+92 301 1234567</span>
                    <span className="text-xs font-mono text-orange-400">2:34</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Dispatcher: Sarah Ali</span>
                    <Badge className="bg-orange-500/20 text-orange-400 text-xs">Active</Badge>
                  </div>
                </div>

                <div className="bg-slate-950 border border-orange-500/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">+92 300 9876543</span>
                    <span className="text-xs font-mono text-orange-400">1:08</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Dispatcher: Ahmad Khan</span>
                    <Badge className="bg-orange-500/20 text-orange-400 text-xs">Active</Badge>
                  </div>
                </div>

                <div className="bg-slate-950 border border-blue-500/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">+92 333 5551234</span>
                    <span className="text-xs font-mono text-blue-400">Ringing...</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Dispatcher: Hassan Shah</span>
                    <Badge className="bg-blue-500/20 text-blue-400 text-xs animate-pulse">Incoming</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CHARTS & INCIDENTS */}
          <div className="grid grid-cols-12 gap-4">
            {/* RESPONSE TIME TREND */}
            <div className="col-span-4 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              <div className="p-3 bg-slate-950/50 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-bold text-white uppercase">Response Time (24h)</span>
                </div>
              </div>
              <div className="p-3">
                <ResponsiveContainer width="100%" height={180}>
                  <LineChart data={responseTimeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="time" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '12px'
                      }}
                    />
                    <Line type="monotone" dataKey="avg" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981', r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* INCIDENTS BY HOUR */}
            <div className="col-span-4 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              <div className="p-3 bg-slate-950/50 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-bold text-white uppercase">Incidents (Last 6h)</span>
                </div>
              </div>
              <div className="p-3">
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={incidentsByHour}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="hour" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '12px'
                      }}
                    />
                    <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* INCIDENT TYPES */}
            <div className="col-span-4 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              <div className="p-3 bg-slate-950/50 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-bold text-white uppercase">Incident Types</span>
                </div>
              </div>
              <div className="p-3">
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
                    <Pie
                      data={incidentTypes}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ type, count }) => `${type}: ${count}`}
                      outerRadius={70}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {incidentTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '12px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* ACTIVE INCIDENTS & MAP */}
          <div className="grid grid-cols-12 gap-4">
            {/* ACTIVE INCIDENTS */}
            <div className="col-span-6 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              <div className="p-3 bg-slate-950/50 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-bold text-white uppercase">Active Incidents</span>
                </div>
                <Badge variant="outline" className="border-red-500/50 text-red-400 bg-red-500/10 text-xs">
                  {activeIncidents.length} Active
                </Badge>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-950/50 text-xs text-slate-400 uppercase">
                    <tr>
                      <th className="px-3 py-2 text-left">ID</th>
                      <th className="px-3 py-2 text-left">Type</th>
                      <th className="px-3 py-2 text-left">Priority</th>
                      <th className="px-3 py-2 text-left">Dispatcher</th>
                      <th className="px-3 py-2 text-left">Elapsed</th>
                      <th className="px-3 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {activeIncidents.map((incident) => (
                      <tr key={incident.id} className="hover:bg-slate-800/50">
                        <td className="px-3 py-3 text-xs font-mono text-blue-400">{incident.id}</td>
                        <td className="px-3 py-3 text-sm text-white">{incident.type}</td>
                        <td className="px-3 py-3">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              incident.priority === 'emergency' 
                                ? 'border-red-500/50 text-red-400 bg-red-500/10' 
                                : incident.priority === 'high'
                                ? 'border-amber-500/50 text-amber-400 bg-amber-500/10'
                                : 'border-blue-500/50 text-blue-400 bg-blue-500/10'
                            }`}
                          >
                            {incident.priority}
                          </Badge>
                        </td>
                        <td className="px-3 py-3 text-sm text-slate-300">{incident.dispatcher}</td>
                        <td className="px-3 py-3 text-sm text-slate-300 font-mono">{incident.elapsed}</td>
                        <td className="px-3 py-3">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              incident.status === 'new' 
                                ? 'border-blue-500/50 text-blue-400 bg-blue-500/10' 
                                : incident.status === 'dispatched'
                                ? 'border-yellow-500/50 text-yellow-400 bg-yellow-500/10'
                                : 'border-green-500/50 text-green-400 bg-green-500/10'
                            }`}
                          >
                            {incident.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* HEATMAP */}
            <div className="col-span-6 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              <div className="p-3 bg-slate-950/50 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-bold text-white uppercase">City Heatmap</span>
                </div>
              </div>
              <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-cyan-500/30 mx-auto mb-2 animate-pulse" />
                    <p className="text-slate-500 font-bold">INCIDENT HEATMAP</p>
                    <p className="text-xs text-slate-600 mt-1">Geographic distribution analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
