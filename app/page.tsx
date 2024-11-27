import ProductCard from "@/components/ProductCard";

export default function Page() {
  const data = [
    {
      title: "Raycast Wallpaper #1",
      description: "Recreate this wallpaper using AI.",
      badge: {
        title: "Premium",
        color: "#FFFF",
      },
      image: "/raycast_bg_1.png",
    },
    {
      title: "Raycast Wallpaper #2",
      description: "Recreate this wallpaper using AI.",
      badge: {
        title: "Premium",
        color: "#FFFF",
      },
      image: "/raycast_bg_2.png",
    },
    {
      title: "Raycast Wallpaper #3",
      description: "Recreate this wallpaper using AI.",
      badge: {
        title: "Free",
        color: "#66FF66",
      },
      image: "/raycast_bg_3.png",
    },
  ];

  return (
    <main className="flex items-center justify-around mt-7">
      {data.map((item, index) => (
        <ProductCard
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          badgeTitle={item.badge.title}
          badgeColor={item.badge.color}
        />
      ))}
    </main>
  );
}
