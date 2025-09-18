type PageProps = { params: { id: string } };
import Image from "next/image";
import { Download, Pencil, Trash2 } from "lucide-react";

export default async function Cart({ params }: PageProps) {

    return (
        <section className="mx-auto max-w-[1200px] p-4">
            <div className="flex text-[40px] font-bold item-center">
                <Image className="mr-2" src="/icons/shopping_cart_black.svg" alt="" width={40} height={40} aria-hidden="true"/> 
                รถเข็น : 2
            </div>

            <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-12 mt-6">
                <div className="md:col-span-8 rounded-lg">
                    <div className="flex gap-2">
                        <input type="checkbox" className="mt-3 h-6 w-6" />
                        
                        <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm">
                            <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-12">
                                <div className="md:col-span-2">
                                    <div className="rounded-xl overflow-hidden">
                                        <div className="relative h-[90px] w-[90px]">
                                            <Image
                                                src="/images/product.png"
                                                alt="ตัวอย่างสินค้า"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-7">
                                    <div className="text-[24px] font-bold">Folding Carton (Reverse Tuck End)</div>
                                    <div className="text-[12px]">ขนาด 80x80x150 mm, อาร์ตมัน 300 แกรม, พิมพ์ ด้านนอก, ไม่เคลือบ, ไม่มีเทคนิคพิเศษ</div>
                                    <div className="flex h-[24px] mt-3 gap-1">
                                        <button type="button" className="inline-flex rounded-lg border border-[#EEEEEE] items-center justify-between p-3 text-[12px]">รายละเอียด</button>
                                        <button></button>
                                        <button type="button" className="inline-flex rounded-lg border border-[#EEEEEE] items-center justify-between p-3 text-[#0050FF] text-[12px] bg-[#EEF3FF]">฿1.20 /ชิ้น</button>
                                        <button type="button" className="inline-flex rounded-lg border border-[#EEEEEE] items-center justify-between p-3">
                                            <Pencil width={12} height={12}/>
                                        </button>
                                        <button type="button" className="inline-flex rounded-lg border border-[#EEEEEE] items-center justify-between p-3">
                                            <Trash2 width={12} height={12}/>
                                        </button>
                                        <button type="button" className="inline-flex rounded-lg border border-[#EEEEEE] items-center justify-between p-3">...</button>
                                    </div>
                                </div>
                                <div className="md:col-span-3 text-end">
                                    <div className="text-[24px] font-bold text-[#0050FF]">฿1,500.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-4">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
                        <span className="text-[24px] font-bold">Checkout</span>
                        <button
                            type="button"
                            className="inline-flex rounded-lg border border-[#EEEEEE] items-center justify-between p-3 text-[#0050FF] text-[14px] font-bold h-[32px]"
                        >
                            <Download className="mr-2"/>
                            ดาวน์โหลดใบเสนอราคา
                        </button>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="text-[14px]">
                            <span>การสั่งซื้อ </span><span className="text-[#0050FF]">2 รายการ</span>
                        </div>
                        <div className="font-bold">
                            3,000.00
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="text-[14px]">
                            รวมค่าจัดส่ง
                        </div>
                        <div className="font-bold">
                            120.00
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="text-[14px]">
                            ภาษีมูลค่าเพิ่ม 7%
                        </div>
                        <div className="font-bold">
                            31.25
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="text-[14px]">
                            รวมทั้งหมด
                        </div>
                        <div className="font-bold">
                            3,151.25
                        </div>
                    </div>
                    <hr className="my-6 border-t border-[#eee]" />
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between my-4">
                        <div className="text-[14px] font-bold flex items-center gap-2">
                           <Image
                                src="/icons/confirmation_number.svg"
                                alt="ตัวอย่างสินค้า"
                                height={24}
                                width={24}
                            /> 
                            โค้ดส่วนลดของ Digiboxs
                        </div>
                        <div className="font-bold text-[#0050FF] text-[14px]">
                            กดใช้โค้ด
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between rounded-lg bg-[#F5F5F5] p-4 shadow-sm h-[32px] mb-2">
                        <div className="text-[14px] flex items-center gap-2">
                            คูปองลดสินค้า • ส่วนลด 10% ลดสูงสุด 300฿
                        </div>
                        <div className="text-[#D32F2F] text-[14px]">
                            - 300.00
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between rounded-lg bg-[#F5F5F5] p-4 shadow-sm h-[32px] mb-2">
                        <div className="text-[14px] flex items-center gap-2">
                            คูปองลดค่าบริการ • ส่งฟรี
                        </div>
                        <div className="text-[#D32F2F] text-[14px]">
                            - 100.00
                        </div>
                    </div>
                    <div className="md:items-center md:justify-between rounded-lg bg-[#F5F5F5] p-4 shadow-sm text-center h-[91px] align-center">
                        <div className="text-[12px]">
                            ยอดชำระเงินทั้งหมด
                        </div>
                        <div className="text-[24px] font-bold">
                            ฿3,124.62
                        </div>
                    </div>
                    <div className="md:items-center md:justify-between mt-4">
                        <button type="button" className="rounded-lg items-center justify-between p-3 text-[14px] font-bold bg-[#0050FF] text-white w-full">
                            Checkout (2)
                        </button>
                    </div>

                    <div className="text-[10px] text-center my-6">
                        เงื่อนไขการบริการ    |    นโยบายความเป็นส่วนตัว    |    วิธีสั่งซื้อสินค้า
                    </div>

                    <div className="text-center text-[12px]">
                        ชำระเงินสำหรับคำสั่งซื้อและอัพโหลดไฟล์อาร์ตเวิร์คของคุณก่อน<br/>
                        วันพุธที่ 18 มิถุนายน 2568 เวลา 12:30:00 การชำระเงินล่าช้า และ/หรือ <br/>อัพโหลดไฟล์อาร์ตเวิร์คล่าช้า อาจส่งผลให้การสั่งซื้อของคุณล่าช้า
                    </div>
                </div>
            </div>
        </section>
    )
}