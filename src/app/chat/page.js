"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([
    { text: "HI! I'm Kyle.", sender: "other" },
    { text: "What's your name?", sender: "other" },
  ]);
  const [inputText, setInputText] = useState('');
  const kyleResponses = [
    "Nice to meet you!",
    "How are you doing today?",
    "That's interesting!",
    "I was working all day long.",
    "What do you like to do for fun?",
    "Have you seen any good movies lately?",
    "The weather is nice today.",
  ];
  const [nextKyleResponseIndex, setNextKyleResponseIndex] = useState(0);
  const [canSendMessage, setCanSendMessage] = useState(true);

  const handleSendMessage = () => {
    if (inputText.trim() !== '' && canSendMessage) {
      const userMessage = { text: inputText, sender: "user" };
      setMessages([...messages, userMessage]);
      setInputText('');
      setCanSendMessage(false); // ป้องกันไม่ให้ส่งข้อความซ้ำทันที

      // สุ่มเวลาหน่วงระหว่าง 3 ถึง 6 วินาที (3000 ถึง 6000 มิลลิวินาที)
      const randomDelay = Math.random() * 3000 + 3000;

      // จำลองการตอบกลับของ Kyle หลังจากเวลาหน่วง
      setTimeout(() => {
        if (nextKyleResponseIndex < kyleResponses.length) {
          const kyleMessage = { text: kyleResponses[nextKyleResponseIndex], sender: "other" };
          setMessages((prevMessages) => [...prevMessages, kyleMessage]);
          setNextKyleResponseIndex((prevIndex) => prevIndex + 1);
        } else {
          // หากข้อความตอบกลับหมดแล้ว อาจจะรีเซ็ต หรือทำอย่างอื่น
          setNextKyleResponseIndex(0); // วนกลับไปข้อความแรก
        }
        setCanSendMessage(true); // อนุญาตให้ผู้ใช้ส่งข้อความใหม่
      }, randomDelay);
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <header className="flex flex-col items-center py-[12px] bg-white shadow-lg">
        <div className="flex flex-col items-center gap-[8px]">
          <div className="relative mt-[16px] w-[56px] h-[56px] rounded-[50pt] overflow-hidden shadow-lg">
            <Image
              src={'/images/guy.png'}
              alt="heart"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-[20px] text-[#606060] font-light">{"Kyle"}</div>
        </div>
      </header>

      <div className="mt-[16px] px-[16px] overflow-y-auto h-[calc(100vh - 180px)]">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex w-fit max-w-[70%] my-[8px] rounded-[20pt] shadow-md py-[8px] px-[12px] ${
              message.sender === "user"
                ? "bg-[#E25178] ml-auto text-white" // ข้อความของคุณ: พื้นหลัง E25178, ตัวอักษรขาว
                : "bg-white text-[#606060]" // ข้อความจาก Kyle: พื้นหลังขาว, ตัวอักษร 606060
            }`}
          >
            <div className="text-[16px] font-light">{message.text}</div>
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
            className="flex-1 outline-none text-[16px] text-[#606060] bg-transparent ml-[16px]"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && canSendMessage) {
                handleSendMessage();
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