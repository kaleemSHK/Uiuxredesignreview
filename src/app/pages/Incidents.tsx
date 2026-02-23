import { Eye, MapPin, Plus, RefreshCw, Search, Trash2 } from "lucide-react";
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
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10">
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
    </div>
  );
}