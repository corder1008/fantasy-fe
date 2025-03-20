import Image from "next/image";

interface ImageCardProps {
  imageUrl: string;
  topic: string;
  text: string;
}
export const ImageCard = ({ imageUrl, topic, text }: ImageCardProps) => {
  return (
    <div className="flex flex-col h-fit w-full lg:h-[400px] lg:w-[320px] 2xl:w-[350px] rounded-2xl overflow-hidden text-center bg-[#5F2223] gap-4">
      <Image
        src={imageUrl}
        alt="flower_shop"
        width={100}
        height={100}
        className="w-full h-auto"
      />
      <div className="px-2">
        <h3 className="text-[30px]">{topic}</h3>
        <p className="text-[22px] lg:text-[14px]">{text}</p>
      </div>
    </div>
  );
};
