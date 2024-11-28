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
    <main className="mx-auto max-w-7xl">
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
            badgeTitle={item.badge.title}
            badgeColor={item.badge.color}
          />
        ))}
      </div>
    </main>
  );
}
