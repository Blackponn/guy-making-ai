import Image from "next/image";
import Link from 'next/link';

export default function processing() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-bl from-[#F9804A] to-[#DD6B78]">
      <header className="text-center text-[24px] font-bold text-white py-[24px]">
        {"It's a match!!!"}    
      </header>
      <nav className="text-center shadow-lg w-fit px-[36px] mt-[84px] text-[32px] text-white bg-[#E35772] rounded-[50pt] border border-[#CB435D] mx-auto">
        <Link href="/chat">{"Start chat"}</Link>
      </nav>
    </div>
  );
} 