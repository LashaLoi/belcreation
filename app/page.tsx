import { Header } from "@/app/components/Header";
import { Feature } from "@/app/components/Features";
import { Content } from "@/app/components/Content";
import { Pricing } from "@/app/components/Pricing";
import { Faq } from "@/app/components/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <Feature />
      <Content />
      {/* <Pricing /> */}
      <Faq />
    </>
  );
}
