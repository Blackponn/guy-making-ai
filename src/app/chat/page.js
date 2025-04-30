"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([
    { text: "HI! I'm Thuch.", sender: "other" },
    { text: "What's your name?", sender: "other" },
  ]);
  //ทำให้สามารถเก็บพวกข้อความเอาไว้โดยมี 2 อันแรกเป็นตัวเปิด
  const [inputText, setInputText] = useState('');
  // เอาไว้เก็บข้อความที่ผู้ใช้พิมพ์ โดยที่ไม่มีค่าเริ่มต้น
  const kyleResponses = [
    "Nice to meet you!",
    "How are you doing today?",
    "That's interesting!",
    "I was working all day long.",
    "What do you like to do for fun?",
    "Have you seen any good movies lately?",
    "The weather is nice today.",
  ];
  // ข้อความที่เตรียมไว้ให้บอทตอบ
  const [nextKyleResponseIndex, setNextKyleResponseIndex] = useState(0);
  // เซ็ตว่าตอนนี้ค่าอยู่ที่ข้อความที่เท่าไหร่แล้ว
  const [canSendMessage, setCanSendMessage] = useState(true);
  // จะไม่สามารถส่งข้อความได้มากกว่า 1 ข้อความจนกว่า AI จะตอบ (ผู้ใช้งาน)

  const handleSendMessage = () => {
    // เริ่มหลังจากกดส่งข้อความ
    if (inputText.trim() !== '' && canSendMessage)
      // ถ้ากล่องข้อความไม่ว่างคือส่งได้
      {
      const userMessage = { text: inputText, sender: "user" };
      // สร้างอะไรจากที่คนใช้ส่ง
      setMessages([...messages, userMessage]);
      // เซ็ตค่าใหม่ในข้อความจากบอท
      setInputText('');
      // ล้างค่าเดิมในช่องข้อความ
      setCanSendMessage(false); 
      // ป้องกันไม่ให้ส่งข้อความซ้ำทันที

      
      const randomDelay = Math.random() * 3000 + 3000;
      // สุ่มเวลาหน่วงระหว่าง 3 ถึง 6 วิ

      // บอทตอบกลับ
      setTimeout(() => {
        if (nextKyleResponseIndex < kyleResponses.length) {
          // ถ้ามีข้อความในแอเรย์เหลือ
          const kyleMessage = { text: kyleResponses[nextKyleResponseIndex], sender: "other" };
          setMessages((prevMessages) => [...prevMessages, kyleMessage]);
          // ส่งข้อความ
          setNextKyleResponseIndex((prevIndex) => prevIndex + 1);
          // เซ็ตว่าครั้งถัดไปให้ส่งข้อความอันถัดไป
        } else {
          // หากข้อความตอบกลับหมด
          setNextKyleResponseIndex(0); // วนกลับไปข้อความแรก
        }
        setCanSendMessage(true); // จบช่วงนี้แล้วผู้ใช้งานถึงสามารถข้อความใหม่ได้
      }, randomDelay);
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  // อัพเดทค่าในช่องอินเสิร์ต

  return (
    <>
      <header className="flex flex-col items-center py-[12px] bg-white shadow-lg">
        <div className="flex flex-col items-center gap-[8px]">
          <div className="relative mt-[16px] w-[56px] h-[56px] rounded-[50pt] overflow-hidden shadow-lg">
            <Image
              src={'/images/guy2.png'}
              alt="guy2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-[20px] text-[#606060] font-light">{"Thuch"}</div>
        </div>
      </header>

      <div className="mt-[16px] px-[16px] overflow-y-auto h-[calc(100vh - 180px)]">
        {messages.map((message, index) => (
          // เอาข้อความมาจากในแอเรย์
          <div
            key={index}
            className={`flex w-fit max-w-[70%] my-[8px] rounded-[20pt] shadow-md py-[8px] px-[12px] ${
              message.sender === "user"
                ? "bg-[#E25178] ml-auto text-white" // ข้อความของผู้ใช้
                : "bg-white text-[#606060]" // ข้อความจากบอท
            }`}
          >
            <div className="text-[16px] font-light">{message.text}</div>
            {/* ข้อความ */}
          </div>
        ))}
      </div>

      <div className="fixed bottom-[16px] left-[16px] right-[16px]">
        <div className="flex items-center justify-between w-full rounded-[50pt] border border-[#606060] px-[10px] py-[8px] bg-white shadow-md">
          <div className="relative w-[32px] h-[32px] overflow-hidden shadow-lg rounded-full">
            <Image
              src={'/images/plus.png'}
              alt="plus"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            // ข้อความก่อนพิมพ์
            className="flex-1 outline-none text-[16px] text-[#606060] bg-transparent ml-[16px]"
            value={inputText}
            // หลังใส่ข้อความจะเปลี่ยนตามที่พิมพ์
            onChange={handleInputChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && canSendMessage) {
                handleSendMessage();
                // ถ้ากด enter คือกดส่ง
              }
            }}
          />
          <button onClick={handleSendMessage} disabled={!canSendMessage} className="relative w-[32px] h-[32px] overflow-hidden shadow-lg rounded-full ml-[16px]">
            <Image
              src={'/images/send.png'}
              alt="send"
              layout="fill"
              objectFit="cover"
            />
          </button>
        </div>
      </div>
    </>
  );
}