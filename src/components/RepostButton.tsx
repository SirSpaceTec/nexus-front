"use client";
import { useState } from "react";
import { Repeat } from "lucide-react";

export default function RepostButton() {
  const [reposted, setReposted] = useState(false);

  return (
    <button
      onClick={() => setReposted(!reposted)}
      className={`bg-black/50 p-2 rounded-full backdrop-blur hover:scale-110 transition-transform text-white ${
        reposted ? "text-fuchsia-500" : ""
      }`}
    >
      <Repeat className="w-5 h-5" />
    </button>
  );
}