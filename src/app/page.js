import Image from "next/image";
import font from 'next/font/local'
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MultiCarousal from '@/components/MultiCarousal'
import Faq from "@/components/Faq";
const myFont = font({src : '../../public/fonts/MilkyNice.otf'})
import UserUploadCarousal from '@/components/UserUploadCarousal'
export default function Home() {
  return (
    <main className={`${myFont.className} flex flex-col items-center justify-between `}>
      <Hero/>
      <HowItWorks/>
      <Faq/>
      <MultiCarousal/>

    </main>
  );
}
