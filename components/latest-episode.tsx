"use client";

import { useMemo, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { todayLA } from "@/lib/dates";

type Props = {
  className?: string;
};

export default function LatestEpisodePlayer({ className }: Props) {
  const dateStr = useMemo(() => todayLA(), []);
  const [cacheBust, setCacheBust] = useState<number>(Date.now());
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState<string>("");

  const mp3Url = `/episodes/bbc/${dateStr}.mp3?t=${cacheBust}`;

  async function getLatestEpisode() {
    setRunning(true);
    setStatus('');

    try {
      const res = await fetch("/api/get-latest", { method: "POST" });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus(`Python failed (code=${data.code}).\n${data.stderr || data.stdout}`);
        return;
      }

      setCacheBust(Date.now());
      setStatus(`Podcast Loaded`);
    } catch (e: any) {
      setStatus('Something hapened');
    } finally {
      setRunning(false);
    }
  }

return (
  <div className={className}>
    
    <div className="flex justify-center">
      <button
        onClick={getLatestEpisode}
        disabled={running}
        className="w-full max-w-sm rounded-xl bg-zinc-900 px-4 py-2 font-medium text-zinc-50 shadow disabled:cursor-not-allowed disabled:opacity-60"
      >
        {running ? "Searching..." : "Get the latest stories"}
      </button>
    </div>

    <div className="mt-4 w-full">
      <AudioPlayer src={mp3Url} autoPlay={false} />
    </div>

    {status && (
      <pre className="mt-3 whitespace-pre-wrap text-center text-sm text-zinc-200/90">
        {status}
      </pre>
    )}
  </div>
);

}
