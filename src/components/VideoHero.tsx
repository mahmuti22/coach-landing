"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function ScrollChevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 animate-scroll-hint text-zinc-400/60"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showChevron, setShowChevron] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShowChevron(window.scrollY < 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      if (mediaQuery.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {
          // Autoplay may be blocked until user interaction.
        });
      }
    };

    syncPlayback();
    mediaQuery.addEventListener("change", syncPlayback);

    return () => {
      mediaQuery.removeEventListener("change", syncPlayback);
    };
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-black"
      aria-label="Most Wanted Physique Coaching"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-zinc-950"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <Image
          src="/logo.png"
          alt="Most Wanted Physique Coaching"
          width={384}
          height={384}
          priority
          className="h-auto w-64 drop-shadow-2xl md:w-80 lg:w-96"
        />
        <p className="mt-4 text-sm font-light uppercase tracking-[0.4em] text-zinc-200 drop-shadow-lg md:text-base">
          PHYSIQUE COACHING
        </p>
      </div>

      <a
        href="#hero"
        className={`absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-zinc-400/60 transition-all duration-300 hover:text-zinc-300 ${
          showChevron
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
        aria-label="Scroll to main content"
        aria-hidden={!showChevron}
        tabIndex={showChevron ? 0 : -1}
      >
        <ScrollChevron />
      </a>
    </section>
  );
}
