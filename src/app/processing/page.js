"use client";

import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from 'react';
// ทำให้สามารถใช้เรื่องการเปลี่ยนสเตจกับเรื่องการใช้เอฟเฟคได้

export default function Processing() {
  const [processingText, setProcessingText] = useState("processing");
  const [dotCount, setDotCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  // สร้างค่าต่างๆในเรื่องของ processing นับจุด และพร้อมยัง

  useEffect(() => {
    if (!isReady) {
      const interval = setInterval(() => {
        setDotCount((prevCount) => (prevCount + 1) % 4);
      }, 500);
      // สร้างช่วงระยะเวลาตามจุด เพิ่ม 1 จุดทุกๆ 0.5 วิ สูงสุด 4 จุด

      const timer = setTimeout(() => {
        setIsReady(true);
        clearInterval(interval); 
      }, 8000);
      // ระยะเวลาในช่วงนี้คือ 8 วิ

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
      // หลังจาก 8 วิคือเคลียร์เรื่องช่วงเวลากับจับเวลา
    }
  }, [isReady]);

  useEffect(() => {
    if (!isReady) {
      setProcessingText("processing" + ".".repeat(dotCount));
      // ตั้งค่าว่าถ้ายังไม่พร้อม (false) จะนับจุดเรื่อยๆ
    } else {
      setProcessingText("Are you ready to see all of your guys?");
      // ถ้าจริงหรือเลย 8 วิแล้ว จะเปลี่ยนเป็นข้อความแทน
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
        // ถ้าจริงจะขึ้นข้อความนี้
      )}
    </div>
  );
}