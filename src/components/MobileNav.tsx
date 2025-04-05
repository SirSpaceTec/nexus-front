"use client";
import { Home, Search, PlusCircle, Bell, User } from "lucide-react";

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-800 px-4 py-2 flex justify-between text-white">
      <button className="flex flex-col items-center gap-1 text-xs">
        <Home className="w-5 h-5" />
        Inicio
      </button>
      <button className="flex flex-col items-center gap-1 text-xs">
        <Search className="w-5 h-5" />
        Buscar
      </button>
      <button className="flex justify-center items-center">
        <PlusCircle className="w-9 h-9 text-fuchsia-500" />
      </button>
      <button className="flex flex-col items-center gap-1 text-xs">
        <Bell className="w-5 h-5" />
        Notifs
      </button>
      <button className="flex flex-col items-center gap-1 text-xs">
        <User className="w-5 h-5" />
        Perfil
      </button>
    </nav>
  );
}
