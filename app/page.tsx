"use client";

import ProductCard from "@/components/ProductCard";
import RenameModal from "@/components/RenameModal";
import SearchFilter from "@/components/SearchFilter";
import AnimatedHeading from "@/components/AnimatedHeading";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export interface CardProps {
  id: number;
  title: string;
  description: string;
  badge: string;
  image: string;
}

export default function Page() {
  const [data, setData] = useState<CardProps[]>([
    {
      id: 1,
      title: "Component Library 1",
      description: "Interface with careful details.",
      badge: "Premium",
      image: "https://product-card.s3.eu-west-3.amazonaws.com/raycast_bg_1.png",
    },
    {
      id: 2,
      title: "Landing Page 1",
      description: "Structure your landing page.",
      badge: "Premium",
      image: "https://product-card.s3.eu-west-3.amazonaws.com/raycast_bg_1.png",
    },
    {
      id: 3,
      title: "Dashboard CRM 1",
      description: "Develop your skills in data management.",
      badge: "Premium",
      image: "https://product-card.s3.eu-west-3.amazonaws.com/raycast_bg_2.png",
    },
    {
      id: 4,
      title: "Dashboard CRM 2",
      description: "Develop your skills in data management.",
      badge: "Premium",
      image: "https://product-card.s3.eu-west-3.amazonaws.com/raycast_bg_2.png",
    },
    {
      id: 5,
      title: "Landing Page 2",
      description: "Structure your landing page.",
      badge: "Free",
      image: "https://product-card.s3.eu-west-3.amazonaws.com/raycast_bg_3.png",
    },
    {
      id: 6,
      title: "Landing Page 3",
      description: "Structure your landing page.",
      badge: "Free",
      image: "https://product-card.s3.eu-west-3.amazonaws.com/raycast_bg_3.png",
    },
  ]);

  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);
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
    toast("Filters have been cleared.");
  };

  const handleOpenRenameModal = (card: CardProps) => {
    setSelectedCard(card);
    setIsRenameModalOpen(true);
  };

  const handleRenameCard = (newTitle: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === selectedCard?.id ? { ...item, title: newTitle } : item
      )
    );
    setIsRenameModalOpen(false);
    setSelectedCard(null);
    toast("Title renamed successfully!");
  };

  return (
    <main className="mx-auto max-w-xl md:max-w-2xl lg:max-w-5xl flex flex-col justify-center items-center">
      <div className="pb-6 pt-6">
        <AnimatedHeading />
      </div>

      <SearchFilter
        searchValue={search}
        filterValue={filterBadge}
        onSearchChange={setSearch}
        onFilterChange={setFilterBadge}
        onClearFilters={clearFilters}
      />

      <div className="max-w-80 md:max-w-2xl lg:max-w-5xl pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
        {filteredData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <ProductCard {...item} onEdit={() => handleOpenRenameModal(item)} />
          </motion.div>
        ))}
      </div>

      {isRenameModalOpen && (
        <RenameModal
          title={selectedCard?.title || ""}
          onClose={() => setIsRenameModalOpen(false)}
          onSave={handleRenameCard}
        />
      )}
    </main>
  );
}
