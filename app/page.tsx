//Basic Imports ---------------------
"use client"
import Image from "next/image";
//Basic Imports ---------------------



//Component Imports ---------------------
import type { COBEOptions } from "cobe";
import { Globe } from "@/components/ui/globe";
import { HyperText } from "@/components/ui/hyper-text"
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
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

      {/* -----------------------------Proportion Graphics -----------------------------*/}


        <div className="absolute top-5 left-5 z-10 h-[700px] w-[700x]">
          <Image src="/graphics/proportions.png"
            alt="graphic1"
            width={700}
            height={700}/>
        </div>

        <div className="absolute bottom-30 left-[-25] z-0 h-[350px] w-[350x] opacity-50">
          <Image src="/graphics/proportions2.png"
            alt="graphic1"
            width={700}
            height={700}/>
        </div>

        <div className="absolute bottom-[-10] left-[150] z-10 h-[350px] w-[350x]">
          <Image src="/graphics/proportions3.png"
            alt="graphic1"
            width={700}
            height={700}/>
        </div>

        {/*}
        <div className="absolute top-40 right-120 z-0 h-[1000px] w-[600px] opacity-70">
          <Image src="/graphics/proportions5 (3).png"
            alt="graphic1"
            width={700}
            height={700}/>
        </div>
        */}

       {/* ----------------------------- Proportion Graphics -----------------------------*/}

       {/* ----------------------------- Proportion Graphics -----------------------------*/}
        <div className="absolute top-[-25] left-10 z-10 h-[20px] w-[500px] opacity-60">
        <Image src="/graphics/proportions6.png"
            alt="graphic1"
            width={700}
            height={700}/>
        </div>

        <div className="absolute top-[-25] left-90 z-10 h-[20px] w-[500px] opacity-60">
        <Image src="/graphics/proportions6.png"
            alt="graphic1"
            width={700}
            height={700}/>
        </div>

        <div className="absolute top-[-25] left-180 z-10 h-[20px] w-[500px] opacity-60">
        <Image src="/graphics/proportions6.png"
            alt="graphic1"
            width={700}
            height={700}/>
        </div>

      <div className="absolute top-[-25] left-270 z-10 h-[20px] w-[500px] opacity-60">
        <Image src="/graphics/proportions6.png"
            alt="graphic1"
            width={700}
            height={700}/>
        </div>

       {/* ----------------------------- Information Tracking -----------------------------*/}
        <div className="absolute bottom-15 left-25 z-1 h-[300px] w-[500px]">
          <Terminal>
            <TypingAnimation>breaking updates...</TypingAnimation>
            <AnimatedSpan>✔ Chicago: </AnimatedSpan>
            <AnimatedSpan>✔ New York: </AnimatedSpan>
          </Terminal>
        </div>
        {/* ----------------------------- Information Tracking -----------------------------*/}


      {/* ----------------------------- Right Functionality -----------------------------*/}
      <div className="absolute top-20 right-45 h-[650px] w-[600px] opacity-30">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={650}
        width={700}
      />
      </div>
      
      {/* ----------------------------- Podcast Functionality -----------------------------*/}
      <div className="absolute top-33 right-25 h-[650px] w-[600px]">
        <AudioPlayer 
          src="/episodes/bbc/2025-12-18.mp3"
          autoPlay={false}
          />
      </div>
      {/* ----------------------------- Podcast Functionality -----------------------------*/}

      </main>
    </div>
  );
}
