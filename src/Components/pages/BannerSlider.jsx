import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const banners = [
  {
    title: "New Collection",
    subtitle: "Season of Sale",
    discount: "Up to 50% Off",
    img: "https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-2 relative w-full h-100 overflow-hidden ">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img src={banner.img} alt="" className="w-full h-full object-cover" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center px-10">
            <div className="text-white max-w-md">
              <h2 className="text-4xl font-bold mb-2">{banner.title}</h2>

              <p className="text-lg mb-2">{banner.subtitle}</p>

              <p className="text-xl font-semibold mb-4">{banner.discount}</p>

              <button
                onClick={() => navigate(banner.link)}
                className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {banners.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
