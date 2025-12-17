import Image from "next/image";

//Component Imports ---------------------
import type { COBEOptions } from "cobe";
import { Globe } from "@/components/ui/globe";
//Component Imports ---------------------





export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <main className="relative flex min-h-screen w-full flex-col bg-white dark:bg-black">
        {/* -----------------------------Globe Animations -----------------------------*/}
        <div className="absolute bottom-15 right-15 z-10 h-[400px] w-[400px]">
          <Globe />
        </div>
       {/* -----------------------------Globe Animations -----------------------------*/}

      </main>
    </div>
  );
}
