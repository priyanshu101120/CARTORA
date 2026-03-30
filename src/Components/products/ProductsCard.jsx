import ProductCartButton from "./ProductCartButton";
import { useLocation } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const location = useLocation();
  const truncateText = (text, wordLimit = 4) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };
  return (
    <div className="group relative w-full h-72 rounded-[20px] overflow-visible border-2 border-[#c3c6ce] transition-all duration-500 ease-out hover:border-black hover:shadow-[0_4px_18px_rgba(0,0,0,0.25)]">
      {/* Image */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden">
        <img
          src={product.Image}
          alt=""
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay (for readability) */}
      <div className="absolute inset-0 rounded-[px] bg-linear-to-t from-black/70 to-transparent z-1" />

      {/* Text (BOTTOM FIXED) */}
      <div className="absolute bottom-0 left-0 w-full p-3 z-10 text-white">
        <p className="text-sm font-bold">{product.Brand}</p>

        <p className="text-xs">
          {location.pathname === "/laptops" || location.pathname === "/mobiles"
            ? truncateText(product.Description, 4)
            : product.Description}
        </p>
      </div>

      {/* Button */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0  w-[60%] translate-y-[120%] 
        opacity-0 transition-all duration-300 ease-out text-white
        group-hover:translate-y-[60%] group-hover:opacity-100 z-30"
      >
        <ProductCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductsCard;
