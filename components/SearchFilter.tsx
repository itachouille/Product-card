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
    <div className="flex flex-col w-full px-10 lg:px-40 md:flex-row items-center justify-center gap-2">
      <Input
        placeholder="Search by title"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className="bg-white border border-primary rounded-[12px] text-xs font-medium text-primary"
      />

      <div className="flex items-center justify-between w-full gap-2 bg-white">
        <Select
          value={filterValue}
          onValueChange={(value) => onFilterChange(value)}
        >
          <SelectTrigger className="w-full bg-white border border-primary rounded-[12px]">
            <SelectValue placeholder="Filter by badge" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-primary">
            <SelectItem
              value="all"
              className="cursor-pointer font-medium text-primary"
            >
              All challenges
            </SelectItem>
            <SelectItem
              value="Free"
              className="cursor-pointer font-medium text-primary"
            >
              Free
            </SelectItem>
            <SelectItem
              value="Premium"
              className="cursor-pointer font-medium text-primary"
            >
              Premium
            </SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          onClick={onClearFilters}
          className="border border-primary rounded-[12px] hover:bg-secondary/10 px-3 py-[9px] transition-colors font-medium text-primary"
        >
          <FilterX />
          <span>Clear Filters</span>
        </Button>
      </div>
    </div>
  );
}
