import Image from "next/image";
import ColorchangeButton from '../components/ColorButton';
import {Hobbies} from '../components/hobby';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <header className="text-center text-[24px] font-bold text-white py-[24px] bg-[#E35772]">
        {"Choose your guy!"}
      </header>
      <h1 className="text-center text-[32px] font-bold text-[#000000] pt-[72px]">{"Hobby"}</h1>
      <h2 className="text-center text-[16px] font-regular text-[#636363]">{"2/8"}</h2>
      <div className="mt-[64px] px-[64px] flex flex-wrap justify-center gap-[16px] mx-auto" >
        {Hobbies.map(hobby => (
          <ColorchangeButton 
            key={hobby.id}
            Name={hobby.hobby}
          />
        ))}
      </div>
      <nav className="text-center shadow-lg w-[128px] my-[64px] text-[32px] text-white bg-[#E35772] rounded-[50pt] border border-[#CB435D] mx-auto">
        <Link href="/haircolor">{"Next"}</Link>
      </nav>
      </>
    
  );
}