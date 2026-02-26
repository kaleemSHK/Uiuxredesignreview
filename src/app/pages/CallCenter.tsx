import { useState, useEffect } from "react";
import { 
  Phone, 
  PhoneIncoming, 
  PhoneOff, 
  Clock, 
  MapPin, 
  User, 
  FileText,
  AlertTriangle,
  Send,
  Mic,
  MicOff,
  Volume2
} from "lucide-react";
import { Button } from "../components/ui/button";

interface IncomingCall {
  id: string;
  phoneNumber: string;
  callerName?: string;
  location?: string;
  timestamp: Date;
  priority: 'normal' | 'urgent';
}

interface ActiveCall {
  id: string;
  phoneNumber: string;
  callerName?: string;
  location?: string;
  startTime: Date;
  notes: string;
}

const INCIDENT_TYPES = [
  { value: "medical", label: "Medical Emergency", color: "red" },
  { value: "fire", label: "Fire", color: "orange" },
  { value: "crime", label: "Crime in Progress", color: "red" },
  { value: "accident", label: "Traffic Accident", color: "yellow" },
  { value: "disturbance", label: "Disturbance", color: "yellow" },
  { value: "theft", label: "Theft/Burglary", color: "orange" },
  { value: "assault", label: "Assault", color: "red" },
  { value: "suspicious", label: "Suspicious Activity", color: "yellow" },
];

const PRIORITIES = [
  { value: "critical", label: "CRITICAL", color: "bg-red-600" },
  { value: "high", label: "HIGH", color: "bg-orange-600" },
  { value: "medium", label: "MEDIUM", color: "bg-yellow-600" },
  { value: "low", label: "LOW", color: "bg-blue-600" },
];

export function CallCenter() {
  const [incomingCalls, setIncomingCalls] = useState<IncomingCall[]>([
    {
      id: "1",
      phoneNumber: "+971 50 234 5678",
      callerName: "Ahmad Hassan",
      location: "Al Barsha, Dubai",
      timestamp: new Date(Date.now() - 5000),
      priority: 'urgent'
    },
    {
      id: "2",
      phoneNumber: "+971 55 876 5432",
      location: "Downtown Dubai",
      timestamp: new Date(Date.now() - 12000),
      priority: 'normal'
    },
    {
      id: "3",
      phoneNumber: "+971 50 111 2233",
      callerName: "Sara Ahmed",
      location: "Jumeirah Beach",
      timestamp: new Date(Date.now() - 25000),
      priority: 'normal'
    }
  ]);

  const [activeCall, setActiveCall] = useState<ActiveCall | null>(null);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  
  // Incident creation form
  const [incidentType, setIncidentType] = useState("");
  const [incidentLocation, setIncidentLocation] = useState("");
  const [incidentPriority, setIncidentPriority] = useState("");
  const [incidentNotes, setIncidentNotes] = useState("");
  
  // Incoming call popup
  const [showIncomingPopup, setShowIncomingPopup] = useState(false);

  // Timer for active call
  useEffect(() => {
    if (activeCall) {
      const interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - activeCall.startTime.getTime()) / 1000);
        setCallDuration(elapsed);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [activeCall]);

  // Simulate incoming call popup
  useEffect(() => {
    if (incomingCalls.length > 0 && !activeCall) {
      setShowIncomingPopup(true);
    }
  }, [incomingCalls, activeCall]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const answerCall = (call: IncomingCall) => {
    setActiveCall({
      id: call.id,
      phoneNumber: call.phoneNumber,
      callerName: call.callerName,
      location: call.location,
      startTime: new Date(),
      notes: ""
    });
    setIncomingCalls(prev => prev.filter(c => c.id !== call.id));
    setShowIncomingPopup(false);
    
    // Pre-fill incident form
    if (call.location) {
      setIncidentLocation(call.location);
    }
  };

  const endCall = () => {
    setActiveCall(null);
    setCallDuration(0);
    setIsMuted(false);
  };

  const createIncident = () => {
    if (!incidentType || !incidentLocation || !incidentPriority) {
      alert("Please fill all required fields");
      return;
    }
    
    // In real system: send to backend via WebSocket
    console.log("Creating incident:", {
      type: incidentType,
      location: incidentLocation,
      priority: incidentPriority,
      notes: incidentNotes,
      callId: activeCall?.id,
      phoneNumber: activeCall?.phoneNumber
    });

    alert("Incident created and dispatched to dispatcher!");
    
    // Reset form
    setIncidentType("");
    setIncidentLocation("");
    setIncidentPriority("");
    setIncidentNotes("");
  };

  const addQuickNote = (note: string) => {
    if (activeCall) {
      setActiveCall({
        ...activeCall,
        notes: activeCall.notes ? `${activeCall.notes}\n${note}` : note
      });
    }
    setIncidentNotes(prev => prev ? `${prev}\n${note}` : note);
  };

  return (
    <div className="h-full bg-slate-950 flex flex-col">
      {/* Top Status Bar */}
      <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/80 backdrop-blur">
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-xl font-bold text-white tracking-wide">CALL CENTER 112</h1>
            <p className="text-sm text-slate-400">Emergency Call Handler</p>
          </div>
          <div className="h-8 w-px bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-300">ONLINE</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-2xl font-mono text-white">{new Date().toLocaleTimeString('en-US', { hour12: false })}</div>
            <div className="text-xs text-slate-400">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
          </div>
        </div>
      </header>

      {/* Main Content - 3 Column Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT: Incoming Calls Queue */}
        <div className="w-80 border-r border-slate-800 bg-slate-900/50 flex flex-col">
          <div className="p-4 border-b border-slate-800">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-bold text-white">INCOMING CALLS</h2>
              <div className="flex items-center gap-2 bg-red-600/20 border border-red-600/30 px-3 py-1 rounded">
                <PhoneIncoming className="w-4 h-4 text-red-400" />
                <span className="text-sm font-bold text-red-400">{incomingCalls.length}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500">Waiting for answer</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {incomingCalls.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-slate-600" />
                </div>
                <p className="text-slate-500 text-sm">No incoming calls</p>
              </div>
            ) : (
              incomingCalls.map((call) => (
                <div
                  key={call.id}
                  className={`bg-slate-800/50 border-2 ${
                    call.priority === 'urgent' 
                      ? 'border-red-600 shadow-lg shadow-red-600/20' 
                      : 'border-slate-700'
                  } rounded-lg p-4 cursor-pointer hover:bg-slate-800 transition-all`}
                  onClick={() => answerCall(call)}
                >
                  {call.priority === 'urgent' && (
                    <div className="flex items-center gap-2 mb-2 text-red-400">
                      <AlertTriangle className="w-4 h-4 animate-pulse" />
                      <span className="text-xs font-bold uppercase">URGENT</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 mb-2">
                    <PhoneIncoming className={`w-5 h-5 ${call.priority === 'urgent' ? 'text-red-400' : 'text-green-400'} animate-pulse`} />
                    <span className="text-lg font-mono font-bold text-white">{call.phoneNumber}</span>
                  </div>
                  
                  {call.callerName && (
                    <div className="flex items-center gap-2 mb-2 text-slate-300">
                      <User className="w-4 h-4 text-slate-500" />
                      <span className="text-sm">{call.callerName}</span>
                    </div>
                  )}
                  
                  {call.location && (
                    <div className="flex items-center gap-2 mb-2 text-slate-400">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span className="text-sm">{call.location}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">
                      {Math.floor((Date.now() - call.timestamp.getTime()) / 1000)}s ago
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white font-bold"
                    onClick={() => answerCall(call)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    ANSWER CALL
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* CENTER: Active Call Panel */}
        <div className="flex-1 bg-slate-950 flex flex-col">
          {activeCall ? (
            <>
              {/* Call Header */}
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border-b border-green-600/30 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center animate-pulse">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-mono font-bold text-white mb-1">{activeCall.phoneNumber}</div>
                      {activeCall.callerName && (
                        <div className="text-sm text-slate-300">{activeCall.callerName}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-4xl font-mono font-bold text-green-400 mb-1">
                      {formatDuration(callDuration)}
                    </div>
                    <div className="text-xs text-slate-400 uppercase">Call Duration</div>
                  </div>
                </div>
                
                {activeCall.location && (
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-900/50 rounded px-3 py-2">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-medium">{activeCall.location}</span>
                  </div>
                )}
              </div>
              
              {/* Call Controls */}
              <div className="p-6 border-b border-slate-800 bg-slate-900/30">
                <div className="flex items-center gap-3 mb-4">
                  <Button
                    size="lg"
                    variant={isMuted ? "destructive" : "outline"}
                    onClick={() => setIsMuted(!isMuted)}
                    className="flex-1"
                  >
                    {isMuted ? <MicOff className="w-5 h-5 mr-2" /> : <Mic className="w-5 h-5 mr-2" />}
                    {isMuted ? 'UNMUTE' : 'MUTE'}
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                  >
                    <Volume2 className="w-5 h-5 mr-2" />
                    SPEAKER
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="destructive"
                    onClick={endCall}
                    className="flex-1 bg-red-600 hover:bg-red-700"
                  >
                    <PhoneOff className="w-5 h-5 mr-2" />
                    END CALL
                  </Button>
                </div>
                
                {/* Quick Action Buttons */}
                <div className="grid grid-cols-4 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addQuickNote("Caller is calm")}
                    className="text-xs"
                  >
                    Calm
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addQuickNote("Caller is distressed")}
                    className="text-xs"
                  >
                    Distressed
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addQuickNote("Needs ambulance")}
                    className="text-xs"
                  >
                    Ambulance
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addQuickNote("Language barrier")}
                    className="text-xs"
                  >
                    Translation
                  </Button>
                </div>
              </div>
              
              {/* Call Notes */}
              <div className="flex-1 p-6 overflow-y-auto">
                <label className="block text-sm font-bold text-white mb-2 uppercase">Call Notes</label>
                <textarea
                  className="w-full h-full bg-slate-900 border border-slate-700 rounded-lg p-4 text-white text-base resize-none focus:outline-none focus:border-blue-500"
                  placeholder="Enter call details, caller information, and any relevant notes..."
                  value={activeCall.notes}
                  onChange={(e) => setActiveCall({ ...activeCall, notes: e.target.value })}
                />
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-12 h-12 text-slate-600" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">No Active Call</h2>
                <p className="text-slate-500">Answer an incoming call to begin</p>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: Incident Creation Panel */}
        <div className="w-96 border-l border-slate-800 bg-slate-900/50 flex flex-col">
          <div className="p-4 border-b border-slate-800 bg-red-600/10">
            <h2 className="text-lg font-bold text-white mb-1">CREATE INCIDENT</h2>
            <p className="text-xs text-slate-400">Fill form and dispatch</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Incident Type */}
            <div>
              <label className="block text-sm font-bold text-white mb-2 uppercase">Incident Type *</label>
              <select
                className="w-full bg-slate-900 border-2 border-slate-700 rounded-lg px-4 py-3 text-white text-base focus:outline-none focus:border-blue-500"
                value={incidentType}
                onChange={(e) => setIncidentType(e.target.value)}
              >
                <option value="">Select incident type...</option>
                {INCIDENT_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Location */}
            <div>
              <label className="block text-sm font-bold text-white mb-2 uppercase">Location *</label>
              <input
                type="text"
                className="w-full bg-slate-900 border-2 border-slate-700 rounded-lg px-4 py-3 text-white text-base focus:outline-none focus:border-blue-500"
                placeholder="Enter location or address..."
                value={incidentLocation}
                onChange={(e) => setIncidentLocation(e.target.value)}
              />
              <p className="text-xs text-slate-500 mt-1">Street, landmark, or coordinates</p>
            </div>
            
            {/* Priority */}
            <div>
              <label className="block text-sm font-bold text-white mb-2 uppercase">Priority *</label>
              <div className="grid grid-cols-2 gap-2">
                {PRIORITIES.map((priority) => (
                  <button
                    key={priority.value}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      incidentPriority === priority.value
                        ? `${priority.color} border-white text-white font-bold`
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600'
                    }`}
                    onClick={() => setIncidentPriority(priority.value)}
                  >
                    {priority.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-bold text-white mb-2 uppercase">Additional Details</label>
              <textarea
                className="w-full h-32 bg-slate-900 border-2 border-slate-700 rounded-lg p-3 text-white text-sm resize-none focus:outline-none focus:border-blue-500"
                placeholder="Victim info, suspect description, special instructions..."
                value={incidentNotes}
                onChange={(e) => setIncidentNotes(e.target.value)}
              />
            </div>
            
            {/* Caller Info Summary */}
            {activeCall && (
              <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-3">
                <div className="text-xs font-bold text-blue-400 mb-2 uppercase">Linked Call</div>
                <div className="text-sm text-slate-300 space-y-1">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-slate-500" />
                    <span className="font-mono">{activeCall.phoneNumber}</span>
                  </div>
                  {activeCall.callerName && (
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3 text-slate-500" />
                      <span>{activeCall.callerName}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Create Button */}
          <div className="p-4 border-t border-slate-800">
            <Button
              size="lg"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-base h-14"
              onClick={createIncident}
              disabled={!incidentType || !incidentLocation || !incidentPriority}
            >
              <Send className="w-5 h-5 mr-2" />
              CREATE INCIDENT & DISPATCH
            </Button>
            <p className="text-xs text-slate-500 text-center mt-2">
              Target: &lt;15 seconds
            </p>
          </div>
        </div>
      </div>

      {/* INCOMING CALL POPUP - Large and Impossible to Miss */}
      {showIncomingPopup && incomingCalls.length > 0 && !activeCall && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
          <div className="bg-gradient-to-br from-red-600 to-orange-600 p-1 rounded-2xl shadow-2xl shadow-red-600/50 max-w-2xl w-full mx-4 animate-in zoom-in duration-200">
            <div className="bg-slate-900 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <PhoneIncoming className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">INCOMING EMERGENCY CALL</h2>
                <p className="text-red-400 text-lg font-semibold">112 Emergency Line</p>
              </div>
              
              <div className="bg-slate-950 rounded-lg p-6 mb-6 space-y-4">
                <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                  <Phone className="w-8 h-8 text-green-400" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase mb-1">Phone Number</div>
                    <div className="text-3xl font-mono font-bold text-white">{incomingCalls[0].phoneNumber}</div>
                  </div>
                </div>
                
                {incomingCalls[0].callerName && (
                  <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                    <User className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="text-xs text-slate-500 uppercase mb-1">Caller Name</div>
                      <div className="text-xl font-semibold text-white">{incomingCalls[0].callerName}</div>
                    </div>
                  </div>
                )}
                
                {incomingCalls[0].location && (
                  <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                    <MapPin className="w-6 h-6 text-orange-400" />
                    <div>
                      <div className="text-xs text-slate-500 uppercase mb-1">Location</div>
                      <div className="text-xl font-semibold text-white">{incomingCalls[0].location}</div>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase mb-1">Waiting Time</div>
                    <div className="text-xl font-semibold text-white">
                      {Math.floor((Date.now() - incomingCalls[0].timestamp.getTime()) / 1000)} seconds
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 h-16 text-lg border-2"
                  onClick={() => setShowIncomingPopup(false)}
                >
                  DISMISS
                </Button>
                <Button
                  size="lg"
                  className="flex-1 h-16 bg-green-600 hover:bg-green-700 text-white font-bold text-lg"
                  onClick={() => answerCall(incomingCalls[0])}
                >
                  <Phone className="w-6 h-6 mr-2" />
                  ANSWER NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
