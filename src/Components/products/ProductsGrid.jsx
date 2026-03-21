import React, { useEffect, useState } from "react";
import { CATEGORIES } from "../../Redux/Features/category/category";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../Services/ProducetAPI";
import {
  seterror,
  setloading,
  setproducts,
} from "../../Redux/Features/Products/ProductSlice";
import ProductsCard from "./ProductsCard";
import Navbar from "../layout/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../pages/Pagination";

const ProductsGrid = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  {
    /* pagination states */
  }
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);

  const { category } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      handleFetchProducts(category);
      setcurrentPage(1);
    } else {
      handleFetchProducts();
    }
  }, [category]);

  const dispatch = useDispatch();

  const handleFetchProducts = async (category) => {
    try {
      dispatch(setloading(true));
      const data = await fetchProducts(category);
      dispatch(setproducts(data));
    } catch (error) {
      dispatch(seterror(error.message));
    } finally {
      dispatch(setloading(false));
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  if (error) {
    return <div className="text-center mt-10">Error: {error}</div>;
  }

  return (
    <div>
      <div className=" sticky top-16 h-20 bg-white/10 backdrop-blur-md p-2 z-40 flex gap-8  pl-[8vw] flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => navigate(`/${cat}`)}
            className="px-3 py-1 border rounded"
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* <button onClick={handleFetchProducts}>get products</button> */}
        {currentItems?.map((product, index) => (
          <ProductsCard
            key={index}
            product={{ ...product, id: product.Image + index }}
          />
        ))}
      </div>
      {category && (
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
