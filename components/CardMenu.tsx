import { Edit, Share, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { PropsWithChildren } from "react";

const CardMenu = ({ children }: PropsWithChildren) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-fit rounded-xl p-[6px]"
        /*    onClick={(e) => e.stopPropagation()} */
        /*  side={side}
        sideOffset={sideOffset} */
      >
        <DropdownMenuItem
          className="p-[6px] cursor-pointer" /* onClick={onCopyLink} */
        >
          <Edit className="size-4" />
          Edit Challenge
        </DropdownMenuItem>
        <DropdownMenuItem
          className="p-[6px]  cursor-pointer"
          /*  onClick={() => onOpen(id, title)} */
        >
          <Share className="size-4" />
          Share Challenge
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="p-[6px] cursor-pointer text-destructive"
          /*  onClick={() => onOpen(id, title)} */
        >
          <Trash2 className="size-4" />
          Delete
        </DropdownMenuItem>
        {/*  <CorfirmModal
          header="Delete board?"
          description="This will delete the board and all of its contents."
          disabled={pending}
          onCorfirm={onDelete}
        >
          <Button
            variant="ghost"
            className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
          >
            <Trash2 className="size-4 mr-2" />
            Delete
          </Button>
        </CorfirmModal> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CardMenu;
