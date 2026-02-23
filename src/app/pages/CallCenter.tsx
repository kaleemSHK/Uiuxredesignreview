import { Phone, PhoneCall, PhoneIncoming, PhoneOff } from "lucide-react";
import { Button } from "../components/ui/button";

export function CallCenter() {
  return (
    <div className="h-full bg-slate-950">
      {/* Header */}
      <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900">
        <div>
          <h1 className="text-xl font-semibold text-white">Call Center</h1>
          <p className="text-sm text-slate-400">VoIP & Recording Management</p>
        </div>
      </header>

      <div className="flex items-center justify-center h-[calc(100%-4rem)]">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="w-20 h-20 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="w-10 h-10 text-slate-500" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Call Center Integration
          </h2>
          <p className="text-slate-400 mb-6">
            Integrate with Asterisk CallManager for live calls and recording playback.
            No calls yet. Calls appear when Asterisk integration is active.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Integration Features</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600/10 border border-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <PhoneIncoming className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-sm font-medium text-white mb-1">Incoming Calls</h4>
                <p className="text-xs text-slate-400">Real-time call alerts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600/10 border border-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <PhoneCall className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-sm font-medium text-white mb-1">Call Management</h4>
                <p className="text-xs text-slate-400">Transfer & routing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600/10 border border-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <PhoneOff className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-sm font-medium text-white mb-1">Call Recording</h4>
                <p className="text-xs text-slate-400">Playback & archive</p>
              </div>
            </div>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700">
            <Phone className="w-4 h-4 mr-2" />
            Configure Integration
          </Button>
        </div>
      </div>
    </div>
  );
}
