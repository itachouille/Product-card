"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FilterX } from "lucide-react";

interface SearchFilterProps {
  searchValue: string;
  filterValue: string;
  onSearchChange: (value: string) => void;
  onFilterChange: (value: string) => void;
  onClearFilters: () => void;
}

export default function SearchFilter({
  searchValue,
  filterValue,
  onSearchChange,
  onFilterChange,
  onClearFilters,
}: SearchFilterProps) {
  return (
    <div className="flex flex-col px-10 md:flex-row items-center justify-center gap-4 w-full ">
      <Input
        placeholder="Search by title"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className="md:w-1/3 bg-white border border-border rounded-[12px] shadow-md text-xs font-medium text-[#090C15]"
      />

      <Select
        value={filterValue}
        onValueChange={(value) => onFilterChange(value)}
      >
        <SelectTrigger className="w-full md:w-1/4 bg-white border border-border rounded-[12px] shadow-md">
          <SelectValue placeholder="Filter by badge" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-border shadow-md">
          <SelectItem
            value="all"
            className="cursor-pointer font-medium text-[#090C15]"
          >
            All challenges
          </SelectItem>
          <SelectItem
            value="Free"
            className="cursor-pointer font-medium text-[#090C15]"
          >
            Free
          </SelectItem>
          <SelectItem
            value="Premium"
            className="cursor-pointer font-medium text-[#090C15]"
          >
            Premium
          </SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        onClick={onClearFilters}
        className="border border-border rounded-[12px] shadow-md hover:bg-[#CFD2DD]/10 px-3 py-[9px] transition-colors font-medium text-[#090C15]"
      >
        <FilterX />
        <span>Clear Filters</span>
      </Button>
    </div>
  );
}
