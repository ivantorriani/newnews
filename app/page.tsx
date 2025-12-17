import Image from "next/image";

//Component Imports ---------------------
import type { COBEOptions } from "cobe";
import { Globe } from "@/components/ui/globe";
import { HyperText } from "@/components/ui/hyper-text"
//Component Imports ---------------------





export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans bg-white">
      <main className="relative flex min-h-screen w-full flex-col bg-white">

        {/* -----------------------------Title Text Animations -----------------------------*/}
        <div className="absolute top-25 left-25 z-10 h-[400px] w-[400px]">
          <HyperText duration={2000} delay={300}>Your Daily Briefing</HyperText>
        </div>

        <div className="absolute top-25 left-95 z-10 h-[400px] w-[400px]">
          <HyperText duration={6000} delay={300}> The way to stay informed as a true democratic citizen.</HyperText>
        </div>
       {/* -----------------------------Title Text Animations -----------------------------*/}


        {/* -----------------------------Globe Animations -----------------------------*/}
        <div className="absolute bottom-15 right-15 z-10 h-[400px] w-[400px]">
          <Globe />
        </div>
       {/* -----------------------------Globe Animations -----------------------------*/}

      </main>
    </div>
  );
}
