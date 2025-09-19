"use client";

import React, { useState } from 'react';

import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Image from "next/image";
import Link from "next/link";
import { Download, Plus } from "lucide-react";
import SizeTabs from "@/components/SizeTabs";
import PriceVatCard from "@/components/PriceVatCard";
import BoxViewer from "@/components/BoxViewer";

type PageProps = { params: { id: string } };

// export async function generateMetadata({ params }: PageProps) {
//   return { title: `Product ${params.id}` };
// }

export default function ProductPage({ params }: PageProps) {
//   const { id } = params;

    const [selectedOption, setSelectedOption] = useState('option1'); // Initial selected value

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const OPTIONS = [
        { id: "straight", title: "Straight Tuck End", image: "/images/product.png" },
        { id: "reverse", title: "Reverse Tuck End", image: "/images/product.png" },
        { id: "mailer", title: "Mailer Box", image: "/images/product.png" },
        { id: "sleeve", title: "Sleeve", image: "/images/product.png" },
    ];

    const MATERIAL = [
        { id: "art300", title: "อาร์ตมัน 300 แกรม", detail: '300 gsm | 0.345 mm', image: "/images/material_art.png" },
        { id: "art250", title: "อาร์ตมัน 250 แกรม", detail: '350 gsm | 0.415 mm', image: "/images/material_art.png" },
        { id: "kraft", title: "Kraft / Kraft 230", detail: '230 gsm | 0.445 mm', image: "/images/material_kraft.png" },
        { id: "eflute", title: "E-flute + white SBS", detail: '~1.7 mm', image: "/images/material_eflute.png" },
    ];

    const PRINT = [
        { id: "nonePrint", title: "ไม่พิมพ์", detail: 'บรรจุภัณฑ์ไมมีการพิมพ์', image: "/images/none_print.png" },
        { id: "colorPrint", title: "พิมพ์ 4 สี", detail: 'บรรจุภัณฑ์พิมพ์ 4 สี ด้านอกเท่านั้น', image: "/images/color_print.png" },
    ];

    const COAT = [
        { id: "noneCoat", title: "ไม่เคลือบ", detail: 'บรรจุภัณฑ์ไมมีการเคลือบ', image: "/images/none_coat.png" },
        { id: "outCoat", title: "เคลือบด้านนอก", detail: 'บรรจุภัณฑ์เคลือบด้านนอกเท่านั้น', image: "/images/out_coat.png" },
    ];

    const TECHNIQUE = [
        { id: "noneTech", title: "ไม่มี", detail: 'บรรจุภัณฑ์ไมมีเทคนิคพิเศษ', image: "/images/none_tech.png" },
        { id: "tech", title: "มีเทคนิคพิเศษ", detail: 'สร้างความรู้สึกให้กับบรรจุภัณฑ์ของคุณ', image: "/images/tech.png" },
    ];

    const EXAMPLE = [
        { id: "online", title: "Soft and Online Proof", detail: 'ส่งลิงก์ไฟล์ PDF และ คลิปVDO ตัวอย่างสินค้า ให้ตรวจสอบก่อนพิมพ์', price: '฿0.00', image: "/images/online.png" },
        { id: "mockup", title: "Mockup Proof", detail: 'ส่งตัวอย่างสินค้า, ลิงก์ไฟล์ PDF และ คลิปVDO ให้ตรวจสอบก่อนพิมพ์ ระยะเวลาขึ้น Mockup 1 - 2 วัน (รวมค่าจัดส่ง)', price: '฿300.00', image: "/images/material_art.png" },
    ];

    return (
    <section className="bg-[#eee] p-6">
      <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-7">
            <BoxViewer />
        </div>

        <div className="md:col-span-5">
          <div className="flex flex-col gap-4">
            {/* สินค้า */}
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
                        <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm mb-4 p-2">
                            <div className="flex items-center justify-between gap-3 pr-4">
                                <div className="flex items-center gap-6">
                                    <Image src="/images/typeA.png" alt="type" width={64} height={64} />
                                    <div className="leading-tight">
                                    <span className="text-[24px] font-bold">Tuck end box</span><br/>
                                    <span className="text-[12px]">บรรจุภัณฑ์</span>
                                    </div>
                                </div>

                                <Image src="/icons/apps.svg" alt="app" width={24} height={24}/>
                            </div>
                        </div>
                        
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                                {OPTIONS.map(o => (
                                <label key={o.id} className="block cursor-pointer select-none">
                                    <input
                                    type="radio"
                                    name="productType"
                                    value={o.id}
                                    className="peer sr-only"
                                    // onChange={(e) => setSelectedOption(e.target.value)}
                                    />
                                    <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] peer-checked:ring-[#0050FF] ">
                                        <div className="relative h-[122px]">
                                            <Image src={o.image} alt={o.title} fill className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="mt-2 text-center text-[14px] peer-checked:text-[#0050FF]">{o.title}</div>
                                </label>
                                ))}
                            </div>
                    

                    </div>
                </AccordionItem>
            </Accordion>

            {/* ขนาด */}
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
                        <SizeTabs />
                    </div>
                </AccordionItem>
            </Accordion>

            {/* วัสดุ */}
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
                        <div className="col-span-12"> 
                            <div className="grid grid-cols-2 gap-3">
                                {MATERIAL.map(o => (
                                <label key={o.id} className="block cursor-pointer select-none">
                                    <input type="radio" name="material" value={o.id} className="peer sr-only" />
                                    <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] peer-checked:ring-[#0050FF] p-2 peer-checked:bg-[#EEF3FF]">
                                        <div className="flex items-center gap-2">
                                            <Image  src={o.image} alt={o.title} width={48} height={48} />
                                            <div>
                                                <span className="text-[14px]">{o.title}</span><br/> 
                                                <span className="text-[10px] text-[#9E9E9E]">{o.detail}</span>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                ))}
                            </div>
                        </div>

                    </div>
                </AccordionItem>
            </Accordion>

            {/* การพิมพ์ */}
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
                        <div className="col-span-12"> 
                            <div className="grid grid-cols-2 gap-3">
                                {PRINT.map(o => (
                                <label key={o.id} className="block cursor-pointer select-none">
                                    <input type="radio" name="printType" value={o.id} className="peer sr-only" />
                                    <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] peer-checked:ring-[#0050FF] p-2 peer-checked:bg-[#EEF3FF]">
                                        <div className="flex items-center gap-2">
                                            <Image  src={o.image} alt={o.title} width={48} height={48} />
                                            <div>
                                                <span className="text-[14px]">{o.title}</span><br/> 
                                                <span className="text-[10px] text-[#9E9E9E]">{o.detail}</span>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>
            
            {/* Artwork */}
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
                        <div className="col-span-12"> 
                            <div className="grid grid-cols-2 gap-3">
                              
                                <label className="block cursor-pointer select-none">
                                    <input type="radio" name="artworkType" value="artwork" className="peer sr-only" />
                                    <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] peer-checked:ring-[#0050FF] p-2 peer-checked:bg-[#EEF3FF]">
                                        <div className="flex items-center gap-2">
                                            <div className="leading-tight">
                                                <span className="text-[14px]">มีไฟล์อาร์ตเวิร์ก</span><br/> 
                                                <span className="text-[10px] text-[#9E9E9E]">สินค้าของคุณได้ออกแบบและมีไฟล์อาร์ตเวิร์กสำหรับส่งพิมพ์แล้ว และจะต้องส่งไฟล์ให้ทีมงานหลังจากการชำระเงิน</span>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                <label className="block cursor-pointer select-none">
                                    <input type="radio" name="artworkType" value="none_artwork" className="peer sr-only" />
                                    <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] peer-checked:ring-[#0050FF] p-2 peer-checked:bg-[#EEF3FF]">
                                        <div className="flex items-center gap-2">
                                            <div className="leading-tight">
                                                <span className="text-[14px]">ไม่ใช้ไฟล์อาร์ตเวิร์ก</span><br/> 
                                                <span className="text-[10px] text-[#9E9E9E]">สินค้าของคุณไม่มีการพิมพ์ใดๆ และใช้เพียง ไฟล์ Dieline Template สำหรับการผลิต</span>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                
                            </div>
                        </div>

                        <div>
                            <div className="text-[12px] mt-4">Dieline Template</div>
                            <div className="rounded-xl bg-[#F5F5F5] shadow-sm">
                                <div className="grid grid-cols-12 gap-3 mt-2 p-2 items-center h-[56px]">
                                    <div className="flex gap-2 col-span-8">
                                        <Image src="/images/artwork_template.png" alt="artwork template" width={40} height={40} />
                                        <div className="leading-tight">
                                            <span className="text-[14px] font-bold">Model: HPM-PK01-001A0</span><br/>
                                            <span className="text-[10px]">PDF</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 col-span-4 justify-self-end">
                                        <button
                                            type="button"
                                            className="inline-flex rounded-lg items-center justify-between p-3 text-white text-[14px] font-bold h-[40px] bg-[#0050FF]"
                                        >
                                            <Download className="mr-2"/>
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>

            {/* เคลือบ */}
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
                           
                            <div className="grid grid-cols-2 gap-3">
                                {COAT.map(o => (
                                <label key={o.id} className="block cursor-pointer select-none">
                                    <input type="radio" name="coatType" value={o.id} className="peer sr-only" />
                                    <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] peer-checked:ring-[#0050FF] p-2 peer-checked:bg-[#EEF3FF]">
                                        <div className="flex items-center gap-2">
                                            <Image  src={o.image} alt={o.title} width={48} height={48} />
                                            <div>
                                                <span className="text-[14px]">{o.title}</span><br/> 
                                                <span className="text-[10px] text-[#9E9E9E]">{o.detail}</span>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                ))}
                            </div>

                            <div className="text-[12px] mt-6 mb-2">การเคลือบ</div>
                            <div className="grid grid-cols-2 gap-3">
                                <label className="block cursor-pointer select-none">
                                    <input type="radio" name="laminateType" value="shiny" className="peer sr-only" />
                                    <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] peer-checked:ring-[#0050FF] p-2 peer-checked:bg-[#EEF3FF]">
                                        <div className="flex items-center gap-2">
                                            <Image  src="/images/shiny.png" alt="shiny" width={48} height={48} />
                                            <div>
                                                <span className="text-[14px]">ลามิเนตเงา</span><br/> 
                                                <span className="text-[10px] text-[#9E9E9E]">ฟิล์มปกป้องไม่ให้เกิดรอยขีดช่วนและรอยถลอก</span>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                <label className="block cursor-pointer select-none">
                                    <input type="radio" name="laminateType" value="matt" className="peer sr-only" />
                                    <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] peer-checked:ring-[#0050FF] p-2 peer-checked:bg-[#EEF3FF]">
                                        <div className="flex items-center gap-2">
                                            <Image  src="/images/matt.png" alt="matt" width={48} height={48} />
                                            <div>
                                                <span className="text-[14px]">ลามิเนตด้าน</span><br/> 
                                                <span className="text-[10px] text-[#9E9E9E]">ฟิล์มปกป้องไม่ให้เกิดรอยขีดช่วนและรอยถลอก</span>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                               
                            </div>
                       
                        
                    </div>
                </AccordionItem>
            </Accordion>

            {/* เทคนิคพิเศษ */}
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
                            
                            <div className="grid grid-cols-2 gap-3">
                                {TECHNIQUE.map(o => (
                                <label key={o.id} className="block cursor-pointer select-none">
                                    <input type="radio" name="techType" value={o.id} className="peer sr-only" />
                                    <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] peer-checked:ring-[#0050FF] p-2 peer-checked:bg-[#EEF3FF]">
                                        <div className="flex items-center gap-2">
                                            <Image  src={o.image} alt={o.title} width={48} height={48} />
                                            <div>
                                                <span className="text-[14px]">{o.title}</span><br/> 
                                                <span className="text-[10px] text-[#9E9E9E]">{o.detail}</span>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                ))}
                            </div>

                            <div className="rounded-xl bg-[#FAFAFA] min-h-[80px] content-center text-center mt-6">
                                <div className="text-[14px] text-[#BDBDBD]">ไม่มีรายการ</div>
                            </div>

                            <div className="content-center text-center mt-6">
                                <button type="button" className="inline-flex rounded-3xl items-center justify-between p-3 text-[#0050FF] text-[14px]  h-[40px] border border-[#EEEEEE]">
                                    <Plus className="mr-2"/>
                                    เพิ่มเทคนิคพิเศษ
                                </button>
                            </div>
                      
                        
                       
                    </div>
                </AccordionItem>
            </Accordion>

            {/* จำนวน */}
            <Accordion>
                <AccordionItem title={
                    <div className="grid grid-cols-12 text-[14px]">
                        <div className="col-span-4 font-bold">จำนวน</div>
                        <div className="col-span-8 text-end">
                            100 ชิ้น (฿124.62/ชิ้น)
                        </div>
                    </div>
                }>
                    <div className="relative rounded-2xl border border-[#eee] bg-white overflow-hidden">
                        <div className="col-span-12"> 
                            <div className="grid grid-cols-6">
                                <label className="block cursor-pointer select-none">
                                    <input type="radio" name="quantityType" value="artwork" className="peer sr-only" />
                                    <div className="border border-transparent bg-white p-2 transition peer-checked:border-[#0050FF] peer-checked:bg-[#EEF3FF] peer-checked:text-[#0050FF] rounded-l-2xl peer-checked:[&_.price-btn]:bg-[#0050FF]">
                                        <div className="flex items-center gap-2 text-center justify-items-center">
                                            <div className="leading-tight text-center justify-items-center w-full ">
                                                <span className="text-[14px]">100 ชิ้น</span><br/> 
                                                <button
                                                    type="button"
                                                    className="inline-flex rounded-lg p-3 text-white text-[14px] font-bold h-[40px] bg-[#000000] w-full mt-2 items-center justify-center price-btn" 
                                                >
                                                    ฿8.50
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                <label className="block cursor-pointer select-none">
                                    <input type="radio" name="quantityType" value="artwork" className="peer sr-only" />
                                    <div className="border border-transparent bg-white p-2 transition peer-checked:border-[#0050FF] peer-checked:bg-[#EEF3FF] peer-checked:text-[#0050FF] peer-checked:[&_.price-btn]:bg-[#0050FF]">
                                        <div className="flex items-center gap-2">
                                            <div className="leading-tight text-center justify-items-center w-full">
                                                <span className="text-[14px]">200 ชิ้น</span><br/> 
                                                <button
                                                    type="button"
                                                    className="inline-flex rounded-lg p-3 text-white text-[14px] font-bold h-[40px] bg-[#000000] w-full mt-2 items-center justify-center price-btn" 
                                                >
                                                    ฿7.00
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                <label className="block cursor-pointer select-none">
                                    <input type="radio" name="quantityType" value="artwork" className="peer sr-only" />
                                    <div className="border border-transparent bg-white p-2 transition peer-checked:border-[#0050FF] peer-checked:bg-[#EEF3FF] peer-checked:text-[#0050FF] peer-checked:[&_.price-btn]:bg-[#0050FF]">
                                        <div className="flex items-center gap-2">
                                            <div className="leading-tight text-center justify-items-center w-full">
                                                <span className="text-[14px]">300 ชิ้น</span><br/> 
                                                <button
                                                    type="button"
                                                    className="iinline-flex rounded-lg p-3 text-white text-[14px] font-bold h-[40px] bg-[#000000] w-full mt-2 items-center justify-center price-btn" 
                                                >
                                                    ฿6.04
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                <label className="block cursor-pointer select-none">
                                    <input type="radio" name="quantityType" value="artwork" className="peer sr-only" />
                                    <div className="border border-transparent bg-white p-2 transition peer-checked:border-[#0050FF] peer-checked:bg-[#EEF3FF] peer-checked:text-[#0050FF] peer-checked:[&_.price-btn]:bg-[#0050FF]">
                                        <div className="flex items-center gap-2">
                                            <div className="leading-tight text-center justify-items-center w-full">
                                                <span className="text-[14px]">500 ชิ้น</span><br/> 
                                                <button
                                                    type="button"
                                                    className="inline-flex rounded-lg p-3 text-white text-[14px] font-bold h-[40px] bg-[#000000] w-full mt-2 items-center justify-center price-btn" 
                                                >
                                                    ฿6.04
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                <label className="block cursor-pointer select-none">
                                    <input type="radio" name="quantityType" value="artwork" className="peer sr-only" />
                                    <div className="border border-transparent bg-white p-2 transition peer-checked:border-[#0050FF] peer-checked:bg-[#EEF3FF] peer-checked:text-[#0050FF] peer-checked:[&_.price-btn]:bg-[#0050FF]">
                                        <div className="flex items-center gap-2">
                                            <div className="leading-tight text-center justify-items-center w-full">
                                                <span className="text-[14px]">1,000 ชิ้น</span><br/> 
                                                <button
                                                    type="button"
                                                    className="inline-flex rounded-lg p-3 text-white text-[14px] font-bold h-[40px] bg-[#000000] w-full mt-2 items-center justify-center price-btn" 
                                                >
                                                    ฿6.04
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                <label className="block cursor-pointer select-none">
                                    <input type="radio" name="quantityType" value="artwork" className="peer sr-only" />
                                    <div className="border border-transparent bg-white p-2 transition peer-checked:border-[#0050FF] peer-checked:bg-[#EEF3FF] peer-checked:text-[#0050FF] rounded-r-2xl peer-checked:[&_.price-btn]:bg-[#0050FF]">
                                        <div className="flex items-center gap-2">
                                            <div className="leading-tight text-center justify-items-center w-full">
                                                <span className="text-[14px]">2,000 ชิ้น</span><br/> 
                                                <button
                                                    type="button"
                                                    className="inline-flex rounded-lg p-3 text-white text-[14px] font-bold h-[40px] bg-[#000000] w-full mt-2 items-center justify-center price-btn" 
                                                >
                                                    ฿6.04
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                
                            </div>
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>

            {/* ตัวอย่างสินค้า */}
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
                            <div className="col-span-12"> 
                            <div className="grid grid-cols-1 gap-3">
                                {EXAMPLE.map(o => (
                                <label key={o.id} className="block cursor-pointer select-none">
                                    <input type="radio" name="exampleType" value={o.id} className="peer sr-only" />
                                    <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] peer-checked:ring-[#0050FF] p-2 peer-checked:bg-[#EEF3FF]">
                                        <div className="flex items-center gap-2">
                                            <Image  src={o.image} alt={o.title} width={48} height={48} />
                                            <div>
                                                <span className="text-[14px]">{o.title}</span><br/> 
                                                <span className="text-[10px] text-[#9E9E9E]">{o.detail}</span>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                </AccordionItem>
            </Accordion>

            {/* การรับสินค้า */}
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
                            
                            <div className="grid grid-cols-2 gap-3">
                                
                                <label className="block cursor-pointer select-none">
                                    <input type="radio" name="receiveType" value="pickup" className="peer sr-only" />
                                    <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] peer-checked:ring-[#0050FF] p-2 peer-checked:bg-[#EEF3FF]">
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <span className="text-[14px]">รับสินค้าด้วยตัวเอง</span><br/> 
                                                <span className="text-[10px] text-[#9E9E9E]">คุณต้องการมารับสินค้าด้วยตัวเองที่โรงงานของเรา ดูแผนที่ใน Google Map</span>
                                            </div>
                                        </div>
                                    </div>
                                </label>

                                <label className="block cursor-pointer select-none">
                                    <input type="radio" name="receiveType" value="send" className="peer sr-only" />
                                    <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] peer-checked:ring-[#0050FF] p-2 peer-checked:bg-[#EEF3FF]">
                                        <div className="flex items-center">
                                            <div>
                                                <span className="text-[14px]">ส่งสินค้าถึงบ้าน</span><br/> 
                                                <span className="text-[10px] text-[#9E9E9E]">จัดส่งสินค้ากรุงเทพฯ และปริมณฑลฟรี! หากจัดส่งนอกเขตค่าจัดส่งขึ้นอยู่กับระยะทางที่อยู่จัดส่ง</span>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                
                            </div>


                            <div className="mt-6">
                                <div className="text-[14px]">สถานที่จัดส่ง</div>

                                <div className="rounded-xl bg-[#F5F5F5] min-h-[72px] content-center text-center mt-2">
                                    <div className="grid grid-cols-12 gap-3 mt-2 p-2 items-center h-[56px]">
                                    <div className="flex gap-2 col-span-8 items-center">
                                        <Image src="/icons/distance.svg" alt="distance" width={24} height={24} />
                                        <div className="leading-tight">
                                            <span className="text-[14px] mr-2">10400, กรุงเทพฯ</span>
                                            <span className="text-[14px] font-bold text-[#0050FF]">฿0.00</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-2 col-span-4 justify-self-end">
                                        <button
                                            type="button"
                                            className="inline-flex rounded-3xl items-center justify-between p-3 text-black text-[14px] h-[40px] bg-white"
                                        >
                                            เปลี่ยนรหัสไปรษณีย์
                                        </button>
                                    </div>
                                </div>
                                </div>
                           
                            </div>
                    
                        
                    </div>
                </AccordionItem>
            </Accordion>

            {/* ระยะเวลาการผลิต */}
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
                        <div className="col-span-12">
                            <div className="grid grid-cols-3 gap-3">
                               
                                <label className="block cursor-pointer select-none">
                                <input
                                    type="radio"
                                    name="productTimeType"
                                    value="standard"
                                    className="peer sr-only"
                                />
                                <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] p-2 peer-checked:bg-[#EEF3FF]">
                                    <div className="flex flex-col items-center rounded-xl bg-[#E6F8CF] p-2 text-center">
                                        <Image src="/icons/avg_pace.svg" alt="standard" width={24} height={24} />
                                        <div className="mt-1 text-[14px] font-bold text-[#8BC34A]">มาตรฐาน</div>
                                    </div>
                                    <div className="my-4 text-center peer-checked:text-[#0050FF]">
                                        <div className="text-[10px]">ใช้เวลาผลิต 10-15 วันทำการ</div>
                                        <div className="text-[14px] font-bold">ผลิตเสร็จ 12 ก.ค.</div>
                                    </div>

                                    <div>
                                        <button type="button" className="inline-flex rounded-lg bg-[#EEF3FF] items-center justify-center p-3 text-[#0050FF] text-[14px] font-bold h-[32px] w-full">฿0.00</button>
                                    </div>
                                </div>
                                </label>

                                
                                <label className="block cursor-pointer select-none">
                                <input type="radio" name="productTimeType" value="express" className="peer sr-only" />
                                <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] p-2 peer-checked:bg-[#EEF3FF]">
                                    <div className="flex flex-col items-center rounded-xl bg-[#FFF5D3] p-2 text-center">
                                        <Image src="/icons/bolt.svg" alt="express" width={24} height={24} />
                                        <div className="mt-1 text-[14px] font-bold text-[#F9A925]">เร็วมาก</div>
                                    </div>
                                    <div className="my-4 text-center">
                                        <div className="text-[10px]">ใช้เวลาผลิต 10-15 วันทำการ</div>
                                        <div className="text-[14px] font-bold">ผลิตเสร็จ 12 ก.ค.</div>
                                    </div>

                                    <div>
                                        <button type="button" className="inline-flex rounded-lg bg-[#EEF3FF] items-center justify-center p-3 text-[#0050FF] text-[14px] font-bold h-[32px] w-full">฿500.00</button>
                                    </div>
                                </div>
                                </label>

                                <label className="block cursor-pointer select-none">
                                <input type="radio" name="productTimeType" value="express" className="peer sr-only" />
                                <div className="rounded-xl overflow-hidden border border-[#eee] bg-white shadow-sm transition peer-checked:border-[#0050FF] p-2 peer-checked:bg-[#EEF3FF]">
                                    <div className="flex flex-col items-center rounded-xl bg-[#FDE8EF] p-2 text-center">
                                        <Image src="/icons/rocket_launch.svg" alt="express" width={24} height={24} />
                                        <div className="mt-1 text-[14px] font-bold text-[#D32F2F]">ด่วนพิเศษ</div>
                                    </div>
                                    <div className="my-4 text-center peer-checked:text-[#0050FF]">
                                        <div className="text-[10px]">ใช้เวลาผลิต 10-15 วันทำการ</div>
                                        <div className="text-[14px] font-bold">ผลิตเสร็จ 12 ก.ค.</div>
                                    </div>

                                    <div>
                                        <button type="button" className="inline-flex rounded-lg bg-[#EEF3FF] items-center justify-center p-3 text-[#0050FF] text-[14px] font-bold h-[32px] w-full">฿1,000.00</button>
                                    </div>
                                </div>
                                </label>
                                
                            </div>
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
              
                <PriceVatCard unitPrice={4.25} qty={100} vatRate={7} defaultMode="ex" />
              
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
