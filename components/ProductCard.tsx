import Image from "next/image";
import { Swords } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  badgeTitle: string;
  badgeColor: string;
}

const ProductCard = ({
  image,
  title,
  description,
  badgeTitle,
  badgeColor,
}: ProductCardProps) => {
  return (
    <div className="p-[18px] rounded-2xl w-[411px] h-[475px] border border-border bg-white flex flex-col gap-[18px]">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-2xl"
        />
      </div>

      <div className="h-1/2 flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <p className="font-medium text-xl">{title}</p>
            <div className="flex justify-center items-center border border-border rounded-lg p-[6px] w-16 h-7">
              <span className="font-medium text-xs">{badgeTitle}</span>
            </div>
          </div>
          <div className="pt-3">
            <p className="font-normal text-sm">{description}</p>
          </div>
        </div>

        <div className="flex justify-between">
          <button className="flex justify-center items-center rounded-xl py-2 px-3 gap-2 bg-white text-black border border-border">
            <Swords />
            <span className="font-medium text-lg">Start Challenge</span>
          </button>
          <span>...</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
