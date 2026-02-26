import { MapPin, Radio, RefreshCw, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";

const unitsData = [
  { id: "Alpha-1", status: "on-route", assignment: "—", location: "Sector G-9" },
  { id: "Alpha-2", status: "on-route", assignment: "—", location: "Blue Area" },
  { id: "Bravo-1", status: "available", assignment: "—", location: "F-7 Station" },
  { id: "Charlie-1", status: "busy", assignment: "TCTP-2026-000", location: "F-10 NUST" },
  { id: "VAN-1", status: "available", assignment: "—", location: "I-9 Station" },
];

const dispatchMap = [
  { unit: "Alpha-1", status: "on-route", color: "bg-purple-500" },
  { unit: "Alpha-2", status: "on-route", color: "bg-purple-500" },
  { unit: "Bravo-1", status: "idle", color: "bg-slate-500" },
  { unit: "Charlie-1", status: "busy", color: "bg-amber-500" },
  { unit: "VAN-1", status: "available", color: "bg-green-500" },
];

export function Units() {
  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="h-16 border-b border-slate-700/50 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-xl">
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Units & Dispatch</h1>
          <p className="text-sm text-slate-400">Monitor and manage field units</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="border-slate-700/50 text-slate-300 hover:bg-purple-500/10 hover:text-purple-400 hover:border-purple-500/50">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6 p-6">
        {/* Units List */}
        <div className="col-span-1 space-y-4">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl">
            <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-purple-500/10 to-transparent">
              <h2 className="text-lg font-bold text-white mb-3">Active Units</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search units..."
                  className="pl-9 bg-slate-950/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                />
              </div>
            </div>

            <div className="p-4 space-y-3">
              {unitsData.map((unit, index) => (
                <div
                  key={unit.id}
                  className="p-4 bg-slate-950/50 border border-slate-700/50 rounded-xl hover:border-slate-600/50 transition-all cursor-pointer group relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500" />
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <Radio className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-white">{unit.id}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className={`${
                        unit.status === "available"
                          ? "border-green-500/50 text-green-400 bg-green-500/10 shadow-lg shadow-green-500/20"
                          : unit.status === "on-route"
                          ? "border-purple-500/50 text-purple-400 bg-purple-500/10 shadow-lg shadow-purple-500/20"
                          : "border-amber-500/50 text-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/20"
                      }`}
                    >
                      {unit.status}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm relative z-10">
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-4 h-4" />
                      <span>{unit.location}</span>
                    </div>
                    {unit.assignment !== "—" && (
                      <div className="text-slate-400">
                        Assignment: <span className="text-blue-400">{unit.assignment}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dispatch Map Legend */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 shadow-2xl">
            <h3 className="text-sm font-bold text-white mb-3">GPS Tracking Status</h3>
            <div className="space-y-2">
              {dispatchMap.map((item) => (
                <div key={item.unit} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color} ${item.status === 'busy' || item.status === 'on-route' ? 'animate-pulse' : ''} shadow-lg`} />
                  <span className="text-sm text-slate-300 flex-1">{item.unit}</span>
                  <span className="text-xs text-slate-500 uppercase">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="col-span-2">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden h-full shadow-2xl">
            <div className="p-4 border-b border-slate-700/50 flex items-center justify-between bg-gradient-to-r from-blue-500/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-bold text-white">Unit Locations (AVL)</h2>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-green-500/50 text-green-400 bg-green-500/10 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                  Available
                </Badge>
                <Badge variant="outline" className="border-purple-500/50 text-purple-400 bg-purple-500/10 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2 animate-pulse" />
                  On Route
                </Badge>
                <Badge variant="outline" className="border-amber-500/50 text-amber-400 bg-amber-500/10 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-2" />
                  Busy
                </Badge>
                <Badge variant="outline" className="border-slate-500/50 text-slate-400 bg-slate-500/10 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-slate-500 mr-2" />
                  Idle
                </Badge>
              </div>
            </div>
            <div className="h-[calc(100%-73px)] bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur flex items-center justify-center text-slate-500 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              </div>
              <div className="text-center relative z-10">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50 animate-bounce" />
                <p className="font-semibold">Mapbox GL JS Integration</p>
                <p className="text-sm">Real-time GPS tracking (AVL) - Updates every 2-5 seconds</p>
                <p className="text-xs mt-2 text-slate-600">WebSocket connection for live position updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}