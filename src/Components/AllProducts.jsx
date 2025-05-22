import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import ImgData from "./data";

const AllProducts = () => {
  const location = useLocation();
  const category = location.state?.category || "ALL";

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              {/* Card */}
              <div className="p-1 bg-white w-full">
                <img
                  src={product.imgsrc}
                  alt={product.name}
                  className="w-full h-100 object-cover "
                />
              </div>

              {/* Button below the card */}
              <div className="bg-white p-1 grid grid-cols-2 md:grid-cols-4 ">
                <button className=" px-4 py-2 md:w-89 w-40 bg-black text-white transition">
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
