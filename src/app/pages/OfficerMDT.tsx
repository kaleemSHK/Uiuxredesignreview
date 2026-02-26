import { 
  AlertTriangle, 
  CheckCircle2, 
  MapPin, 
  Navigation, 
  Phone, 
  Radio,
  Shield,
  User,
  Zap,
  Clock,
  FileText,
  Camera
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { useState } from "react";

const currentAssignment = {
  id: "TCTP-2026-000",
  type: "Assault",
  priority: "emergency",
  location: "Sector F-10, near NUST gate",
  caller: "Bylander",
  phone: "0301-7778899",
  distance: "2.3 km",
  eta: "5 min",
  details: "Physical altercation reported outside university gate. Multiple individuals involved.",
};

export function OfficerMDT() {
  const [status, setStatus] = useState<"available" | "en-route" | "on-scene" | "busy">("en-route");
  const [panicMode, setPanicMode] = useState(false);

  const handlePanic = () => {
    setPanicMode(!panicMode);
    // In production: Send WebSocket panic signal
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header with Unit Info */}
      <header className="h-16 border-b border-slate-700/50 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-xl relative overflow-hidden">
        {panicMode && (
          <div className="absolute inset-0 bg-red-500/20 animate-pulse pointer-events-none" />
        )}
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Unit Alpha-1</h1>
            <p className="text-sm text-slate-400">Officer: John Smith #12345</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 relative z-10">
          {/* Status Selector */}
          <div className="flex items-center gap-2 bg-slate-950/50 rounded-lg border border-slate-700/50 p-1">
            <button
              onClick={() => setStatus("available")}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                status === "available" 
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setStatus("en-route")}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                status === "en-route" 
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              En Route
            </button>
            <button
              onClick={() => setStatus("on-scene")}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                status === "on-scene" 
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              On Scene
            </button>
            <button
              onClick={() => setStatus("busy")}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                status === "busy" 
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Busy
            </button>
          </div>

          {/* Panic Button */}
          <Button
            onClick={handlePanic}
            className={`${
              panicMode 
                ? "bg-gradient-to-r from-red-600 to-rose-600 animate-pulse shadow-2xl shadow-red-500/50" 
                : "bg-slate-950/50 border border-slate-700/50 text-slate-300 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/50"
            }`}
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            {panicMode ? "PANIC ACTIVE" : "Panic"}
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6 p-6 h-[calc(100%-4rem)]">
        {/* Current Assignment */}
        <div className="col-span-2 space-y-6 overflow-auto">
          {/* Active Incident */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-red-500/10 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-500 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/50 animate-pulse">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Active Assignment</h2>
                  <p className="text-xs text-slate-400">Incident #{currentAssignment.id}</p>
                </div>
              </div>
              <Badge variant="outline" className="border-red-500/50 text-red-400 bg-red-500/10 shadow-lg">
                {currentAssignment.priority}
              </Badge>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-500 uppercase mb-1">Incident Type</p>
                    <p className="text-white font-semibold">{currentAssignment.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase mb-1">Location</p>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <p className="text-white">{currentAssignment.location}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase mb-1">Caller</p>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-slate-400" />
                      <p className="text-white">{currentAssignment.caller}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-500 uppercase">Distance</span>
                      <Navigation className="w-4 h-4 text-purple-400" />
                    </div>
                    <p className="text-2xl font-bold text-white">{currentAssignment.distance}</p>
                  </div>
                  <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-500 uppercase">ETA</span>
                      <Clock className="w-4 h-4 text-green-400" />
                    </div>
                    <p className="text-2xl font-bold text-white">{currentAssignment.eta}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-500 uppercase mb-2">Details</p>
                <p className="text-white text-sm">{currentAssignment.details}</p>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-500/50">
                  <Navigation className="w-4 h-4 mr-2" />
                  Navigate
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 shadow-lg shadow-green-500/50">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Caller
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 shadow-lg shadow-purple-500/50">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Complete
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl flex-1">
            <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-blue-500/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-bold text-white">Navigation</h2>
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              </div>
              <div className="text-center relative z-10">
                <Navigation className="w-12 h-12 mx-auto mb-2 text-blue-400 animate-pulse" />
                <p className="font-semibold text-white">Mapbox GL JS Integration</p>
                <p className="text-sm text-slate-400">Real-time GPS tracking & routing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Info */}
        <div className="space-y-4 overflow-auto">
          {/* Quick Actions */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-cyan-500/10 to-transparent">
              <h2 className="text-lg font-bold text-white">Quick Actions</h2>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3">
              <Button variant="outline" className="flex-col h-20 border-slate-700/50 hover:border-blue-500/50 hover:bg-blue-500/10">
                <Radio className="w-5 h-5 mb-1 text-blue-400" />
                <span className="text-xs">Radio</span>
              </Button>
              <Button variant="outline" className="flex-col h-20 border-slate-700/50 hover:border-green-500/50 hover:bg-green-500/10">
                <Camera className="w-5 h-5 mb-1 text-green-400" />
                <span className="text-xs">Photo</span>
              </Button>
              <Button variant="outline" className="flex-col h-20 border-slate-700/50 hover:border-purple-500/50 hover:bg-purple-500/10">
                <FileText className="w-5 h-5 mb-1 text-purple-400" />
                <span className="text-xs">Report</span>
              </Button>
              <Button variant="outline" className="flex-col h-20 border-slate-700/50 hover:border-amber-500/50 hover:bg-amber-500/10">
                <Zap className="w-5 h-5 mb-1 text-amber-400" />
                <span className="text-xs">Backup</span>
              </Button>
            </div>
          </div>

          {/* GPS Status */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-green-500/10 to-transparent">
              <h2 className="text-lg font-bold text-white">GPS Tracking</h2>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Status</span>
                <Badge variant="outline" className="border-green-500/50 text-green-400 bg-green-500/10">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                  Active
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Accuracy</span>
                <span className="text-white font-semibold">±5m</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Last Update</span>
                <span className="text-white font-semibold">2s ago</span>
              </div>
              <div className="pt-3 border-t border-slate-700/50 text-xs text-slate-500">
                Position updates every 3 seconds via WebSocket
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-purple-500/10 to-transparent">
              <h2 className="text-lg font-bold text-white">Activity Log</h2>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                <div className="flex-1">
                  <p className="text-sm text-white">Assigned to incident</p>
                  <p className="text-xs text-slate-500">2 min ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                <div className="flex-1">
                  <p className="text-sm text-white">Status: En Route</p>
                  <p className="text-xs text-slate-500">3 min ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                <div className="flex-1">
                  <p className="text-sm text-white">Completed patrol</p>
                  <p className="text-xs text-slate-500">15 min ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
