import { Eye, MapPin, Plus, RefreshCw, Search, Trash2, X, AlertTriangle, Clock, Shield, TrendingUp, Users, ArrowRight, PhoneCall, Radio, CheckCircle, AlertCircle, XCircle, Zap } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface DispatchUnit {
  id: string;
  callSign: string;
  status: 'pending' | 'accepted' | 'enroute' | 'on_scene' | 'completed';
  officers: string[];
  responseTime: number; // seconds since dispatch
  isBackup?: boolean;
  hasPanic?: boolean;
}

interface TimelineEvent {
  id: string;
  timestamp: Date;
  type: 'created' | 'dispatched' | 'accepted' | 'enroute' | 'arrived' | 'backup_requested' | 'escalated' | 'completed';
  description: string;
  user?: string;
}

const complaints = [
  {
    id: "240000000-HL3XVGD2-2294",
    type: "Traffic",
    priority: "emergency",
    status: "assigned",
    caller: "kaleem",
    phone: "03223223321",
    address: "Faisalabad Interchange Islamabad...",
    unit: "—",
    created: "2/22/2026, 3:53:37 PM",
  },
  {
    id: "240000000-HL6Z7MR2-203",
    type: "Assault",
    priority: "emergency",
    status: "new",
    caller: "dd",
    phone: "d0d0d0d0d",
    address: "street 205-C, jinnah garden, i...",
    unit: "—",
    created: "2/22/2026, 2:56:47 AM",
  },
  {
    id: "240000000-HL9Z2KCP-52",
    type: "Assault",
    priority: "high",
    status: "assigned",
    caller: "faizan ali",
    phone: "03223223323",
    address: "street 205-C, jinnah garden, i...",
    unit: "—",
    created: "2/21/2026, 9:51:12 PM",
  },
  {
    id: "240000000-HL6ZDSUL-1",
    type: "Suspicious",
    priority: "high",
    status: "assigned",
    caller: "Zubair Ahmed",
    phone: "0310010010",
    address: "house #04 street 205-C, jinnai...",
    unit: "—",
    created: "2/21/2026, 9:28:31 PM",
  },
  {
    id: "TCTP-2026-000",
    type: "Assault",
    priority: "emergency",
    status: "assigned",
    caller: "Bylander",
    phone: "0301-7778899",
    address: "Sector F-10, near NUST gate, r...",
    unit: "—",
    created: "2/21/2026, 9:14:05 PM",
  },
  {
    id: "TCTP-2026-002",
    type: "Robbery",
    priority: "emergency",
    status: "assigned",
    caller: "Shop guard",
    phone: "0321-8876543",
    address: "Blue Area, near Faysal Bank, s...",
    unit: "—",
    created: "2/21/2026, 9:14:05 PM",
  },
  {
    id: "TCTP-2025-011",
    type: "Fire",
    priority: "emergency",
    status: "on route",
    caller: "Watchman",
    phone: "—",
    address: "Industrial area, I-9, warehous...",
    unit: "—",
    created: "2/21/2026, 9:14:05 PM",
  },
  {
    id: "TCTP-2025-010",
    type: "Domestic",
    priority: "high",
    status: "new",
    caller: "Ayesha Khan",
    phone: "0300-1234567",
    address: "House 12, Street D, Sector F-7...",
    unit: "—",
    created: "2/21/2026, 9:14:05 PM",
  },
  {
    id: "TCTP-2025-004",
    type: "Burglary",
    priority: "high",
    status: "on route",
    caller: "Ali Hassan",
    phone: "0333-5555234",
    address: "Sector G-10/1, House 45, Housi...",
    unit: "—",
    created: "2/21/2026, 9:14:05 PM",
  },
];

export function Incidents() {
  const [selectedIncident, setSelectedIncident] = useState<string | null>(null);
  
  // Mock data for dispatch follow-up
  const [dispatchUnits] = useState<DispatchUnit[]>([
    {
      id: "1",
      callSign: "PATROL-201",
      status: "on_scene",
      officers: ["Sgt. Ahmed Khan", "Off. Hassan Ali"],
      responseTime: 420,
      isBackup: false
    },
    {
      id: "2",
      callSign: "PATROL-105",
      status: "enroute",
      officers: ["Off. Sara Ahmed"],
      responseTime: 180,
      isBackup: true
    },
    {
      id: "3",
      callSign: "PATROL-314",
      status: "accepted",
      officers: ["Off. Omar Youssef", "Off. Fatima Hassan"],
      responseTime: 45,
      isBackup: false
    },
    {
      id: "4",
      callSign: "PATROL-089",
      status: "pending",
      officers: ["Off. Khalid Ibrahim"],
      responseTime: 600,
      isBackup: false,
      hasPanic: false
    }
  ]);

  const [timeline] = useState<TimelineEvent[]>([
    {
      id: "1",
      timestamp: new Date(Date.now() - 600000),
      type: "created",
      description: "Incident created by Call Center operator",
      user: "Operator: Amira Hassan"
    },
    {
      id: "2",
      timestamp: new Date(Date.now() - 580000),
      type: "dispatched",
      description: "Unit PATROL-201 dispatched",
      user: "Dispatcher: Khalid Ahmed"
    },
    {
      id: "3",
      timestamp: new Date(Date.now() - 555000),
      type: "accepted",
      description: "PATROL-201 accepted assignment",
      user: "Sgt. Ahmed Khan"
    },
    {
      id: "4",
      timestamp: new Date(Date.now() - 480000),
      type: "enroute",
      description: "PATROL-201 enroute to scene",
      user: "Sgt. Ahmed Khan"
    },
    {
      id: "5",
      timestamp: new Date(Date.now() - 180000),
      type: "arrived",
      description: "PATROL-201 arrived on scene",
      user: "Sgt. Ahmed Khan"
    },
    {
      id: "6",
      timestamp: new Date(Date.now() - 120000),
      type: "backup_requested",
      description: "Backup requested - PATROL-105 dispatched",
      user: "Sgt. Ahmed Khan"
    },
    {
      id: "7",
      timestamp: new Date(Date.now() - 100000),
      type: "escalated",
      description: "Priority escalated to CRITICAL",
      user: "Supervisor: Youssef Mahmoud"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-slate-600 text-slate-200';
      case 'accepted': return 'bg-blue-600 text-white';
      case 'enroute': return 'bg-yellow-600 text-white';
      case 'on_scene': return 'bg-green-600 text-white';
      case 'completed': return 'bg-slate-500 text-slate-200';
      default: return 'bg-slate-600 text-slate-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return 'PENDING';
      case 'accepted': return 'ACCEPTED';
      case 'enroute': return 'ENROUTE';
      case 'on_scene': return 'ON SCENE';
      case 'completed': return 'COMPLETED';
      default: return status.toUpperCase();
    }
  };

  const formatResponseTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'created': return <PhoneCall className="w-4 h-4" />;
      case 'dispatched': return <Radio className="w-4 h-4" />;
      case 'accepted': return <CheckCircle className="w-4 h-4" />;
      case 'enroute': return <ArrowRight className="w-4 h-4" />;
      case 'arrived': return <MapPin className="w-4 h-4" />;
      case 'backup_requested': return <Users className="w-4 h-4" />;
      case 'escalated': return <TrendingUp className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getTimelineColor = (type: string) => {
    switch (type) {
      case 'created': return 'text-blue-400 bg-blue-600/20 border-blue-600/30';
      case 'dispatched': return 'text-purple-400 bg-purple-600/20 border-purple-600/30';
      case 'accepted': return 'text-green-400 bg-green-600/20 border-green-600/30';
      case 'enroute': return 'text-yellow-400 bg-yellow-600/20 border-yellow-600/30';
      case 'arrived': return 'text-green-400 bg-green-600/20 border-green-600/30';
      case 'backup_requested': return 'text-orange-400 bg-orange-600/20 border-orange-600/30';
      case 'escalated': return 'text-red-400 bg-red-600/20 border-red-600/30';
      case 'completed': return 'text-slate-400 bg-slate-600/20 border-slate-600/30';
      default: return 'text-slate-400 bg-slate-600/20 border-slate-600/30';
    }
  };

  const hasWarning = (unit: DispatchUnit) => {
    if (unit.status === 'pending' && unit.responseTime > 300) return 'NO RESPONSE';
    if (unit.status === 'accepted' && unit.responseTime > 180) return 'DELAYED ENROUTE';
    if (unit.hasPanic) return 'PANIC ALERT';
    return null;
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="h-16 border-b border-slate-700/50 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-xl">
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">Complaints & Incidents</h1>
          <p className="text-sm text-slate-400">Manage all complaints and dispatches</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="border-slate-700/50 text-slate-300 hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/50">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-orange-600 to-rose-500 hover:from-orange-500 hover:to-rose-400 shadow-lg shadow-orange-500/50 border-0">
            <Plus className="w-4 h-4 mr-2" />
            New Complaint
          </Button>
        </div>
      </header>

      <div className="p-6">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
          {/* Search & Filters */}
          <div className="p-4 border-b border-slate-700/50 flex items-center gap-3 bg-gradient-to-r from-orange-500/5 to-transparent">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search by incident #, caller, address..."
                className="pl-9 bg-slate-950/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-32 bg-slate-950/50 border-slate-700/50 text-white">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-status">
              <SelectTrigger className="w-32 bg-slate-950/50 border-slate-700/50 text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="assigned">Assigned</SelectItem>
                <SelectItem value="on-route">On Route</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-950/50 text-xs text-slate-400 uppercase">
                <tr>
                  <th className="px-4 py-3 text-left">Incident No</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Priority</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Caller</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Address</th>
                  <th className="px-4 py-3 text-left">Assigned Unit</th>
                  <th className="px-4 py-3 text-left">Created</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {complaints.map((complaint, index) => (
                  <tr
                    key={complaint.id}
                    className="hover:bg-gradient-to-r hover:from-orange-500/5 hover:to-transparent transition-all group"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <td className="px-4 py-3 text-sm text-blue-400 font-mono group-hover:text-blue-300">
                      {complaint.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-300">{complaint.type}</td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className={`${
                          complaint.priority === "emergency"
                            ? "border-red-500/50 text-red-400 bg-red-500/10 shadow-lg shadow-red-500/20"
                            : "border-amber-500/50 text-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/20"
                        }`}
                      >
                        {complaint.priority}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className={`${
                          complaint.status === "new"
                            ? "border-blue-500/50 text-blue-400 bg-blue-500/10 shadow-lg shadow-blue-500/20"
                            : complaint.status === "on route"
                            ? "border-purple-500/50 text-purple-400 bg-purple-500/10 shadow-lg shadow-purple-500/20"
                            : "border-amber-500/50 text-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/20"
                        }`}
                      >
                        {complaint.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-300">{complaint.caller}</td>
                    <td className="px-4 py-3 text-sm text-slate-400">{complaint.phone}</td>
                    <td className="px-4 py-3 text-sm text-slate-400 max-w-xs truncate">
                      {complaint.address}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-400">{complaint.unit}</td>
                    <td className="px-4 py-3 text-sm text-slate-400">{complaint.created}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10"
                          onClick={() => setSelectedIncident(complaint.id)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-green-400 hover:bg-green-500/10">
                          <MapPin className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-red-400 hover:bg-red-500/10">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-slate-700/50 flex items-center justify-between bg-slate-950/30">
            <p className="text-sm text-slate-400">Showing 1-9 of 9 complaints</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-slate-700/50 text-slate-400" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="border-slate-700/50 text-slate-400" disabled>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dispatch Follow-Up Panel */}
      {selectedIncident && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-end">
          <div className="w-full max-w-2xl h-full bg-slate-900 border-l border-slate-700 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            {/* Panel Header */}
            <div className="h-16 border-b border-slate-700 flex items-center justify-between px-6 bg-slate-800/50">
              <div>
                <h2 className="text-lg font-bold text-white">DISPATCH FOLLOW-UP</h2>
                <p className="text-xs text-slate-400 font-mono">{selectedIncident}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-slate-400 hover:text-white"
                onClick={() => setSelectedIncident(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {/* Warning Indicators */}
              <div className="p-4 space-y-2">
                {dispatchUnits.some(u => hasWarning(u)) && (
                  <>
                    {dispatchUnits.map(unit => {
                      const warning = hasWarning(unit);
                      if (!warning) return null;
                      
                      return (
                        <div 
                          key={unit.id}
                          className={`p-3 rounded-lg border-2 ${
                            warning === 'PANIC ALERT' 
                              ? 'bg-red-600/20 border-red-600 animate-pulse' 
                              : warning === 'NO RESPONSE'
                              ? 'bg-red-600/10 border-red-600/50'
                              : 'bg-orange-600/10 border-orange-600/50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <AlertTriangle className={`w-5 h-5 ${
                              warning === 'PANIC ALERT' ? 'text-red-400' : 'text-orange-400'
                            }`} />
                            <div className="flex-1">
                              <div className="text-sm font-bold text-white">{warning}</div>
                              <div className="text-xs text-slate-300">{unit.callSign} - {formatResponseTime(unit.responseTime)}</div>
                            </div>
                            {warning === 'PANIC ALERT' && (
                              <Zap className="w-5 h-5 text-red-400 animate-pulse" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>

              {/* Escalation Controls */}
              <div className="px-4 pb-4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <h3 className="text-sm font-bold text-white mb-3 uppercase">Escalation Controls</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-orange-600/10 border-orange-600/50 text-orange-400 hover:bg-orange-600/20 hover:text-orange-300"
                    >
                      <Users className="w-4 h-4 mr-1" />
                      Backup
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-purple-600/10 border-purple-600/50 text-purple-400 hover:bg-purple-600/20 hover:text-purple-300"
                    >
                      <Shield className="w-4 h-4 mr-1" />
                      Override
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-red-600/10 border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300"
                    >
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Priority
                    </Button>
                  </div>
                </div>
              </div>

              {/* Assigned Units */}
              <div className="px-4 pb-4">
                <h3 className="text-sm font-bold text-white mb-3 uppercase">Assigned Units ({dispatchUnits.length})</h3>
                <div className="space-y-3">
                  {dispatchUnits.map((unit) => (
                    <div 
                      key={unit.id}
                      className="bg-slate-800/50 border border-slate-700 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                            <Radio className="w-5 h-5 text-slate-400" />
                          </div>
                          <div>
                            <div className="font-mono font-bold text-white text-lg">{unit.callSign}</div>
                            <div className="text-xs text-slate-400">{unit.officers.join(", ")}</div>
                          </div>
                        </div>
                        {unit.isBackup && (
                          <Badge variant="outline" className="border-orange-600/50 text-orange-400 bg-orange-600/10">
                            BACKUP
                          </Badge>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <div className="text-xs text-slate-500 mb-1 uppercase">Status</div>
                          <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${getStatusColor(unit.status)}`}>
                            {getStatusLabel(unit.status)}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 mb-1 uppercase">Response Time</div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-mono text-white">{formatResponseTime(unit.responseTime)}</span>
                          </div>
                        </div>
                      </div>

                      {hasWarning(unit) && (
                        <div className="mt-3 pt-3 border-t border-slate-700">
                          <div className="flex items-center gap-2 text-orange-400">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-xs font-bold">{hasWarning(unit)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Section */}
              <div className="px-4 pb-6">
                <h3 className="text-sm font-bold text-white mb-3 uppercase">Timeline ({timeline.length} Events)</h3>
                <div className="space-y-2">
                  {timeline.map((event, index) => (
                    <div key={event.id} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${getTimelineColor(event.type)}`}>
                          {getTimelineIcon(event.type)}
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="w-px h-full bg-slate-700 my-1"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="text-sm font-medium text-white mb-1">{event.description}</div>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span>{event.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                          {event.user && (
                            <>
                              <span>•</span>
                              <span>{event.user}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Panel Footer */}
            <div className="h-16 border-t border-slate-700 flex items-center justify-between px-6 bg-slate-800/50">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-xs text-slate-400">Emergency</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-xs text-slate-400">Enroute</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-slate-400">On Scene</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-xs text-slate-400">Escalation</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-300"
                onClick={() => setSelectedIncident(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}