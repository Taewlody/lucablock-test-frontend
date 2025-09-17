import Accordion from "@/components/ui/Accordion";
import Image from "next/image";
import Link from "next/link"; // ✅ use Link instead of useRouter

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
            <Accordion />

            <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm">
              <div className="grid grid-cols-12 text-[14px]">
                <div className="col-span-4 font-bold">สินค้า</div>
                <div className="col-span-8 text-end">
                  Folding Carton (Straight Tuck End)
                </div>
              </div>

              <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm">
                <h3 className="font-semibold">ขนาด</h3>
                <p className="text-sm text-zinc-600">รายละเอียดสั้น ๆ</p>
              </div>

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

            <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm">
              <h3 className="font-semibold">ขนาด</h3>
              <p className="text-sm text-zinc-600">รายละเอียดสั้น ๆ</p>
            </div>

            <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm">
              <h3 className="font-semibold">วัสดุ</h3>
              <p className="text-sm text-zinc-600">รายละเอียดสั้น ๆ</p>
            </div>

            <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm">
              <h3 className="font-semibold">การพิมพ์</h3>
              <p className="text-sm text-zinc-600">รายละเอียดสั้น ๆ</p>
            </div>

            <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm">
              <h3 className="font-semibold">Artwork</h3>
              <p className="text-sm text-zinc-600">รายละเอียดสั้น ๆ</p>
            </div>

            <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm">
              <h3 className="font-semibold">เคลือบ</h3>
              <p className="text-sm text-zinc-600">รายละเอียดสั้น ๆ</p>
            </div>

            <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm">
              <h3 className="font-semibold">จำนวน</h3>
              <p className="text-sm text-zinc-600">รายละเอียดสั้น ๆ</p>
            </div>

            <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm">
              <h3 className="font-semibold">ตัวอย่างสินค้า</h3>
              <p className="text-sm text-zinc-600">รายละเอียดสั้น ๆ</p>
            </div>

            <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm">
              <h3 className="font-semibold">การรับสินค้า</h3>
              <p className="text-sm text-zinc-600">รายละเอียดสั้น ๆ</p>
            </div>

            <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm">
              <h3 className="font-semibold">ระยะเวลาการผลิต</h3>
              <p className="text-sm text-zinc-600">รายละเอียดสั้น ๆ</p>
            </div>

            <div className="rounded-xl border border-[#eee] bg-white p-4 shadow-sm"></div>

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
