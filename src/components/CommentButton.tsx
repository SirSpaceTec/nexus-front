"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function CommentButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="bg-black/50 p-2 rounded-full backdrop-blur hover:scale-110 transition-transform text-white"
      >
        <MessageCircle className="w-5 h-5" />
      </button>
      {open && (
        <div className="absolute right-12 top-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-700 text-white p-4 rounded shadow-lg w-64">
          <p className="text-sm mb-2 font-semibold">Comentarios</p>
          <textarea
            placeholder="Escribe un comentario..."
            className="w-full p-2 bg-zinc-800 rounded text-sm"
          ></textarea>
        </div>
      )}
    </div>
  );
}
