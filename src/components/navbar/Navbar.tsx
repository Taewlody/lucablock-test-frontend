"use client";

import { useState } from "react";
import NavLink from "./NavLink";
import { Search, ShoppingCart, CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="mx-auto px-4">
        <div className="flex h-[72px] items-center justify-between">

            <Link href="/" className="flex items-center gap-4 font-bold text-[24px] leading-none">
                <Image src="/images/logo.png" alt="Lucablock logo" width={23} height={40} priority />
                <span>Lucablock</span>
            </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6 text-[14px]">
            <NavLink href="/">หน้าหลัก</NavLink>
            <NavLink href="/">เกี่ยวกับเรา</NavLink>
            <NavLink href="/">สินค้า</NavLink>
            <NavLink href="/">บทความ</NavLink>
            <NavLink href="/">โปรโมชั่น</NavLink>
            <NavLink href="/">คูปองส่วนลด</NavLink>
            <NavLink href="/">สินค้าลดราคา</NavLink>
            <NavLink href="/">ดาวน์โหลด</NavLink>
            <NavLink href="/">3D models</NavLink>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <NavLink href="/"><Search className="" aria-hidden="true" /></NavLink>
            <NavLink href="/"><ShoppingCart className="" aria-hidden="true" /></NavLink>
            <NavLink href="/"><CircleUserRound className="" aria-hidden="true" /></NavLink>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 focus:outline-none"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
          >
            {/* ไอคอนแบบง่าย ๆ */}
            <span className="sr-only">Open main menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-white/10">
          <div className="space-y-1 px-4 py-3">
            <NavLink href="/">หน้าหลัก</NavLink>
          </div>
          <div className="space-y-1 px-4 py-3">
            <NavLink href="/">สินค้า</NavLink>
          </div>
          <div className="space-y-1 px-4 py-3">
            <NavLink href="/">บทความ</NavLink>
          </div>
          <div className="space-y-1 px-4 py-3">
            <NavLink href="/">โปรโมชั่น</NavLink>
          </div>
          <div className="space-y-1 px-4 py-3">
            <NavLink href="/">คูปองส่วนลด</NavLink>
          </div>
          <div className="space-y-1 px-4 py-3">
            <NavLink href="/">สินค้าลดราคา</NavLink>
          </div>
          <div className="space-y-1 px-4 py-3">
            <NavLink href="/">ดาวน์โหลด</NavLink>
          </div>
          <div className="space-y-1 px-4 py-3">
            <NavLink href="/">3D models</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
