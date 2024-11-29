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
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
      <Input
        placeholder="Search by title"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className="md:w-1/3 bg-white"
      />

      <Select
        value={filterValue}
        onValueChange={(value) => onFilterChange(value)}
      >
        <SelectTrigger className="w-full md:w-1/4 bg-white">
          <SelectValue placeholder="Filter by badge" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All challenges</SelectItem>
          <SelectItem value="Free">Free</SelectItem>
          <SelectItem value="Premium">Premium</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" onClick={onClearFilters}>
        Clear Filters
      </Button>
    </div>
  );
}
