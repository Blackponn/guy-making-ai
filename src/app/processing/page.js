"use client";

import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Processing() {
  const [processingText, setProcessingText] = useState("processing");
  const [dotCount, setDotCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady) {
      const interval = setInterval(() => {
        setDotCount((prevCount) => (prevCount + 1) % 4);
      }, 500);

      const timer = setTimeout(() => {
        setIsReady(true);
        clearInterval(interval); 
      }, 8000);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [isReady]);

  useEffect(() => {
    if (!isReady) {
      setProcessingText("processing" + ".".repeat(dotCount));
    } else {
      setProcessingText("Are you ready to see all of your guys?");
    }
  }, [dotCount, isReady]);

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-bl from-[#F9804A] to-[#DD6B78] items-center">
      <header className="text-center text-[24px] font-bold text-white py-[24px]">
        {processingText}
      </header>
      {isReady && (
        <nav className="text-center shadow-lg w-[128px] mt-[84px] text-[32px] text-white bg-[#E35772] rounded-[50pt] border border-[#CB435D]">
          <Link href="/yourguy1">{"Yes"}</Link>
        </nav>
      )}
    </div>
  );
}