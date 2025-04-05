"use client";
import { useState } from "react";
import { Share2 } from "lucide-react";

export default function ShareButton() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="bg-black/50 p-2 rounded-full backdrop-blur hover:scale-110 transition-transform text-white"
      >
        <Share2 className="w-5 h-5" />
      </button>
      {showOptions && (
        <div className="absolute right-12 top-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-700 text-white p-2 rounded shadow-lg text-sm w-48 space-y-2">
          <button className="w-full text-left hover:text-fuchsia-500">Copiar enlace</button>
          <button className="w-full text-left hover:text-fuchsia-500">Compartir en Nexus</button>
          <button className="w-full text-left hover:text-fuchsia-500">Más opciones...</button>
        </div>
      )}
    </div>
  );
}