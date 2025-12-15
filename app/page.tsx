import Hero from "@/component/Hero";
import NavBar from "@/component/NavBar";
import ProductViewer from "@/component/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
    </main>
  );
}
