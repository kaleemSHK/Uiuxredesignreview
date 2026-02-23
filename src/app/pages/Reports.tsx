import { Download, FileText, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function Reports() {
  return (
    <div className="h-full bg-slate-950">
      {/* Header */}
      <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900">
        <div>
          <h1 className="text-xl font-semibold text-white">Reports</h1>
          <p className="text-sm text-slate-400">Analytics & Tracking</p>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div className="text-sm text-slate-400 mb-1">Active Incidents</div>
            <div className="text-3xl font-semibold text-white mb-1">15</div>
            <div className="text-xs text-green-400">+2 from yesterday</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div className="text-sm text-slate-400 mb-1">Units Available</div>
            <div className="text-3xl font-semibold text-white mb-1">1 / 4</div>
            <div className="text-xs text-slate-400">3 units deployed</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div className="text-sm text-slate-400 mb-1">Avg Response Time (sec)</div>
            <div className="text-3xl font-semibold text-white mb-1">6313</div>
            <div className="text-xs text-amber-400">Above target</div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg">
          <div className="p-4 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-white">Analytics</h2>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-sm font-medium text-white mb-2">By Dispatcher</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="text-xs text-slate-400 uppercase">
                    <tr>
                      <th className="px-4 py-2 text-left">Dispatcher</th>
                      <th className="px-4 py-2 text-right">Count</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr>
                      <td className="px-4 py-3 text-sm text-slate-300">System Admin</td>
                      <td className="px-4 py-3 text-sm text-slate-300 text-right">16</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-white mb-3">Complaint Tracker</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Incident number"
                  className="pl-9 bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 max-w-md"
                />
              </div>
              <Button variant="outline" className="mt-3 border-slate-700 text-slate-300">
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Export Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-5 h-5 text-slate-400" />
            <h2 className="text-lg font-semibold text-white">Export Reports</h2>
          </div>
          <p className="text-sm text-slate-400 mb-4">
            Generate and download detailed reports for analysis and record-keeping.
          </p>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-slate-700 text-slate-300">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300">
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
