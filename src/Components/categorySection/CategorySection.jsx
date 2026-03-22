import React, { useEffect, useState } from "react";
import { CATEGORIES } from "../../Redux/Features/category/category";

const CategorySection = ({ handleFetchProducts }) => {
  const [active, setActive] = useState(CATEGORIES[0]);

  // 🔥 Initial Load
  useEffect(() => {
    handleFetchProducts(CATEGORIES[0]);
  }, [handleFetchProducts]);

  const handleClick = (cat) => {
    setActive(cat);
    handleFetchProducts(cat);
  };

  return (
    <div className="mt-6 px-3 sm:px-6">
      {/* 🧭 Category Scroll */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className={`px-4 py-1.5 text-sm rounded-full whitespace-nowrap border transition ${
              active === cat
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
