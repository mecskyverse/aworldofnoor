import Image from "next/image";
import font from 'next/font/local'
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MultiCarousal from '@/components/MultiCarousal'
const myFont = font({src : '../../public/fonts/MilkyNice.otf'})

export default function Home() {
  return (
    <main className={`${myFont.className} flex flex-col items-center justify-between `}>
      <Hero/>
      <HowItWorks/>
      <MultiCarousal/>
    </main>
  );
}
