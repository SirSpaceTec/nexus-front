"use client";
import { useEffect, useRef, useState } from "react";
import AutoPlayableMedia from "./AutoPlayableMedia";
import VolumeControl from "./VolumeControl";
import {
  Heart,
  Repeat,
  MessageCircle,
  Share2
} from "lucide-react";


interface MediaPostProps {
  src?: string;
  user: string;
  descripcion: string;
  logros: string[];
  mediaType: "video" | "image" | "text";
}

export default function MediaPost({
  src,
  user,
  descripcion,
  logros,
  mediaType,
}: MediaPostProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  // const [isMuted, setIsMuted] = useState(true);
  const [isMuted, setIsMuted] = useState(mediaType === "video");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);

          if (mediaType === "video" && videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    const current = containerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [mediaType]);


  return (
    <article
      ref={containerRef}
      className="relative w-full h-[calc(100vh-57.5px)] snap-start overflow-hidden"

    >
      {/* Multimedia dinámico */}
      <div className="absolute inset-0 z-0">
        <AutoPlayableMedia src={src} mediaType={mediaType} shouldPlay={isVisible} muted={isMuted} />
      </div>

      {/* Overlay */}
      {mediaType !== "text" && <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-white/20 rounded-full" />
          <div>
            <span className="block font-semibold text-sm">{user}</span>
            <span className="text-xs text-gray-300">Nivel 3 · Explorador</span>
          </div>
        </div>

        <p className="text-sm text-gray-200 mb-2">{descripcion}</p>

        <div className="flex gap-2 flex-wrap text-xs text-gray-300">
          {logros.map((logro, idx) => (
            <span
              key={idx}
              className="bg-white/10 px-2 py-1 rounded-full"
            >
              {logro}
            </span>
          ))}
        </div>
        {/* Mute/Unmute button */}
        <VolumeControl
          initialMuted={isMuted}
          onMuteToggle={setIsMuted}
        />
      </div>}

      {mediaType === "text" && (
        <div className="absolute inset-0 z-10 flex flex-col justify-between items-center px-6 text-white bg-gradient-to-b from-zinc-950 to-zinc-900">
          <div className="mt-4 text-center">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 bg-white/20 rounded-full" />
            </div>
            <p className="text-base font-semibold">{user}</p>
            <p className="text-xs text-zinc-400">Nivel 3 · Explorador</p>
            <div className="mt-4 flex gap-2 text-xs text-zinc-400 flex-wrap justify-center max-w-md">
              {logros.map((logro, idx) => (
                <span key={idx} className="bg-white/10 px-2 py-1 rounded-full">
                  {logro}
                </span>
              ))}
            </div>
            <p className="mt-4 text-start font-medium leading-relaxed max-w-md">
              {descripcion
                .split(" ")
                .slice(0, 75)
                .join(" ") + (descripcion.split(" ").length > 75 ? "..." : "")}
            </p>
          </div>

          {/* Reacciones estilo X */}
          <div className="mb-6 flex justify-between w-full text-sm text-zinc-400">
            <button className="flex items-center gap-1 hover:text-fuchsia-500 transition">
              <Heart className="w-4 h-4" /> <span>45</span>
            </button>
            <button className="flex items-center gap-1 hover:text-fuchsia-500 transition">
              <Repeat className="w-4 h-4" /> <span>12</span>
            </button>
            <button className="flex items-center gap-1 hover:text-fuchsia-500 transition">
              <MessageCircle className="w-4 h-4" /> <span>8</span>
            </button>
            <button className="hover:text-fuchsia-500 transition">
              <Share2 className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}


    </article>
  );
}
