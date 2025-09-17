"use client";

import Image from "next/image";

export default function Footer({ fixedOffset = 0 }: { fixedOffset?: number }) {
  return (
    
    <footer
      className="border-t border-[#eee] bg-black text-white"
      style={{ paddingBottom: fixedOffset }} // เว้นที่เผื่อมี sticky bar ล่าง
    >
      <div className="mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand / summary */}
          <div className="md:col-span-4">
            <div className="flex text-[36px] font-bold lex items-center gap-4">
              <Image src="/images/logo.png" alt="Lucablock logo" width={23} height={40} priority /> Lucablock
            </div>
            <p className="mt-3 text-[14px] text-white">
              ผลิตจากโรงพิมพ์ระบบอัตโนมัติ In-Houseไม่ต้องใช้ทีมกราฟิก<br/>
              ไม่ต้องรอเซลล์สั่งผลิตตั้งแต่ 1 ใบ จนถึงระดับองค์กร
            </p>

            <div className="flex gap-6 mt-4">
              <Image src="/images/iso.png" alt="iso" width={60} height={60} />
              <Image src="/images/gmp.png" alt="gmp" width={60} height={60} />
              <Image src="/images/dbd.png" alt="dbd" width={179} height={40} className="h-[40px] self-center" />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[24px] font-bold text-[#0050FF]">ติดต่อเรา</div>
            <div className="text-white text-[14px] mt-4 leading-8">
              เวลาทำการ: 9:30am - 6:30pm <br/>
              โทร. 02  339  5436 <br/>
              LINE: @Digiboxs <br/>
              อีเมล: Digiboxs@gmail.com <br/>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[24px] font-bold text-[#0050FF]">เกี่ยวกับเรา</div>
            <div className="text-white text-[14px] mt-4 leading-8">
              <ul className="list-disc list-inside">
                <li>โรงพิมพ์ของเรา</li>
                <li>มาตรฐาน ISO 9001</li>
                <li>มาตรฐาน ISO 9100</li>
                <li>มาตรฐาน GMP</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[24px] font-bold text-[#0050FF]">สินค้า</div>
            <div className="text-white text-[14px] mt-4 leading-8">
              <ul className="list-disc list-inside">
                <li>นามบัตร</li>
                <li>บรรจุภัณฑ์</li>
                <li>สติ๊กเกอร์</li>
                <li>ใบปลิว/แผ่นพับ</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="text-[24px] font-bold text-[#0050FF]">การช่วยเหลือ</div>
            <div className="text-white text-[14px] mt-4 leading-8">
              <ul className="list-disc list-inside">
                <li>วิธีการสั่งซื้อ</li>
                <li>คำถามที่พบบ่อย</li>
                <li>Dieline templates</li>
                <li>Virtual 3D models</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#757575] pt-6 text-[14px] text-white md:flex-row">
          <div>© Lucablock. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="/cookie" className="underline">Cookie</a>
            <a href="/terms" className="underline">Terms</a>
            <a href="/privacy" className="underline">Privacy</a>
          </div>
          <div>© Lucablock. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}