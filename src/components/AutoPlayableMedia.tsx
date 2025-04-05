"use client";
import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface AutoPlayableMediaProps {
  src?: string;
  mediaType: "video" | "image" | "clip" | "text";
  shouldPlay: boolean;
  muted: boolean;
}

export default function AutoPlayableMedia({
  src,
  mediaType,
  shouldPlay,
  muted,
}: AutoPlayableMediaProps) {
  const mediaRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [showPlayIcon, setShowPlayIcon] = useState<null | "play" | "pause">(null);


  // Controlar autoplay/pause según visibilidad
  useEffect(() => {
    const video = mediaRef.current;
    if (!video || mediaType === "image") return;

    if (shouldPlay) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  }, [shouldPlay, mediaType]);


  const handleTimeUpdate = () => {
    const video = mediaRef.current;
    if (!video) return;
    const percentage = (video.currentTime / video.duration) * 100;
    setProgress(percentage || 0);
  };

  const handleTogglePlay = () => {
    const video = mediaRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setShowPlayIcon("play");
    } else {
      video.pause();
      setShowPlayIcon("pause");
    }

    // Ocultar icono después de 1 segundo
    setTimeout(() => setShowPlayIcon(null), 1000);
  };


  if (mediaType === "text") {
    return <div className="w-full h-full bg-zinc-900" />;
  }


  return (
    <div className="relative w-full h-full">
      {/* Media display */}
      {mediaType === "video" || mediaType === "clip" ? (
        <video
          ref={mediaRef}
          src={src}
          className="w-full h-full object-cover z-0"
          muted={muted}
          loop
          playsInline
          controls={mediaType === "clip"}
          onTimeUpdate={handleTimeUpdate}
          onClick={handleTogglePlay}
        />

      ) : (
        <img
          src={src}
          alt="Post"
          className="w-full h-full object-cover"
        />
      )}

      {/* Barra de progreso (solo clips) */}
      {mediaType === "clip" && (
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
          <div className="w-full h-1 bg-white/20 rounded">
            <div
              className="h-1 bg-fuchsia-500 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {showPlayIcon && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 flex items-center justify-center bg-black/60 rounded-full backdrop-blur animate-fade">
            {showPlayIcon === "play" ? (
              <Play className="w-10 h-10 text-white" />
            ) : (
              <Pause className="w-10 h-10 text-white" />
            )}
          </div>
        </div>
      )}


    </div>
  );
}
