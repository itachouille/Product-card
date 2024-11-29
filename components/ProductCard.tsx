import Image from "next/image";
import { MoreVertical, Swords } from "lucide-react";
import CardMenu from "./CardMenu";
import { CardProps } from "@/app/page";

interface ProductCardProps extends CardProps {
  onEdit: () => void;
}

const ProductCard = ({
  image,
  title,
  description,
  badge,
  onEdit,
}: ProductCardProps) => {
  return (
    <div className="p-[18px] rounded-[24px] max-w-[411px] max-h-[475px] border border-border bg-white flex flex-col gap-[18px]">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={375}
          height={263}
          className="rounded-[18px]"
        />
      </div>

      <div className="h-1/2 flex flex-col justify-between">
        <div>
          <div className="flex">
            <p className="flex-1 font-medium text-xl text-[#090C15]/90">
              {title}
            </p>
            <div className="flex justify-center items-center border border-border rounded-lg p-[6px]  bg-[#CFD2DD]/40">
              <span className="font-medium text-xs text-[#090C15]/90">
                {badge}
              </span>
            </div>
          </div>
          <div className="pt-3">
            <p className="font-normal text-sm text-[#090C15]/50">
              {description}
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-12">
          <button className="flex shadow-md justify-center items-center hover:bg-[#CFD2DD]/10  transition-colors rounded-[12px] py-[9px] px-3 gap-[9px] bg-white text-[#090C15] border border-border">
            <Swords className="size-6" />
            <span className="font-medium text-lg">Start Challenge</span>
          </button>
          <CardMenu onEdit={onEdit}>
            <button className="border border-border rounded-[12px] shadow-md hover:bg-[#CFD2DD]/10 px-3 py-[9px] transition-colors outline-none">
              <MoreVertical className="text-[#090C15]" />
            </button>
          </CardMenu>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
