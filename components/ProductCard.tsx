import Image from "next/image";
import { MoreVertical, Swords } from "lucide-react";
import CardMenu from "./CardMenu";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  badge: string;
  id: number;
}

const ProductCard = ({
  image,
  title,
  description,
  badge,
  id,
}: ProductCardProps) => {
  return (
    <div className="p-[18px] rounded-[36px] min-w-80 h-full border border-border bg-white flex flex-col gap-[18px]">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", borderRadius: "18px" }}
        />
      </div>

      <div className="h-1/2 flex flex-col justify-between">
        <div>
          <div className="flex">
            <p className="flex-1 font-medium text-xl">{title}</p>
            <div className="flex justify-center items-center border border-border rounded-lg p-[6px]">
              <span className="font-medium text-xs">{badge}</span>
            </div>
          </div>
          <div className="pt-3">
            <p className="font-normal text-sm">{description}</p>
          </div>
        </div>

        <div className="flex justify-between mt-12">
          <button className="flex shadow-md justify-center items-center rounded-[18px] py-[9px] px-3 gap-[9px] bg-white text-black border border-border">
            <Swords className="size-6" />
            <span className="font-medium text-lg">Start Challenge</span>
          </button>
          <CardMenu id={id} title={title}>
            <button className="border border-border rounded-[18px] shadow-md group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreVertical className="text-black opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </CardMenu>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
