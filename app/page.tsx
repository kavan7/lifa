import HeroSection from "@/components/HeroSection";
import KeyStats from "@/components/KeyStats";
import SectorsSection from "@/components/SectorSection";
import Footer from "@/components/ui/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    <HeroSection/>
    <KeyStats/>
    <SectorsSection/>
    <Footer/>
    </div>
  );
}
