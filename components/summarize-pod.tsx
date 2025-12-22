"use client";
//Component Imports ---------------------
import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TypingAnimation } from "@/components/ui/typing-animation";
//Component Imports ---------------------


type Props = { className?: string };

type ApiResult = {
  ok: boolean;
  code: number | null;
  stdout: string;
  stderr: string;
};

export default function LatestEpisodePlayer({ className }: Props) {
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState("");
  const [outputText, setOutputText] = useState("");

  const didRun = useRef(false);

  async function getLatestEpisode() {
    setRunning(true);
    setStatus("");
    setOutputText("");

    try {
      const res = await fetch("/api/summarize-pods", { method: "POST" });

      // More robust: if server ever returns non-JSON, you’ll see it
      const raw = await res.text();
      let data: ApiResult;
      try {
        data = JSON.parse(raw) as ApiResult;
      } catch {
        setStatus(`Server returned non-JSON (status=${res.status}).\n\n${raw}`);
        return;
      }

      if (!res.ok || !data.ok) {
        setStatus(`Python failed (code=${data.code}).\n${data.stderr || data.stdout}`);
        return;
      }

      setOutputText(String(data.stdout ?? "").trim());
    } catch (e) {
      setStatus(`Request failed.\n${String(e)}`);
    } finally {
      setRunning(false);
    }
  }

  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;
    void getLatestEpisode();
  }, []);

  const displayText =
    outputText || (running ? "Running..." : status ? status : "No output yet.");

  return (
    <div className={`absolute bottom-0 left-0 z-10 h-[300px] w-[500px] ${className ?? ""}`}>
      {/*<MagicCard
        className="w-full max-w-md"
        gradientSize={320}
        gradientOpacity={0.9}
        gradientColor="#0b2878ff"
        gradientFrom="#22d3ee"
        gradientTo="#a78bfa"
      >
        <div className="flex h-full w-full items-center justify-center p-10 text-center">
          <pre className="text-white whitespace-pre-wrap">{displayText}</pre>

        </div>
      </MagicCard>*/}
        
        <Card>
          <CardHeader>
            <CardTitle>12/15/25</CardTitle>
            <CardAction></CardAction>
          </CardHeader>
          <CardContent>
            <TypingAnimation>{displayText}</TypingAnimation>
          </CardContent>
  
        </Card>
      
    </div>
  );
}
