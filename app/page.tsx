import { Hero } from "@/app/components/Hero";
import { Content } from "@/app/components/Content";
import { Faq } from "@/app/components/FAQ";
import { About } from "@/app/components/About";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Content />
      <Faq />
    </div>
  );
}
