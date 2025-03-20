import Image from "next/image";

interface ImageCardProps {
  imageUrl: string;
  text: string;
}
export const ShopImageCard = ({ imageUrl, text }: ImageCardProps) => {
  return (
    <div className="flex flex-col h-[140px] w-[250px] rounded-2xl overflow-hidden text-center bg-[#632526] ">
      <Image
        src={imageUrl}
        alt="flower_shop"
        width={100}
        height={100}
        className="w-full h-[100px] p-2"
      /> 
      <div className="h-full bg-[#7A3738] py-2">
        <p>{text}</p>
      </div>
    </div>
  );
};
