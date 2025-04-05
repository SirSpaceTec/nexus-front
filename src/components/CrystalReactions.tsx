"use client";
import { useState, useRef, useEffect } from "react";
import { Badge } from "lucide-react";

const crystals = [
  { id: "brillante", label: "Cómico", icon: <Badge className="w-5 h-5 fill-current" />, color: "text-yellow-400" },
  { id: "epico", label: "Épico", icon: <Badge className="w-5 h-5 fill-current" />, color: "text-purple-500" },
  { id: "sabio", label: "Sabio", icon: <Badge className="w-5 h-5 fill-current" />, color: "text-blue-500" },
  { id: "comico", label: "Brillante", icon: <Badge className="w-5 h-5 fill-current" />, color: "text-green-500" },
  { id: "empatico", label: "Empático", icon: <Badge className="w-5 h-5 fill-current" />, color: "text-rose-400" },
];

export default function CrystalReactions() {
  const [selected, setSelected] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleHoldStart = () => {
    setTimeout(() => {
      setIsExpanded(true);
    }, 500);
  };

  const handleSelect = (id: string) => {
    if (selected === id) {
      setSelected(null);
      setCount((prev) => Math.max(prev - 1, 0));
    } else {
      if (!selected) {
        setCount((prev) => prev + 1);
      }
      setSelected(id);
    }
    setIsExpanded(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded]);

  const activeCrystal = crystals.find((c) => c.id === selected);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center">
      {/* Botón principal */}
      <button
        onTouchStart={handleHoldStart}
        onMouseDown={handleHoldStart}
        className={`flex flex-col items-center ${activeCrystal ? activeCrystal.color : "text-white"} hover:scale-110 transition-transform`}
      >
        <div className="bg-black/50 p-2 rounded-full backdrop-blur">
          {(activeCrystal ? activeCrystal.icon : <Badge className="w-5 h-5" />)}
        </div>
        <span className="text-xs mt-1">{count}</span>
      </button>

      {/* Fondo transparente para evitar clicks sobre el vídeo */}
      {isExpanded && (
        <div className="fixed inset-0 z-10" onClick={() => setIsExpanded(false)} />
      )}

      {/* Panel de cristales flotante */}
      {isExpanded && (
        <div className="absolute -top-14 right-0 z-20 flex flex-row items-center gap-2 bg-black/40 px-2 py-2 rounded-lg backdrop-blur">
          {crystals.map((crystal) => (
            <button
              key={crystal.id}
              onClick={() => handleSelect(crystal.id)}
              className={`p-2 rounded-full ${crystal.color} hover:scale-110 transition-transform bg-black/50`}
            >
              {crystal.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
