import Footer from "@/components/footer/Footer";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  

  return (
    <>
      <div>{children}</div>
      <Footer/>
    </>
  );
}
