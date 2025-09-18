import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Image from "next/image";
import Link from "next/link";
import { ImageIcon } from "lucide-react";

type PageProps = { params: { id: string } };

export async function generateMetadata({ params }: PageProps) {
  return { title: `Product ${params.id}` };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = params;

  return (
    <section className="bg-[#eee] p-6">
      <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-7 rounded-lg">เนื้อหาหลัก</div>

        <div className="md:col-span-5">
          <div className="flex flex-col gap-4">
            <Accordion>
                <AccordionItem title={
                    <div className="grid grid-cols-12 text-[14px]">
                        <div className="col-span-4 font-bold">สินค้า</div>
                        <div className="col-span-8 text-end">
                        Folding Carton (Straight Tuck End)
                        </div>
                    </div>
                } defaultOpen>
                    <div className="relative rounded-lg overflow-hidden">
                    <div className="mt-4 grid grid-cols-1 gap-2 text-[14px] md:grid-cols-12">
                        <div className="col-span-12 lg:col-span-3">
                        <div className="rounded-xl overflow-hidden">
                            <div className="relative h-[122px]">
                            <Image
                                src="/images/product.png"
                                alt="ตัวอย่างสินค้า"
                                fill
                                className="object-cover"
                            />
                            </div>
                        </div>
                        <div className="mt-2 text-center text-[14px]">
                            Straight Tuck End
                        </div>
                        </div>
                    </div>
                    </div>
                </AccordionItem>
            </Accordion>

            <Accordion>
                <AccordionItem title={
                    <div className="grid grid-cols-12 text-[14px]">
                        <div className="col-span-4 font-bold">ขนาด</div>
                        <div className="col-span-8 text-end">
                        80 x 80 x 150 mm (A5)
                        </div>
                    </div>
                }>
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="mt-4 grid grid-cols-1 gap-2 text-[14px] md:grid-cols-12">
                            
                        
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>

            <Accordion>
                <AccordionItem title={
                    <div className="grid grid-cols-12 text-[14px]">
                        <div className="col-span-4 font-bold">วัสดุ</div>
                        <div className="col-span-8 text-end">
                            กระดาษอาร์ตการ์ด 1 หน้า 300 แกรม
                        </div>
                    </div>
                }>
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="mt-4 grid grid-cols-1 gap-2 text-[14px] md:grid-cols-12">
                            
                        
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>

            <Accordion>
                <AccordionItem title={
                    <div className="grid grid-cols-12 text-[14px]">
                        <div className="col-span-4 font-bold">การพิมพ์</div>
                        <div className="col-span-8 text-end">
                            ด้านหน้า CMYK
                        </div>
                    </div>
                }>
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="mt-4 grid grid-cols-1 gap-2 text-[14px] md:grid-cols-12">
                            
                        
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>

            <Accordion>
                <AccordionItem title={
                    <div className="grid grid-cols-12 text-[14px]">
                        <div className="col-span-4 font-bold">Artwork</div>
                        <div className="col-span-8 text-end">
                            บรรจุภัณฑ์ไมมีการพิมพ์
                        </div>
                    </div>
                }>
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="mt-4 grid grid-cols-1 gap-2 text-[14px] md:grid-cols-12">
                            
                        
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>

            <Accordion>
                <AccordionItem title={
                    <div className="grid grid-cols-12 text-[14px]">
                        <div className="col-span-4 font-bold">เคลือบ</div>
                        <div className="col-span-8 text-end">
                            ไม่เคลือบ
                        </div>
                    </div>
                }>
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="mt-4 grid grid-cols-1 gap-2 text-[14px] md:grid-cols-12">
                            
                        
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>

            <Accordion>
                <AccordionItem title={
                    <div className="grid grid-cols-12 text-[14px]">
                        <div className="col-span-4 font-bold">เทคนิคพิเศษ</div>
                        <div className="col-span-8 text-end">
                            ไม่มี
                        </div>
                    </div>
                }>
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="mt-4 grid grid-cols-1 gap-2 text-[14px] md:grid-cols-12">
                            
                        
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>

            <Accordion>
                <AccordionItem title={
                    <div className="grid grid-cols-12 text-[14px]">
                        <div className="col-span-4 font-bold">จำนวน</div>
                        <div className="col-span-8 text-end">
                            100 ชิ้น (฿124.62/ชิ้น)
                        </div>
                    </div>
                }>
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="mt-4 grid grid-cols-1 gap-2 text-[14px] md:grid-cols-12">
                            
                        
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>

            <Accordion>
                <AccordionItem title={
                    <div className="grid grid-cols-12 text-[14px]">
                        <div className="col-span-4 font-bold">ตัวอย่างสินค้า</div>
                        <div className="col-span-8 text-end">
                            Soft and Online Proof
                        </div>
                    </div>
                }>
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="mt-4 grid grid-cols-1 gap-2 text-[14px] md:grid-cols-12">
                            
                        
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>

            <Accordion>
                <AccordionItem title={
                    <div className="grid grid-cols-12 text-[14px]">
                        <div className="col-span-4 font-bold">การรับสินค้า</div>
                        <div className="col-span-8 text-end">
                            รับสินค้าด้วยตัวเอง
                        </div>
                    </div>
                }>
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="mt-4 grid grid-cols-1 gap-2 text-[14px] md:grid-cols-12">
                            
                        
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>

            <Accordion>
                <AccordionItem title={
                    <div className="grid grid-cols-12 text-[14px]">
                        <div className="col-span-4 font-bold">ระยะเวลาการผลิต</div>
                        <div className="col-span-8 text-end">
                            มาตรฐาน (จัดส่ง 12 ก.ค.)
                        </div>
                    </div>
                }>
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="mt-4 grid grid-cols-1 gap-2 text-[14px] md:grid-cols-12">
                            
                        
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>

            <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm text-[12px]">
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-3 flex flex-col items-center text-center">
                    <Image className="mr-2" src="/icons/forum.svg" alt="" width={40} height={40} aria-hidden="true"/> 
                    <div className="text[12px] mt-2">ปรึกษากับทีมงาน<br/>ผู้เชี่ยวชาญ</div>
                </div>
                <div className="col-span-12 md:col-span-3 flex flex-col items-center text-center">
                    <Image className="mr-2" src="/icons/editor_choice.svg" alt="" width={40} height={40} aria-hidden="true"/> 
                    <div className="text[12px] mt-2">วัสดุคุณภาพผลิต<br/>ด้วยผู้เชี่ยวชาญ</div>
                </div>
                <div className="col-span-12 md:col-span-3 flex flex-col items-center text-center">
                    <Image className="mr-2" src="/icons/deployed_code_account.svg" alt="" width={40} height={40} aria-hidden="true"/> 
                    <div className="text[12px] mt-2">เห็นตัวอย่างก่อน<br/>ก่อนสั่งผลิต</div>
                </div>
                <div className="col-span-12 md:col-span-3 flex flex-col items-center text-center">
                    <Image className="mr-2" src="/icons/request_quote.svg" alt="" width={40} height={40} aria-hidden="true"/> 
                    <div className="text[12px] mt-2">ปรับแต่งสเปคเพื่อ<br/>ได้ราคาที่ต้องการ</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm text-[12px]">
              <div className="grid grid-cols-1 md:grid-cols-12">

              </div>
            </div>

            {/* Sticky bar */}
            <div className="sticky bottom-12 z-10 w-[95%] self-center md:bottom-6">
              <div className="rounded-xl border border-[#eee] bg-black p-5 text-white shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="col-span-12 md:col-span-6">
                    <div className="font-bold text-[24px]">฿100.00</div>
                    <div className="text-[12px]">
                      จำนวน 100 ชิ้น (3.25 บาท/ชิ้น)
                    </div>
                  </div>
                  <div className="col-span-12 text-end md:col-span-6 content-center">
                    {/* ✅ Use Link styled like a button */}
                    <Link
                      href="/carts"
                      prefetch
                      className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white"
                    >
                      เพิ่มไปยังรถเข็น
                      <Image
                        src="/icons/shopping_cart.svg"
                        alt=""
                        width={20}
                        height={20}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Sticky bar */}
          </div>
        </div>
      </div>
    </section>
  );
}
