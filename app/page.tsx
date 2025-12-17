//Basic Imports ---------------------
"use client"
import Script from "next/script"
import Image from "next/image";
//Basic Imports ---------------------



//Component Imports ---------------------
import type { COBEOptions } from "cobe";
import { Globe } from "@/components/ui/globe";
import { HyperText } from "@/components/ui/hyper-text"
//Component Imports ---------------------





export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-50 font-sans">

      <main className="relative flex min-h-screen w-full flex-col">
        {/* -----------------------------Title Text Animations -----------------------------*/}
        <div className="absolute top-25 left-25 z-10 h-[400px] w-[400px]">
          <HyperText duration={2000} delay={300}>Your Daily Briefing</HyperText>
        </div>

        <div className="absolute top-25 left-95 z-10 h-[400px] w-[400px]">
          <HyperText duration={6000} delay={300}> The way to stay informed as a true democratic citizen.</HyperText>
        </div>
       {/* -----------------------------Title Text Animations -----------------------------*/}

      {/* -----------------------------Proportion Graphic -----------------------------*/}


        <div className="absolute top-5 left-5 z-10 h-[700px] w-[700x]">
          <Image src="/graphics/proportions.png"
            alt="graphic1"
            width={700}
            height={700}/>
        </div>

       {/* ----------------------------- Proportion Graphic -----------------------------*/}

      {/* ----------------------------- Podcast Functionality -----------------------------*/}
      <div className="absolute bottom-0 left-0 z-1 h-[200px] w-[200px]">
        <div className="absolute bottom-0 left-40 z-10 h-[200px] w-[400px]">
          <iframe
            src="https://open.spotify.com/embed/episode/7makk4oTQel546B0PZlDM5?utm_source=generator"
            width="100%"
            height="100%"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

      </div>

      {/* ----------------------------- Podcast Functionality -----------------------------*/}


        {/* -----------------------------Globe Animations -----------------------------*/}
        <div className="absolute bottom-15 right-15 z-10 h-[400px] w-[400px]">
          <Globe />
        </div>
       {/* -----------------------------Globe Animations -----------------------------*/}

      </main>
    </div>
  );
}
