"use client";

import { useState, useRef } from "react";
// ทำให้ใช้เรื่องเปลี่ยนสเตจและใช้การเลื่อนได้
import { useRouter } from "next/navigation";
// จัดเรื่อวการนำทางในหน้า
import { Swiper, SwiperSlide } from "swiper/react";
// เอาเข้าการปัด
import { Navigation, Pagination } from "swiper/modules";
// เอาเข้ามาเผื่อ แต่โค้ดนี้ไม่ได้ใช้
import "swiper/css";
// เอาสไตล์มาใช้
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  // สร้างเรื่องการนำทางไปหน้าอื่น
  const [swipeLeftCount, setSwipeLeftCount] = useState(0);
  // สร้างว่าให้นับค่าตอนปัดซ้าย โดยเริ่มที่ 0
  const swiperRef = useRef(null);
  // สร้างเรฟเพื่อใช้ในภายหลัง

  const handleSlideChange = (swiper) => {
    console.log("Current index:", swiper.activeIndex);
    // ให้ระบุค่าในปัจจุบัน

    if (swiper.swipeDirection === "next") {
      // ตรวจสอบว่าปัดซ้ายมั้ย
      setSwipeLeftCount((prev) => {
        const newCount = prev + 1;
        // ปัดซ้ายคือการนับ เอาการนับครั้งก่อนหน้ามา + 1
        console.log("ปัดซ้ายครั้งที่", newCount);
        if (newCount >= 3) {
          router.push("/processing");
          // ถ้าปัดซ้ายครบ 3 ครั้งคือการบังคับกลับไปยังหน้า processing
        }
        return newCount;
        //และรีเซ็ตค่าที่นับไว้ใหม่
      });
    } else if (swiper.swipeDirection === "prev") {
      // ตรวจสอบว่าปัดขวามั้ย
      console.log("ปัดขวา ไปหน้าถัดไป");
      router.push("/match");
      // ปัดขวาไปยังหน้าแมทช์
    }
  };

  const handleClickButton = (direction) => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const currentIndex = swiper.activeIndex;
    console.log("กดปุ่ม ตอนอยู่สไลด์ที่:", currentIndex);
    // เป็นตัวกลางในการทำให้กดปุ่มแล้วเหมือนการปัดซ้ายขวา

    if (direction === "left") {
      swiper.slideNext();
      // กด x คือปัดซ้าย
    } else if (direction === "right") {
      router.push("/match");
      // กดหัวใจคือปัดขวา
    }
  };

  return (
    <>
      <header className="text-center text-[32px] font-bold text-black pt-[32px]">
        {"Your guy is here!!"}
      </header>
      <h1 className="text-center text-[16px] font-regular text-[#636363]">
        {"swipe to choose"}
      </h1>

      <div className="relative flex flex-col items-center mt-4">
        <Swiper
          modules={[Navigation, Pagination]}
          // ไม่มีในเว็บ
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          speed={1000}
          threshold={25}
          onSlideChange={handleSlideChange}
          className="w-[312px] h-[500px]"
          ref={swiperRef}
          // ทำให้สามารถเลื่อนได้
        >
          
          <SwiperSlide className="flex flex-col items-center">
            <div className="relative mt-[24pt] w-[312px] h-[424px] rounded-[24pt] border-2 border-black overflow-hidden shadow-lg">
              <Image
                src="/images/guy1.png"
                alt="Profile picture of Kyle"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="absolute bottom-0 w-[312px] h-[144px] pt-[8pt] text-center border-2 border-black rounded-[20pt] bg-white z-10">
              <div className="font-bold text-[24pt]">Kyle, 22</div>
              <div className="text-gray-600">{"Hi! I'm Kyle. Nice to meet you."}</div>
            </div>
          </SwiperSlide>

          
          <SwiperSlide className="flex flex-col items-center">
            <div className="relative mt-[24pt] w-[312px] h-[424px] rounded-[24pt] border-2 border-black overflow-hidden shadow-lg">
              <Image
                src="/images/guy2.png"
                alt="Profile picture of Alex"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="absolute bottom-0 w-[312px] h-[144px] pt-[8pt] text-center border-2 border-black rounded-[20pt] bg-white z-10">
              <div className="font-bold text-[24pt]">Thuch, 25</div>
              <div className="text-gray-600">{"Hey! I'm Thuch. Nice to meet you."}</div>
            </div>
          </SwiperSlide>

          
          <SwiperSlide className="flex flex-col items-center">
            <div className="relative mt-[24pt] w-[312px] h-[424px] rounded-[24pt] border-2 border-black overflow-hidden shadow-lg">
              <Image
                src="/images/guy3.png"
                alt="Profile picture of John"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="absolute bottom-0 w-[312px] h-[144px] pt-[8pt] text-center border-2 border-black rounded-[20pt] bg-white z-10">
              <div className="font-bold text-[24pt]">Ponn, 28</div>
              <div className="text-gray-600">{"Hi, I'm Ponn. Pleased to meet you!"}</div>
            </div>
          </SwiperSlide>
        </Swiper>

        
        <div className="absolute bottom-[-40px] flex gap-[32px] justify-center items-center z-20">
          <button onClick={() => handleClickButton("left")}>
            {/* เมื่อกดปุ่มนี้จะเป็นการกดปัดซ้าย */}
            <div className="relative w-[84px] h-[84px] rounded-full shadow-lg bg-white overflow-hidden">
              <Image
                src="/images/x.png"
                alt="x"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </button>

          <button onClick={() => handleClickButton("right")}>
            {/* กดแล้วจะเป็นการปัดขวา */}
            <div className="relative w-[84px] h-[84px] rounded-full shadow-lg bg-white overflow-hidden">
              <Image
                src="/images/heart.png"
                alt="heart"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}