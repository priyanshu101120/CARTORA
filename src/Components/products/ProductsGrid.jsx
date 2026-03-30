import React, { useEffect, useState, useMemo } from "react";
import { CATEGORIES } from "../../Redux/Features/category/category";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Services/ProducetAPI";
import {
  seterror,
  setloading,
  setproducts,
} from "../../Redux/Features/Products/ProductSlice";
import ProductsCard from "./ProductsCard";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../pages/Pagination";
import Loader from "../pages/Loader";

const ProductsGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams();

  const { products, loading, error } = useSelector((state) => state.products);

  // 🔢 Pagination State
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 8;

  // 🔥 Fetch Products
  useEffect(() => {
    const getProducts = async () => {
      try {
        dispatch(setloading(true));
        const data = await fetchProducts(category);
        dispatch(setproducts(data));
        setcurrentPage(1);
      } catch (error) {
        dispatch(seterror(error.message));
      } finally {
        dispatch(setloading(false));
      }
    };

    getProducts();
  }, [category, dispatch]);

  // 🔥 Memoized Pagination
  const { currentItems, totalPages } = useMemo(() => {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return {
      totalPages,
      currentItems: products.slice(start, end),
    };
  }, [products, currentPage]);

  // ⏳ Loading
  if (loading) {
    return (
      <div className="flex items-center justify-center scale-250 min-h-[30vh]">
        <Loader />
      </div>
    );
  }

  // ❌ Error
  if (error) {
    return <div className="text-center mt-10">Error: {error}</div>;
  }

  return (
    <div>
      {/* 🧭 Category Bar */}
      <div className="sticky top-12 z-40 bg-white/80 backdrop-blur-md px-44 py-4 flex gap-6 overflow-x-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => navigate(`/${cat}`)}
            className={`px-3 py-1 text-sm border rounded whitespace-nowrap ${
              category === cat ? "bg-black text-white" : "bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🛍 Product Grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  sm:gap-6">
        {currentItems?.map((product, index) => (
          <ProductsCard
            key={index}
            product={{ ...product, id: product.Image + index }}
          />
        ))}
      </div>

      {/* 📄 Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setcurrentPage={setcurrentPage}
        />
      )}
    </div>
  );
};

export default ProductsGrid;
