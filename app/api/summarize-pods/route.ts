import { NextResponse } from "next/server";
import { spawn } from "child_process";

export const runtime = "nodejs";

export async function POST() {
  const result = await new Promise<{
    ok: boolean;
    code: number | null;
    stdout: string;
    stderr: string;
  }>((resolve) => {
    const p = spawn("python3", ["scripts/summarize.py"], {
      cwd: process.cwd(),
      env: process.env,
    });

    let stdout = "";
    let stderr = "";

    p.stdout.on("data", (d) => (stdout += d.toString()));
    p.stderr.on("data", (d) => (stderr += d.toString()));

    p.on("close", (code) => {
      resolve({
        ok: code === 0,
        code,
        stdout,
        stderr,
      });
    });
  });

  return NextResponse.json(result, { status: result.ok ? 200 : 500 });
}
