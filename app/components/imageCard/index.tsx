import Image from "next/image";

interface ImageCardProps {
  imageUrl: string;
  topic: string;
  text: string;
}
export const ImageCard = ({ imageUrl, topic, text }: ImageCardProps) => {
  return (
    <div className="flex flex-col h-[400px] w-[350px] rounded-2xl overflow-hidden text-center bg-[#5F2223] gap-4">
      <Image
        src={imageUrl}
        alt="flower_shop"
        width={100}
        height={100}
        className="w-full h-[222px]"
      />
      <div className="px-2">
        <h3>{topic}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
