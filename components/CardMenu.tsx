import { Edit, Share, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { PropsWithChildren } from "react";

const CardMenu = ({ children }: PropsWithChildren) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-fit rounded-xl p-[6px] flex flex-col gap-[6px]"
        /*    onClick={(e) => e.stopPropagation()} */
        align="start"
      >
        <DropdownMenuItem
          className="p-[6px] cursor-pointer" /* onClick={onCopyLink} */
        >
          <Edit className="size-4" />
          <span className="text-xs font-medium">Edit Challenge</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="p-[6px] cursor-pointer"
          /*  onClick={() => onOpen(id, title)} */
        >
          <Share className="size-4" />
          <span className="text-xs font-medium">Share Challenge</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="p-[6px] cursor-pointer text-destructive">
          <Trash2 className="size-4" />
          <span className="text-xs font-medium">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CardMenu;
