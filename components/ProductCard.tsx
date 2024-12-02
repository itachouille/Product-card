import Image from "next/image";
import { Swords } from "lucide-react";
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
    <div className="relative flex flex-col w-full max-w-sm p-4 rounded-[28px] border border-primary bg-white">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={366}
          height={258}
          className="rounded-[18px] w-full h-auto"
        />
      </div>

      <div className="flex flex-col mt-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-lg text-primary/90">{title}</h3>
          <span className="font-medium text-xs text-primary/90 bg-secondary/40 py-1 px-2 rounded-lg">
            {badge}
          </span>
        </div>

        <div className="pt-2">
          <p className="font-normal text-sm text-primary/50">{description}</p>
        </div>

        <div className="flex w-full justify-between mt-8">
          <button className="flex shadow-md justify-center items-center hover:bg-secondary/10  transition-colors rounded-[12px] py-[9px] px-3 gap-[9px] bg-white text-[#090C15] border border-border">
            <Swords className="size-6" />
            <span className="font-medium">Start Challenge</span>
          </button>
          <CardMenu onEdit={onEdit} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
