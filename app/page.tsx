import Hero from "@/component/Hero";
import NavBar from "@/component/NavBar";
import ProductViewer from "@/component/ProductViewer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductViewer />
    </div>
  );
}
