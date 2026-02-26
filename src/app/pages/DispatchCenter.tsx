import { 
  AlertTriangle, 
  Phone, 
  MapPin, 
  Radio, 
  Clock,
  User,
  Navigation,
  PhoneCall,
  PhoneOff,
  Zap,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Activity
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useState, useEffect } from "react";

const nearestUnits = [
  { id: "Alpha-1", distance: "0.8 km", eta: "2 min", status: "available" },
  { id: "Bravo-1", distance: "1.2 km", eta: "3 min", status: "available" },
  { id: "Charlie-1", distance: "2.1 km", eta: "5 min", status: "available" },
];

const activeIncidents = [
  { id: "INC-2026-001", type: "Assault", priority: "emergency", location: "F-10, NUST Gate", status: "dispatched", unit: "Charlie-1", time: "2m" },
  { id: "INC-2026-002", type: "Traffic", priority: "high", location: "Blue Area, Jinnah Ave", status: "on-scene", unit: "Alpha-2", time: "8m" },
  { id: "INC-2026-003", type: "Theft", priority: "normal", location: "G-9 Market", status: "new", unit: "—", time: "12m" },
];

const allUnits = [
  { id: "Alpha-1", status: "available", location: "F-7 Sector", assignment: "—" },
  { id: "Alpha-2", status: "on-scene", location: "Blue Area", assignment: "INC-2026-002" },
  { id: "Bravo-1", status: "available", location: "G-9 Station", assignment: "—" },
  { id: "Charlie-1", status: "enroute", location: "F-10 (moving)", assignment: "INC-2026-001" },
  { id: "Delta-1", status: "busy", location: "I-8 Sector", assignment: "INC-2026-004" },
  { id: "VAN-1", status: "available", location: "F-6 Station", assignment: "—" },
];

export function DispatchCenter() {
  const [incomingCall, setIncomingCall] = useState(false);
  const [activeCall, setActiveCall] = useState(false);
  const [callTimer, setCallTimer] = useState(0);
  const [panicAlert, setPanicAlert] = useState(false);
  const [incidentCreated, setIncidentCreated] = useState(false);

  // Call timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeCall) {
      interval = setInterval(() => {
        setCallTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeCall]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerCall = () => {
    setIncomingCall(false);
    setActiveCall(true);
    setCallTimer(0);
  };

  const handleRejectCall = () => {
    setIncomingCall(false);
  };

  const handleCreateIncident = () => {
    setIncidentCreated(true);
  };

  const handleEndCall = () => {
    setActiveCall(false);
    setIncidentCreated(false);
    setCallTimer(0);
  };

  const handleTestIncomingCall = () => {
    setIncomingCall(true);
  };

  return (
    <div className="h-screen bg-slate-950 flex flex-col overflow-hidden">
      {/* TOP STATUS BAR */}
      <div className="h-14 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded flex items-center justify-center">
              <Radio className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-sm">DISPATCH COMMAND</span>
          </div>

          {/* Active Calls */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded ${activeCall ? 'bg-orange-500/20 border border-orange-500/50' : 'bg-slate-800 border border-slate-700'}`}>
            <Phone className={`w-4 h-4 ${activeCall ? 'text-orange-400' : 'text-slate-400'}`} />
            <span className={`text-xs font-bold ${activeCall ? 'text-orange-400' : 'text-slate-400'}`}>
              ACTIVE CALLS: {activeCall ? '1' : '0'}
            </span>
          </div>

          {/* Active Incidents */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-blue-500/20 border border-blue-500/50">
            <AlertTriangle className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold text-blue-400">INCIDENTS: 3</span>
          </div>

          {/* Panic Alerts */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded ${panicAlert ? 'bg-red-500/30 border border-red-500 animate-pulse' : 'bg-slate-800 border border-slate-700'}`}>
            <Zap className={`w-4 h-4 ${panicAlert ? 'text-red-400' : 'text-slate-500'}`} />
            <span className={`text-xs font-bold ${panicAlert ? 'text-red-400' : 'text-slate-500'}`}>
              PANIC: {panicAlert ? '1' : '0'}
            </span>
          </div>

          {/* Connected Units */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-green-500/20 border border-green-500/50">
            <Radio className="w-4 h-4 text-green-400" />
            <span className="text-xs font-bold text-green-400">UNITS ONLINE: 6</span>
          </div>
        </div>

        {/* Dispatcher Info */}
        <div className="flex items-center gap-3">
          <Button 
            onClick={handleTestIncomingCall}
            variant="outline"
            size="sm"
            className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 text-xs"
          >
            Test Call
          </Button>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded border border-slate-700">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-slate-300">21:45:32</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded border border-slate-700">
            <User className="w-4 h-4 text-slate-400" />
            <span className="text-xs text-white font-medium">Dispatcher #12345</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 grid grid-cols-12 gap-3 p-3 overflow-hidden">
        {/* LEFT PANEL - CALL HANDLING */}
        <div className="col-span-3 flex flex-col gap-3 overflow-hidden">
          {/* Active Call Panel */}
          {activeCall ? (
            <div className="bg-slate-900 border-2 border-orange-500 rounded-lg flex-1 flex flex-col">
              <div className="p-3 bg-orange-500/20 border-b border-orange-500/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 text-orange-400 animate-pulse" />
                  <span className="text-sm font-bold text-orange-400">ACTIVE CALL</span>
                </div>
                <div className="text-lg font-mono font-bold text-orange-400">{formatTime(callTimer)}</div>
              </div>

              <div className="p-4 space-y-3 flex-1 overflow-auto">
                {/* Caller Info */}
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 uppercase font-semibold">Caller Number</label>
                  <Input 
                    defaultValue="+92 301 7778899" 
                    className="bg-slate-950 border-slate-700 text-white h-10 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-slate-400 uppercase font-semibold">Caller Name</label>
                  <Input 
                    defaultValue="Bylander" 
                    className="bg-slate-950 border-slate-700 text-white h-10 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-slate-400 uppercase font-semibold">Location</label>
                  <Input 
                    defaultValue="F-10, near NUST main gate" 
                    className="bg-slate-950 border-slate-700 text-white h-10 text-base"
                  />
                </div>

                {!incidentCreated && (
                  <>
                    <div className="space-y-2">
                      <label className="text-xs text-slate-400 uppercase font-semibold">Incident Type</label>
                      <Select defaultValue="assault">
                        <SelectTrigger className="bg-slate-950 border-slate-700 text-white h-10 text-base">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="assault">Assault</SelectItem>
                          <SelectItem value="theft">Theft</SelectItem>
                          <SelectItem value="traffic">Traffic Accident</SelectItem>
                          <SelectItem value="suspicious">Suspicious Activity</SelectItem>
                          <SelectItem value="fire">Fire</SelectItem>
                          <SelectItem value="medical">Medical Emergency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-slate-400 uppercase font-semibold">Priority</label>
                      <div className="grid grid-cols-3 gap-2">
                        <button className="h-10 bg-red-500/20 border-2 border-red-500 rounded text-red-400 font-bold text-xs hover:bg-red-500/30">
                          EMERGENCY
                        </button>
                        <button className="h-10 bg-slate-800 border border-slate-700 rounded text-slate-400 font-bold text-xs hover:bg-amber-500/20 hover:border-amber-500 hover:text-amber-400">
                          HIGH
                        </button>
                        <button className="h-10 bg-slate-800 border border-slate-700 rounded text-slate-400 font-bold text-xs hover:bg-blue-500/20 hover:border-blue-500 hover:text-blue-400">
                          NORMAL
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-slate-400 uppercase font-semibold">Notes</label>
                      <Textarea 
                        placeholder="Incident details..."
                        className="bg-slate-950 border-slate-700 text-white resize-none"
                        rows={3}
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="p-3 border-t border-slate-800 space-y-2">
                {!incidentCreated ? (
                  <Button 
                    onClick={handleCreateIncident}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-base"
                  >
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    CREATE INCIDENT
                  </Button>
                ) : (
                  <div className="p-3 bg-green-500/20 border border-green-500/50 rounded text-center">
                    <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto mb-1" />
                    <p className="text-xs text-green-400 font-bold">INCIDENT CREATED</p>
                    <p className="text-xs text-slate-400 mt-1">INC-2026-004</p>
                  </div>
                )}
                <Button 
                  onClick={handleEndCall}
                  variant="outline" 
                  className="w-full h-10 border-red-500/50 text-red-400 hover:bg-red-500/10 font-bold"
                >
                  <PhoneOff className="w-4 h-4 mr-2" />
                  END CALL
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 flex-1 flex items-center justify-center">
              <div className="text-center">
                <Phone className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-500 font-medium">No active call</p>
                <p className="text-xs text-slate-600 mt-1">Waiting for incoming 112 calls...</p>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-2">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="h-16 flex-col border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/10">
                <MessageSquare className="w-5 h-5 text-blue-400 mb-1" />
                <span className="text-xs text-slate-300">Call Log</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col border-slate-700 hover:border-purple-500/50 hover:bg-purple-500/10">
                <User className="w-5 h-5 text-purple-400 mb-1" />
                <span className="text-xs text-slate-300">Lookup</span>
              </Button>
            </div>
          </div>
        </div>

        {/* CENTER PANEL - INCIDENT + DISPATCH */}
        <div className="col-span-5 flex flex-col gap-3 overflow-hidden">
          {incidentCreated ? (
            <div className="bg-slate-900 border-2 border-red-500 rounded-lg flex-1 flex flex-col">
              <div className="p-3 bg-red-500/20 border-b border-red-500/50 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-red-400">EMERGENCY INCIDENT</span>
                  <p className="text-xs text-slate-400 mt-0.5">INC-2026-004 • Created 5s ago</p>
                </div>
                <Badge className="bg-red-500 text-white text-xs font-bold">EMERGENCY</Badge>
              </div>

              <div className="p-4 border-b border-slate-800">
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-slate-500 uppercase mb-1">Type</p>
                    <p className="text-white font-semibold">Assault</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase mb-1">Location</p>
                    <p className="text-white font-semibold">F-10, near NUST gate</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase mb-1">Caller</p>
                  <p className="text-white">Bylander • +92 301 7778899</p>
                </div>
              </div>

              {/* NEAREST UNITS - ONE CLICK DISPATCH */}
              <div className="p-4 flex-1 overflow-auto">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-white uppercase">Nearest Available Units</h3>
                  <span className="text-xs text-slate-500">Auto-sorted by distance</span>
                </div>
                <div className="space-y-2">
                  {nearestUnits.map((unit) => (
                    <div key={unit.id} className="bg-slate-950 border border-green-500/50 rounded-lg p-3 flex items-center justify-between hover:bg-slate-800 transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded flex items-center justify-center border border-green-500/50">
                          <Radio className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-base">{unit.id}</p>
                          <div className="flex items-center gap-3 mt-0.5">
                            <span className="text-xs text-slate-400">
                              <Navigation className="w-3 h-3 inline mr-1" />
                              {unit.distance}
                            </span>
                            <span className="text-xs text-slate-400">
                              <Clock className="w-3 h-3 inline mr-1" />
                              ETA {unit.eta}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button className="h-11 px-6 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold shadow-lg shadow-green-500/50 group-hover:scale-105 transition-transform">
                        DISPATCH
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded">
                  <p className="text-xs text-blue-400">
                    <Zap className="w-3 h-3 inline mr-1" />
                    Keyboard shortcut: Press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono text-white">1</kbd>, <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono text-white">2</kbd>, or <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono text-white">3</kbd> to dispatch
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 border border-slate-700 rounded-lg flex-1 flex items-center justify-center">
              <div className="text-center">
                <AlertTriangle className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-500 font-medium">No incident selected</p>
                <p className="text-xs text-slate-600 mt-1">Create an incident from active call</p>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT PANEL - LIVE MAP */}
        <div className="col-span-4 bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
          <div className="p-3 bg-slate-950/50 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-bold text-white uppercase">Live Map</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-green-400">Real-time</span>
            </div>
          </div>
          <div className="h-[calc(100%-49px)] bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-500/30 mx-auto mb-3 animate-pulse" />
                <p className="text-slate-500 font-bold text-lg">MAPBOX GL JS</p>
                <p className="text-xs text-slate-600 mt-1">Real-time unit tracking</p>
                <p className="text-xs text-slate-600">Auto-zoom to incidents</p>
              </div>
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-lg p-3 text-xs">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-slate-300">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
                  <span className="text-slate-300">En Route</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-slate-300">On Scene</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-slate-300">Emergency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM PANEL */}
      <div className="h-48 border-t border-slate-800 bg-slate-900 grid grid-cols-12 gap-3 p-3 flex-shrink-0">
        {/* Active Incidents Queue */}
        <div className="col-span-6 bg-slate-950 border border-slate-700 rounded-lg overflow-hidden">
          <div className="p-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase">Active Incidents</span>
            <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 text-xs">
              {activeIncidents.length} Active
            </Badge>
          </div>
          <div className="p-2 space-y-1 overflow-auto h-[calc(100%-37px)]">
            {activeIncidents.map((incident) => (
              <div key={incident.id} className="flex items-center gap-2 p-2 bg-slate-900 hover:bg-slate-800 rounded cursor-pointer border border-slate-800 hover:border-slate-700 transition-all">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  incident.priority === 'emergency' ? 'bg-red-500 animate-pulse' :
                  incident.priority === 'high' ? 'bg-amber-500' : 'bg-blue-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-blue-400">{incident.id}</span>
                    <Badge className={`text-xs px-1.5 py-0 ${
                      incident.status === 'new' ? 'bg-blue-500/20 text-blue-400 border-blue-500/50' :
                      incident.status === 'dispatched' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' :
                      'bg-green-500/20 text-green-400 border-green-500/50'
                    }`}>
                      {incident.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-400 truncate">{incident.type} • {incident.location}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-slate-500">{incident.unit}</p>
                  <p className="text-xs text-slate-600">{incident.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Units List */}
        <div className="col-span-4 bg-slate-950 border border-slate-700 rounded-lg overflow-hidden">
          <div className="p-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase">All Units</span>
            <Badge variant="outline" className="border-green-500/50 text-green-400 bg-green-500/10 text-xs">
              3/6 Available
            </Badge>
          </div>
          <div className="p-2 grid grid-cols-2 gap-1 overflow-auto h-[calc(100%-37px)]">
            {allUnits.map((unit) => (
              <div key={unit.id} className="p-2 bg-slate-900 rounded border border-slate-800 hover:border-slate-700 transition-all cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    unit.status === 'available' ? 'bg-green-500' :
                    unit.status === 'enroute' ? 'bg-yellow-500 animate-pulse' :
                    unit.status === 'on-scene' ? 'bg-blue-500' :
                    'bg-amber-500'
                  }`} />
                  <span className="text-xs font-bold text-white">{unit.id}</span>
                </div>
                <p className="text-xs text-slate-500 truncate">{unit.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Log */}
        <div className="col-span-2 bg-slate-950 border border-slate-700 rounded-lg overflow-hidden">
          <div className="p-2 bg-slate-900 border-b border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase">Activity</span>
          </div>
          <div className="p-2 space-y-1 overflow-auto h-[calc(100%-37px)]">
            <div className="flex items-start gap-2">
              <Activity className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-300">Unit dispatched</p>
                <p className="text-xs text-slate-600">2m ago</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Activity className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-300">Incident created</p>
                <p className="text-xs text-slate-600">8m ago</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Activity className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-300">Call received</p>
                <p className="text-xs text-slate-600">12m ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INCOMING CALL POPUP */}
      {incomingCall && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in">
          <div className="bg-slate-900 border-4 border-orange-500 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-orange-500/50 animate-in zoom-in">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Phone className="w-10 h-10 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">INCOMING 112 CALL</h2>
              <p className="text-3xl font-bold text-white mb-2">+92 301 7778899</p>
              <p className="text-slate-400">Location: F-10 Sector (GPS)</p>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={handleRejectCall}
                className="flex-1 h-14 bg-red-600 hover:bg-red-500 text-white font-bold text-lg"
              >
                <XCircle className="w-6 h-6 mr-2" />
                REJECT
              </Button>
              <Button 
                onClick={handleAnswerCall}
                className="flex-1 h-14 bg-green-600 hover:bg-green-500 text-white font-bold text-lg"
              >
                <CheckCircle2 className="w-6 h-6 mr-2" />
                ANSWER
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
