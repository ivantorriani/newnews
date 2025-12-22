"use client";

import { useEffect, useRef, useState } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { TypingAnimation } from "@/components/ui/typing-animation";

type Props = { className?: string };

type ApiResult = {
  ok: boolean;
  code: number | null;
  stdout: string;
  stderr: string;
};

export default function LatestEpisodePlayer({ className }: Props) {
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");

  // Prevent double-run in React Strict Mode dev
  const didRun = useRef(false);

  async function getLatestEpisode() {
    setRunning(true);
    setStatus("");
    setOutputText("");

    try {
      const res = await fetch("/api/summarize-pods", { method: "POST" });
      const data = (await res.json()) as ApiResult;

      if (!res.ok || !data.ok) {
        setStatus(`Python failed (code=${data.code}).\n${data.stderr || data.stdout}`);
        return;
      }

      // This is the printed output from summarize.py
      setOutputText(String(data.stdout ?? "").trim());
    } catch {
      setStatus("Something happened");
    } finally {
      setRunning(false);
    }
  }

  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;
    void getLatestEpisode();
  }, []);

  return (
    <div className={`absolute bottom-15 left-25 z-1 h-[300px] w-[500px] ${className ?? ""}`}>
      <MagicCard
        className="w-full max-w-md"
        gradientSize={320}
        gradientOpacity={0.9}
        gradientColor="#0b2878ff"
        gradientFrom="#22d3ee"
        gradientTo="#a78bfa"
      >
        <div className="flex items-center justify-center p-10 text-center">
          <TypingAnimation>
            {outputText ? outputText : running ? "Running..." : status ? status : "No output yet."}
          </TypingAnimation>
        </div>
      </MagicCard>
    </div>
  );
}
