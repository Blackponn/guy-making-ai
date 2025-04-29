"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [swipeLeftCount, setSwipeLeftCount] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    console.log("Current index:", swiper.activeIndex);

    if (swiper.swipeDirection === "next") {
      setSwipeLeftCount((prev) => {
        const newCount = prev + 1;
        console.log("ปัดซ้ายครั้งที่", newCount);
        if (newCount >= 3) {
          router.push("/processing");
        }
        return newCount;
      });
    } else if (swiper.swipeDirection === "prev") {
      console.log("ปัดขวา ไปหน้าถัดไป");
      router.push("/match");
    }
  };

  const handleClickButton = (direction) => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const currentIndex = swiper.activeIndex;
    console.log("กดปุ่ม ตอนอยู่สไลด์ที่:", currentIndex);

    if (direction === "left") {
      swiper.slideNext();
    } else if (direction === "right") {
      router.push("/match");
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
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          speed={400}
          threshold={10}
          onSlideChange={handleSlideChange}
          className="w-[312px] h-[500px]"
          ref={swiperRef}
        >
          {/* Slide 1 */}
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

          {/* Slide 2 */}
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

          {/* Slide 3 */}
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

        {/* Buttons */}
        <div className="absolute bottom-[-40px] flex gap-[32px] justify-center items-center z-20">
          <button onClick={() => handleClickButton("left")}>
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