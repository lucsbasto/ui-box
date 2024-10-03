import { CTASection } from "@/components/CTASection";
import { Features } from "@/components/Features";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="poppins inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <Navbar/>
      <CTASection/>
      <Features/>
    </div>
  );
}

