import React, { useEffect } from "react";

const CategorySection = ({ handleFetchProducts }) => {
  useEffect(() => {
    handleFetchProducts(CATEGORIES[0]);
  }, []);
  return (
    <div className="flex gap-8 mt-9 pl-[8vw] flex-wrap">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => handleFetchProducts(cat)}
          className="px-3 py-1 border rounded"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategorySection;
