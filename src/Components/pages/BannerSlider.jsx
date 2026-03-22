import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const banners = [
  {
    title: "New Collection",
    subtitle: "Season of Sale",
    discount: "Up to 50% Off",
    img: "https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=870&auto=format&fit=crop",
    link: "/womenswear",
  },
  {
    title: "Women Flash Sale ⚡",
    subtitle: "Limited Time Offer",
    discount: "Flat 40% Off",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    link: "/womenswear",
  },
  {
    title: "Trendy Fashion",
    subtitle: "Upgrade Your Style",
    discount: "Up to 60% Off",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    link: "/menswear",
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // 🔥 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-2 mt-3">
      <div className="relative w-full h-50 sm:h-75 md:h-100 overflow-hidden rounded-xl">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="min-w-full h-full relative">
              {/* Image */}
              <img
                src={banner.img}
                alt={banner.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-start pt-48 px-4 sm:px-10">
                <div className="text-white max-w-xs sm:max-w-md mt-10 sm:mt-0">
                  <h2 className="text-lg sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                    {banner.title}
                  </h2>

                  <p className="text-xs sm:text-base mb-1 sm:mb-2">
                    {banner.subtitle}
                  </p>

                  <p className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4">
                    {banner.discount}
                  </p>

                  <button
                    onClick={() => navigate(banner.link)}
                    className="bg-white text-black px-3 py-1 sm:px-5 sm:py-2 text-xs sm:text-sm rounded-lg font-semibold hover:bg-gray-200 active:scale-95 transition"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-2 sm:bottom-4 w-full flex justify-center gap-2">
          {banners.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
                i === current ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
