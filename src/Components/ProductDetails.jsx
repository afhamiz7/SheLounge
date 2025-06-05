import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImgData from "./data";
import Navbar from "./Navbar";
import { FiShoppingCart } from "react-icons/fi";
import { useWishlist } from "./MyContext";
import ReactImageMagnify from 'react-image-magnify';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = ImgData.find((item) => item.id === id);
    setProduct(foundProduct);
    if (foundProduct && foundProduct.images?.length > 0) {
      setMainImage(foundProduct.images[0]);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="text-center mt-12">
        <h2>Product not found or loading...</h2>
      </div>
    );
  }

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="bg-[#ebe3d8] min-h-screen w-full">
      <Navbar />

      {/* Desktop View */}
      <div className="hidden md:flex gap-3 mt-4 px-6">
        {/* Thumbnails */}
        <div className="flex flex-col gap-3 ml-2 ">
          {product.images.map((img, index) => (
            <img
            className="transition-transform duration-200 hover:scale-105"
              key={index}
              src={img}
              alt={`pose-${index}`}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                border:
                  img === mainImage ? "2px solid black" : "1px solid gray",
                cursor: "pointer",
              }}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* Main Image */}
        
<div className="border w-fit">
  <ReactImageMagnify
    {...{
      smallImage: {
        alt: product.name,
        isFluidWidth: false,
        width: 500,
        height: 580,
        src: mainImage,
      },
      largeImage: {
        src: mainImage,
        width: 2000,
        height: 2000, 
      },
      enlargedImageContainerDimensions: {
        width: '270%',
        height: '100%',
      },
      enlargedImageContainerStyle: {
        zIndex: 9,
        border: '1px solid #ccc',
        backgroundColor: '#fff',
      },
      enlargedImagePosition: 'beside', 
      isHintEnabled: true,
      shouldHideHintAfterFirstActivation: false,
    }}
  />
</div>

        {/* Product Info */}
        <div className="space-y-6 ml-4">
          <h1 className="text-2xl font-semibold">{product.description}</h1>
          <h4 className="text-xl font-bold">{product.price}</h4>
          <div className="border-b border-gray-300" />

          <p className="text-lg font-medium">SIZE</p>
          <div className="flex gap-3 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`h-[50px] w-[50px] transition ${
                  selectedSize === size
                    ? "bg-white text-black border-2 border-black "
                    : "bg-black text-white border hover:bg-white hover:text-black transition-transform duration-100 hover:scale-105"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="border-b border-gray-300" />

          <div className="mt-4">
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 w-[500px] border border-black rounded bg-black text-white transition-transform duration-500 hover:scale-105"
              onClick={() => {
                if (!selectedSize) {
                  alert("Please select a size.");
                  return;
                }
                addToCart({ ...product, selectedSize });
                navigate("/addcart");
              }}
            >
              <FiShoppingCart size={16} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden px-4 py-4">
        <div className="flex flex-col items-center">
          {/* Main Image */}
          <img
            src={mainImage}
            alt={product.name}
            className="w-[300px] h-[400px] object-cover"
          />

          {/* Thumbnails */}
          <div className="flex gap-2 mt-3">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`pose-${index}`}
                className="w-[60px] h-[65px] object-cover border cursor-pointer"
                style={{
                  border:
                    img === mainImage ? "2px solid black" : "1px solid gray",
                }}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-6 space-y-4">
          <h1 className="text-xl font-semibold text-center">
            {product.description}
          </h1>
          <h4 className="text-lg font-bold text-center">{product.price}</h4>

          <div className="border-b border-gray-300" />

          <p className="text-lg font-medium">SIZE</p>
          <div className="flex gap-3 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`h-[50px] w-[50px] transition ${
                  selectedSize === size
                    ? "bg-white text-black border-2 border-black "
                    : "bg-black text-white border hover:bg-white hover:text-black transition-transform duration-100 hover:scale-105"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="border-b border-gray-300" />

          <div className="mt-4">
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 w-full border border-black rounded bg-black text-white"
              onClick={() => {
                if (!selectedSize) {
                  alert("Please select a size.");
                  return;
                }
                addToCart({ ...product, selectedSize });
                navigate("/addcart");
              }}
            >
              <FiShoppingCart size={16} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
