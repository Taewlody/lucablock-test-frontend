"use client";

import { useState } from "react";
import Image from "next/image";

export default function SizeTabs() {
  const [tab, setTab] = useState<"standard" | "custom">("standard");

  return (
    <div className="space-y-3">
      {/* Segmented control */}
      <div className="rounded-full bg-zinc-100 p-1">
        <div className="grid grid-cols-2 gap-1">
          <button
            type="button"
            aria-selected={tab === "standard"}
            onClick={() => setTab("standard")}
            className={[
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              tab === "standard"
                ? "bg-white text-zinc-900 shadow"
                : "text-zinc-500 hover:text-zinc-800",
            ].join(" ")}
          >
            มาตรฐาน
          </button>
          <button
            type="button"
            aria-selected={tab === "custom"}
            onClick={() => setTab("custom")}
            className={[
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              tab === "custom"
                ? "bg-white text-zinc-900 shadow"
                : "text-zinc-500 hover:text-zinc-800",
            ].join(" ")}
          >
            กำหนดเอง
          </button>
        </div>
      </div>

      {/* Panels */}
      {tab === "standard" ? (
        <div className="rounded-xl border border-[#eee] bg-white p-2 shadow-sm">
          <div className="flex items-center justify-between gap-4 pr-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                <Image src="/images/size.png" alt="" fill className="object-contain p-2" />
              </div>
              <div>
                <div className="text-[24px] font-bold leading-tight">80 × 80 × 150 mm</div>
                <div className="text-[12px]">ขนาดมาตรฐาน A5</div>
              </div>
            </div>
            <Image src="/icons/apps.svg" alt="app" width={24} height={24}/>
          </div>
        </div>
      ) : (
        <div className="bg-white p-4">
          <div className="grid grid-cols-3 gap-2">
            <label className="block">
              <span className="sr-only">Width (mm)</span>

              <div className="group flex items-center gap-3 rounded-lg border border-[#eee] bg-white px-3 py-2 focus-within:border-[#0050FF] focus-within:ring-2 focus-within:ring-[#0050FF]/20">
                <span className="font-bold text-orange-500">W</span>

                <div
                  aria-hidden
                  className="mx-0 w-px self-stretch shrink-0 bg-[#eee]"
                />
                
                <input
                  type="number"
                  min={20}
                  defaultValue={80}
                  inputMode="numeric"
                  className="flex-1 bg-transparent outline-none text-[16px] appearance-none"
                  aria-label="Width in millimeters"
                />
                <span className="text-xs text-zinc-400">mm</span>
              </div>
              <div className="mt-2 text-[10px] text-[#BDBDBD]">Width: Min 20 mm</div>

            </label>

            <label className="block">
              <span className="sr-only">Width (mm)</span>

              <div className="group flex items-center gap-3 rounded-lg border border-[#eee] bg-white px-3 py-2 focus-within:border-[#0050FF] focus-within:ring-2 focus-within:ring-[#0050FF]/20">
                <span className="font-bold text-blue-500">L</span>

                <div
                  aria-hidden
                  className="mx-0 w-px self-stretch shrink-0 bg-[#eee]"
                />

                <input
                  type="number"
                  min={20}
                  defaultValue={80}
                  inputMode="numeric"
                  className="flex-1 bg-transparent outline-none text-[16px] appearance-none"
                  aria-label="Width in millimeters"
                />
                <span className="text-xs text-zinc-400">mm</span>
              </div>
              <div className="mt-2 text-[10px] text-[#BDBDBD]">Width: Min 20 mm</div>

            </label>

            <label className="block">
              <span className="sr-only">Width (mm)</span>

              <div className="group flex items-center gap-3 rounded-lg border border-[#eee] bg-white px-3 py-2 focus-within:border-[#0050FF] focus-within:ring-2 focus-within:ring-[#0050FF]/20">
                <span className="font-bold text-green-500">H</span>

                <div
                  aria-hidden
                  className="mx-0 w-px self-stretch shrink-0 bg-[#eee]"
                />

                <input
                  type="number"
                  min={20}
                  defaultValue={80}
                  inputMode="numeric"
                  className="flex-1 bg-transparent outline-none text-[16px] appearance-none"
                  aria-label="Width in millimeters"
                />
                <span className="text-xs text-zinc-400">mm</span>
              </div>
              <div className="mt-2 text-[10px] text-[#BDBDBD]">Width: Min 20 mm</div>

            </label>
          </div>
        </div>
      )}
    </div>
  );
}
