"use client";

import { usePathname } from "next/navigation";
import { MoveLeft } from "lucide-react";


export default function SubNavBar({ fixedOffset = 0 }: { fixedOffset?: number }) {
  const pathname = usePathname();

  return (
    <nav className="z-40 border-b border-[#eee] bg-white/70 backdrop-blur">
      <div className="mx-auto px-4">
      
        <div className="grid h-[72px] grid-cols-[1fr_auto_1fr] items-center">
          
          <div className="flex gap-2 justify-self-start">
            <button className="inline-flex items-center justify-center rounded-md border border-[#eee] px-2 py-2">
              <MoveLeft /> กลับ
            </button>
            <button className="inline-flex items-center justify-center rounded-md border border-[#eee] px-4 py-2">
              สินค้าทั้งหมด
            </button>
          </div>

        
          <div className="justify-self-center text-center font-bold text-[24px]">
            <span>Tuck end box</span>
          </div>

          
          <div className="flex items-center gap-4 justify-self-end">
            
          </div>
        </div>
      </div>
    </nav>

  );
}
