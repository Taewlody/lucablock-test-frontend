"use client";

import { useEffect, useRef, useState } from "react";

// define the custom element on the client
export default function BoxViewer() {
  const ref = useRef<any>(null);
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    // dynamically import so SSR doesn't try to run it
    import("@google/model-viewer");
  }, []);

  // scrub animation by setting currentTime
  useEffect(() => {
    const mv = ref.current;
    if (!mv) return;
    const name = mv.animationName || mv.availableAnimations?.[0];
    if (!name) return;

    // ensure an animation is selected and paused while scrubbing
    mv.animationName = name;
    mv.pause();

    const duration = mv.duration ?? 1; // seconds
    mv.currentTime = progress * duration;
  }, [progress]);

  return (
    <div>
      {/* @ts-ignore custom element */}
      <model-viewer
        ref={ref}
        src="/models/box.glb"              // GLB with an “open/close” animation
        camera-controls
        shadow-intensity="1"
        exposure="1"
        style={{ width: "100%", height: "65vh" }}
        autoplay                              // optional if you want it to play
        disable-zoom="false"
      />

      {/* toolbar: open/close scrub + zoom% (simple example) */}
      <div className="mt-3 flex items-center gap-3 rounded-2xl border border-[#eee] bg-white px-3 py-2 text-sm shadow-sm justify-center">
        <span className="rounded-md bg-zinc-900 px-2 py-1 font-medium text-white">3D</span>
        <span className="text-zinc-600">Close</span>
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(progress * 100)}
          onChange={(e) => setProgress(Number(e.target.value) / 100)}
          className="h-1 w-40 accent-[#0050FF]"
        />
        <span className="text-zinc-600">Open</span>
      </div>
    </div>
  );
}
