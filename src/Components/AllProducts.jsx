import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import ImgData from "./data";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useWishlist } from './MyContext';

const AllProducts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.state?.category || "ALL";

  const [likedProducts, setLikedProducts] = useState({});
  
  const { toggleWishlistItem, isInWishlist } = useWishlist();


  const toggleLike = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProducts =
    category === "ALL"
      ? ImgData
      : ImgData.filter((p) => p.category === category);

  return (
    <div className="bg-[#ebe3d8] min-h-screen w-full">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center text-[#5d3620] mb-4">
          {category}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col items-center group"
            >
              {/* Card with heart icon */}
              <div className="relative p-1 bg-white w-full overflow-hidden">
                {/* Heart Icon */}
                <div className="absolute  top-2 right-2 z-10 ">
                  <button
                    onClick={() => toggleWishlistItem(product)}
                    className="transition-transform hover:scale-110 bg-white rounded-5 h-8 w-8 "
                  >
                    {isInWishlist(product.id) ? (
                      <FavoriteIcon className="text-red-500" />
                    ) : (
                      <FavoriteBorderIcon className="text-black" />
                    )}
                  </button>
                </div>

                <img
                 onClick={() => navigate(`/product/${product.id}`)}
                  src={product.imgsrc}
                  alt={product.name}
                  className="w-full h-100 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="bg-white p-1 w-full flex justify-center">
                <button
                  className="px-4 py-2 md:w-85 bg-black text-white transition group-hover:scale-105 transition-transform duration-300"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  QUICK VIEW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
