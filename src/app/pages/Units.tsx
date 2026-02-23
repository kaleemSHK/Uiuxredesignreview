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
    <div className="h-full bg-slate-950">
      {/* Header */}
      <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900">
        <div>
          <h1 className="text-xl font-semibold text-white">Units & Dispatch</h1>
          <p className="text-sm text-slate-400">Monitor and manage field units</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="border-slate-700 text-slate-300">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6 p-6">
        {/* Units List */}
        <div className="col-span-1 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-lg">
            <div className="p-4 border-b border-slate-800">
              <h2 className="text-lg font-semibold text-white mb-3">Active Units</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search units..."
                  className="pl-9 bg-slate-950 border-slate-800 text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            <div className="p-4 space-y-3">
              {unitsData.map((unit) => (
                <div
                  key={unit.id}
                  className="p-4 bg-slate-950 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Radio className="w-5 h-5 text-blue-400" />
                      <span className="font-semibold text-white">{unit.id}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className={`${
                        unit.status === "available"
                          ? "border-green-500 text-green-400"
                          : unit.status === "on-route"
                          ? "border-purple-500 text-purple-400"
                          : "border-amber-500 text-amber-400"
                      }`}
                    >
                      {unit.status}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
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
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-3">Dispatch Map</h3>
            <div className="space-y-2">
              {dispatchMap.map((item) => (
                <div key={item.unit} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-sm text-slate-300 flex-1">{item.unit}</span>
                  <span className="text-xs text-slate-500 uppercase">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="col-span-2">
          <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden h-full">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Unit Locations</h2>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-green-500 text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                  Available
                </Badge>
                <Badge variant="outline" className="border-purple-500 text-purple-400">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2" />
                  On Route
                </Badge>
                <Badge variant="outline" className="border-amber-500 text-amber-400">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-2" />
                  Busy
                </Badge>
                <Badge variant="outline" className="border-slate-500 text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-slate-500 mr-2" />
                  Idle
                </Badge>
              </div>
            </div>
            <div className="h-[calc(100%-73px)] bg-slate-800 flex items-center justify-center text-slate-500">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Map Integration Area</p>
                <p className="text-sm">Real-time unit tracking and positioning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
