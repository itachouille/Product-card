"use client";

import ProductCard from "@/components/ProductCard";
import RenameModal from "@/components/RenameModal";
import { useState } from "react";

export default function Page() {
  const [data, setData] = useState([
    {
      title: "Raycast Wallpaper #1",
      description: "Recreate this wallpaper using AI.",
      badge: "Premium",
      image: "/raycast_bg_1.png",
    },
    {
      title: "Raycast Wallpaper #2",
      description: "Recreate this wallpaper using AI.",
      badge: "Premium",
      image: "/raycast_bg_1.png",
    },
    {
      title: "Raycast Wallpaper #3",
      description: "Recreate this wallpaper using AI.",
      badge: "Premium",
      image: "/raycast_bg_2.png",
    },
    {
      title: "Raycast Wallpaper #4",
      description: "Recreate this wallpaper using AI.",
      badge: "Premium",
      image: "/raycast_bg_2.png",
    },
    {
      title: "Raycast Wallpaper #5",
      description: "Recreate this wallpaper using AI.",
      badge: "Free",
      image: "/raycast_bg_3.png",
    },
    {
      title: "Raycast Wallpaper #6",
      description: "Recreate this wallpaper using AI.",
      badge: "Free",
      image: "/raycast_bg_3.png",
    },
  ]);

  const [selectedCard, setSelectedCard] = useState(null);

  const openRenameModal = (index) => {
    setSelectedCard(index);
  };

  const renameCard = (newTitle: string) => {
    setData((prevData) =>
      prevData.map((item, index) =>
        index === selectedCard ? { ...item, title: newTitle } : item
      )
    );
    setSelectedCard(null);
  };

  return (
    <main className="mx-auto max-w-7xl flex flex-col justify-center items-center">
      <div className="pb-6 pt-24">
        <h1 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          High-quality product selection
        </h1>
      </div>

      <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            badge={item.badge}
            id={index}
            onRename={() => openRenameModal(index)}
          />
        ))}
      </div>
      <RenameModal
        currentTitle={data[selectedCard].title}
        onSave={renameCard}
        onClose={() => setSelectedCard(null)}
      />
    </main>
  );
}
