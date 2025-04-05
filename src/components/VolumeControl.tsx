"use client";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";

interface VolumeControlProps {
  onMuteToggle: (muted: boolean) => void;
  initialMuted?: boolean;
}

export default function VolumeControl({
  onMuteToggle,
  initialMuted = false,
}: VolumeControlProps) {
  const [isMuted, setIsMuted] = useState(initialMuted);


  useEffect(() => {
    onMuteToggle(isMuted);
  }, [isMuted]);
  

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div
      className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-black/50 px-3 py-2 rounded-full text-white"
    >

      <button
        onClick={toggleMute}
        className="hover:text-fuchsia-400 transition-colors"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </div>
  );
}
