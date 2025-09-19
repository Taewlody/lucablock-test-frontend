"use client";

import { useMemo, useState } from "react";

function thb(n: number) {
  return new Intl.NumberFormat("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

export default function PriceVatCard({
  unitPrice,          // per piece (exclude VAT)
  qty,
  vatRate = 7,        // %
  defaultMode = "ex", // "ex" = exclude VAT, "inc" = include VAT
}: {
  unitPrice: number;
  qty: number;
  vatRate?: number;
  defaultMode?: "ex" | "inc";
}) {
  const [mode, setMode] = useState<"ex" | "inc">(defaultMode);

  const unit = useMemo(
    () => (mode === "inc" ? unitPrice * (1 + vatRate / 100) : unitPrice),
    [mode, unitPrice, vatRate]
  );
  const total = unit * qty;

  return (
    <div className="">
      {/* segmented control */}
      <div className="flex justify-center">
        <div className="rounded-full bg-zinc-100 p-1">
          <div className="grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() => setMode("ex")}
              aria-pressed={mode === "ex"}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                mode === "ex" ? "bg-white text-zinc-900 shadow" : "text-zinc-500 hover:text-zinc-800",
              ].join(" ")}
            >
              ไม่รวมภาษีมูลค่าเพิ่ม
            </button>
            <button
              type="button"
              onClick={() => setMode("inc")}
              aria-pressed={mode === "inc"}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                mode === "inc" ? "bg-white text-zinc-900 shadow" : "text-zinc-500 hover:text-zinc-800",
              ].join(" ")}
            >
              รวมภาษีมูลค่าเพิ่ม
            </button>
          </div>
        </div>
      </div>

      {/* price */}
      <div className="mt-4 text-center">
        <div className="text-3xl font-extrabold">฿{thb(total)}</div>
        <div className="mt-1 text-xs text-zinc-500">฿{thb(unit)} × {qty} psc</div>
      </div>
    </div>
  );
}
