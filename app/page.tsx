"use client";

import { Header } from "@/app/components/Header";
import { Content } from "@/app/components/Content";
import { Faq } from "@/app/components/FAQ";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <Header />
        <Content />
      </ParallaxProvider>
      <Faq />
    </>
  );
}
