import SubNavBar from "@/components/subnavbar/SubNavBar";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  

  return (
    <>
      {/* ถ้า navbar หลักคุณเป็น fixed 72px: <SubNav items={items} fixedOffset={72} /> */}
      <SubNavBar />
      <div>{children}</div>
    </>
  );
}
