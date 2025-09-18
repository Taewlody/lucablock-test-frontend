"use client";
import { useState } from "react";

export default function Accordion({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-xl border border-[#eee]">
        <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 bg-white px-4 py-3 text-left"
        >
            <div className="flex-1 min-w-0">{title}</div>
            
        </button>

        
        <div className={`overflow-hidden transition-[max-height] duration-300 ease-out bg-white ${open ? "max-h-[1000px]" : "max-h-0"}`}>
            <div className="px-4 py-3">
                {children}
            </div>
        </div>
    </div>
  );
}
