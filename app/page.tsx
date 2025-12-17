import Image from "next/image";

//Component Imports ---------------------
import type { COBEOptions } from "cobe";
import { Globe } from "@/components/ui/globe";
//Component Imports ---------------------





export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="relative flex min-h-screen w-full max-w-3xl flex-col py-32 px-16 bg-white dark:bg-black">
        {/* -----------------------------Globe Animations -----------------------------*/}
        <div className="absolute bottom-4 right-4 z-10 h-[400px] w-[400px]">
          <Globe />
        </div>
       {/* -----------------------------Globe Animations -----------------------------*/}

      </main>
    </div>
  );
}
