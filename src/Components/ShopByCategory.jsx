import React, { useEffect, useState } from 'react';
import './Style.css'; // Import the CSS for the animation

const ShopByCategory = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('rotate-section');
    if (element) observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {/* First Row - Always visible (3 cards) */}
      <div className="flex flex-wrap rotate-row" id="rotate-section">
        <div className={`w-1/2 md:w-1/3 p-4 border rounded-lg rotate-card ${isInView ? 'rotate' : ''}`}>
          <img
            className="shop-category-image"
            src="https://ambraee.com/cdn/shop/files/SUIT_SET_copy_a04f22e3-70b9-4e82-ab04-11954e187339.jpg?v=1743058227"
            alt="Kurta Sets"
          />
        </div>

        <div className={`w-1/2 md:w-1/3 p-4 border rounded-lg rotate-card ${isInView ? 'rotate' : ''}`}>
          <img
            className="shop-category-image"
            src="https://ambraee.com/cdn/shop/files/KURTA_SETS_copy_76b78854-e945-4989-8d2e-2e8461856aa5.jpg?v=1743058167"
            alt="Kurta Sets"
          />
        </div>

        <div className={`w-full md:w-1/3 p-4 border rounded-lg rotate-card ${isInView ? 'rotate' : ''}`}>
          <img
            className="shop-category-image"
            src="https://ambraee.com/cdn/shop/files/SAREES_copy_5e814fde-c407-44ae-931c-a7cda0eb5c91.jpg?v=1743058167"
            alt="Lehengas"
          />
        </div>
      </div>

      {/* Second Row - Hidden on mobile (only visible on md and up) */}
      <div className="hidden md:flex rotate-row">
        <div className={`w-1/3 p-4 border rounded-lg rotate-card ${isInView ? 'rotate' : ''}`}>
          <img
            className="shop-category-image"
            src="https://ambraee.com/cdn/shop/files/LEHENGAS_copy_7af8677a-d65c-437f-a0c5-ee5b2f6e62bf.jpg?v=1743058167"
            alt="Co-ord Sets"
          />
        </div>

        <div className={`w-1/3 p-4 border rounded-lg rotate-card ${isInView ? 'rotate' : ''}`}>
          <img
            className="shop-category-image"
            src="https://ambraee.com/cdn/shop/files/CO-ORD_SETS_copy_dbd36429-ed04-4c05-bc44-386180d9d966.jpg?v=1743058167"
            alt="Co-ord Sets"
          />
        </div>

        <div className={`w-1/3 p-4 border rounded-lg rotate-card ${isInView ? 'rotate' : ''}`}>
          <img
            className="shop-category-image"
            src="https://ambraee.com/cdn/shop/files/1000018846.png?v=1743440448"
            alt="Co-ord Sets"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
