"use client";

import ProductCard from "@/components/ProductCard";
import RenameModal from "@/components/RenameModal";
import SearchFilter from "@/components/SearchFilter";
import { useState } from "react";

export default function Page() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Component Library 1",
      description: "Interface with careful details.",
      badge: "Premium",
      image: "/raycast_bg_1.png",
    },
    {
      id: 2,
      title: "Landing Page 1",
      description: "Structure your landing page.",
      badge: "Premium",
      image: "/raycast_bg_1.png",
    },
    {
      id: 3,
      title: "Dashboard CRM 1",
      description: "Develop your skills in data management.",
      badge: "Premium",
      image: "/raycast_bg_2.png",
    },
    {
      id: 4,
      title: "Dashboard CRM 2",
      description: "Develop your skills in data management.",
      badge: "Premium",
      image: "/raycast_bg_2.png",
    },
    {
      id: 5,
      title: "Landing Page 2",
      description: "Structure your landing page.",
      badge: "Free",
      image: "/raycast_bg_3.png",
    },
    {
      id: 6,
      title: "Landing Page 3",
      description: "Structure your landing page.",
      badge: "Free",
      image: "/raycast_bg_3.png",
    },
  ]);

  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [search, setSearch] = useState("");
  const [filterBadge, setFilterBadge] = useState("all");

  const filteredData = data.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesBadge = filterBadge === "all" || item.badge === filterBadge;

    return matchesSearch && matchesBadge;
  });

  const clearFilters = () => {
    setSearch("");
    setFilterBadge("all");
  };

  const handleOpenRenameModal = (card) => {
    setSelectedCard(card);
    setIsRenameModalOpen(true);
  };

  const handleRenameCard = (newTitle: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === selectedCard.id ? { ...item, title: newTitle } : item
      )
    );
    setIsRenameModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <main className="mx-auto max-w-7xl flex flex-col justify-center items-center">
      <div className="pb-6 pt-6">
        <h1 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          High-quality product selection
        </h1>
      </div>

      <SearchFilter
        searchValue={search}
        filterValue={filterBadge}
        onSearchChange={setSearch}
        onFilterChange={setFilterBadge}
        onClearFilters={clearFilters}
      />

      <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item, index) => (
          <ProductCard
            key={index}
            {...item}
            onEdit={() => handleOpenRenameModal(item)}
          />
        ))}
      </div>

      {isRenameModalOpen && (
        <RenameModal
          title={selectedCard?.title}
          onClose={() => setIsRenameModalOpen(false)}
          onSave={handleRenameCard}
        />
      )}
    </main>
  );
}
