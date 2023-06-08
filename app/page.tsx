import { Nav } from "@/app/components/Nav";
import { Header } from "@/app/components/Header";
import { Feature } from "@/app/components/Features";
import { Content } from "@/app/components/Content";
import { Pricing } from "@/app/components/Pricing";
import { Faq } from "@/app/components/FAQ";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="h-12" />
      <Header />
      <Feature />
      <Content />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}
