import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Redux/Features/cart/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const productState = useSelector((state) => state.products);
  const products = productState.products;

  const singleProduct = products.find((item) => String(item.id) === String(id));

  if (!singleProduct) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="p-10 flex flex-col md:flex-row gap-10">
      <div className="group relative w-69.5 h-92 rounded-[20px] overflow-visible border-2 border-[#c3c6ce] transition-all duration-500 ease-out hover:border-black hover:shadow-[0_4px_18px_rgba(0,0,0,0.25)] cursor-pointer">
        {/* Image */}
        <div className="group w-68 h-90 rounded-[20px] overflow-hidden hover:border-black hover:shadow-lg transition-all duration-300">
  <img
    src={singleProduct.Image}
    alt={singleProduct.Brand}
    className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
  />
</div>
        <div className="absolute inset-0 rounded-[20px] bg-linear-to-t from-black/70 to-transparent z-1" />
      </div>
      <div className="py-10">
        <h2 className="text-2xl font-bold">{singleProduct.Brand}</h2>
        <span className=" w-2 text-gray-500">{singleProduct.Description}</span>
        <h2 className="text-2xl font-bold py-12">{singleProduct.Price}</h2>
         <button
                    onClick={() => dispatch(addToCart(singleProduct))}
                    className=" h-8 px-4 flex items-center justify-center bg-black text-white rounded-lg text-xl sm:text-sm hover:bg-gray-800 active:scale-95 transition"
                  >
                    Add to Cart
                  </button>
      </div>
      
    </div>
  );
};

export default SingleProduct;
