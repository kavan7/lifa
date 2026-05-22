import Analysts from "@/components/Analysts";
import HeroSection from "@/components/HeroSection";
import KeyStats from "@/components/KeyStats";
import Leadership from "@/components/Leadership";
import SectorsSection from "@/components/SectorSection";
import Footer from "@/components/ui/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    <HeroSection/>
    <KeyStats/>
    <SectorsSection/>
  <Leadership/>
   <Analysts/>
    <Footer/>
    </div>
  );
}
