"use client";
import { useState } from "react";

export default function Accordion() {
  const [open, setOpen] = useState(false);
  const id = "simple-accordion-1";

  return (
    <div className="border border-[#eee] rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-3 bg-gray-100 px-4 py-3 text-left"
      >
        <span className="font-medium">หัวข้อ</span>
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24" fill="none"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div id={id} role="region" aria-labelledby={id} className="px-4 py-3">
          <p className="text-sm text-zinc-600">เนื้อหาแอคคอร์เดียนแบบง่าย ๆ</p>
        </div>
      )}
    </div>
  );
}
