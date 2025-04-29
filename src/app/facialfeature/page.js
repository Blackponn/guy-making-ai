import Image from "next/image";
import ColorchangeButton from '../components/ColorButton';
import {Facialfeatures} from '../components/facialfeature';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <header className="text-center text-[24px] font-bold text-white py-[24px] bg-[#E35772]">
        {"Choose your guy!"}
      </header>
      <h1 className="text-center text-[32px] font-bold text-[#000000] pt-[72px]">{"Facial Feature"}</h1>
      <h2 className="text-center text-[16px] font-regular text-[#636363]">{"6/8"}</h2>
      <div className="mt-[64px] px-[64px] flex flex-wrap justify-center gap-[16px] mx-auto" >
        {Facialfeatures.map(facialfeature => (
          <ColorchangeButton 
            key={facialfeature.id}
            Name={facialfeature.facialfeature}
          />
        ))}
      </div>
      <nav className="text-center shadow-lg w-[128px] my-[64px] text-[32px] text-white bg-[#E35772] rounded-[50pt] border border-[#CB435D] mx-auto">
        <Link href="/bodytype">{"Next"}</Link>
      </nav>
      </>
    
  );
}