import Image from "next/image";
import font from 'next/font/local'
import Hero from "@/components/Hero";
const myFont = font({src : '../../public/fonts/MilkyNice.otf'})

export default function Home() {
  return (
    <main className={`${myFont.className} flex min-h-[90vh] h-[10vh] flex-col items-center justify-between `}>
      <Hero/>
    </main>
  );
}
