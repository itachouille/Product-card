"use client";

import { Edit, Share, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface CardMenuProps {
  children: React.ReactNode;
  onEdit: () => void;
}

const CardMenu = ({ children, onEdit }: CardMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-fit p-[6px] flex flex-col gap-[6px] border border-border rounded-[12px] shadow-md"
        align="start"
      >
        <DropdownMenuItem className="p-[6px] cursor-pointer" onClick={onEdit}>
          <Edit className="size-4" />
          <span className="text-xs font-medium">Edit Challenge</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="p-[6px] cursor-pointer">
          <Share className="size-4" />
          <span className="text-xs font-medium">Share Challenge</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="p-[6px] cursor-pointer text-destructive hover:!text-red-600 hover:!bg-red-100">
          <Trash2 className="size-4" />
          <span className="text-xs font-medium">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CardMenu;
