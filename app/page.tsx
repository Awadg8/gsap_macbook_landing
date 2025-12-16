import Hero from "@/component/Hero";
import NavBar from "@/component/NavBar";
import ProductViewer from "@/component/ProductViewer";
import Showcase from "@/component/Showcase";
import Performance from "@/component/Performance";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Features from "@/component/Features";
import Highlight from "@/component/Highlight";
import Footer from "@/component/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlight />
      <Footer />
    </main>
  );
}
