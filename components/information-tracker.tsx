"use client";
//Component Imports ---------------------

import { useMemo, useState } from "react";
import { todayLA } from "@/lib/dates";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"
//Component Imports ---------------------

type Props = {
  className?: string;
};

export default function InformationTracker({ className }: Props) {
  const dateStr = useMemo(() => todayLA(), []);
  const [cacheBust, setCacheBust] = useState<number>(Date.now());
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState<string>("");

  const mp3Url = `/episodes/bbc/${dateStr}.mp3?t=${cacheBust}`;

  async function getLatestEpisode() {
    
  }

return (
    <div className="absolute bottom-15 left-25 z-1 h-[300px] w-[500px]">
              <Terminal>
                <TypingAnimation>breaking updates...</TypingAnimation>
                <AnimatedSpan>✔ Chicago: </AnimatedSpan>
                <AnimatedSpan>✔ New York: </AnimatedSpan>
              </Terminal>
    </div>
);

}
