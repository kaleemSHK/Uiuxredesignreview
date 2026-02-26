import { Wifi, WifiOff } from "lucide-react";
import { useState, useEffect } from "react";

export function WebSocketIndicator() {
  const [connected, setConnected] = useState(true);

  // Simulate connection status - replace with actual WebSocket connection
  useEffect(() => {
    const interval = setInterval(() => {
      // In production, this would check actual WebSocket connection
      setConnected(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-950/50 rounded-lg border border-slate-700/50">
      {connected ? (
        <>
          <div className="relative">
            <Wifi className="w-4 h-4 text-green-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
          </div>
          <span className="text-xs text-green-400 font-medium">Live</span>
        </>
      ) : (
        <>
          <WifiOff className="w-4 h-4 text-red-400" />
          <span className="text-xs text-red-400 font-medium">Offline</span>
        </>
      )}
    </div>
  );
}
