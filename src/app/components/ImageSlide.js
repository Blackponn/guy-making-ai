import Image from "next/image";

export default function ImageSlide({ src, alt }) {
  return (
    <div className="relative mt-[24pt] w-78 h-120 rounded-[24pt] border-2 border-black overflow-hidden shadow-lg">
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
