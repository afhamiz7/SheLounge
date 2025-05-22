import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './style.css';
import NewArrivel from './NewArrivel';
import WatchAndShop from './WatchAndShop';
import { motion } from 'framer-motion';
import ShopByCategory from './ShopByCategory';
import ShopByCollection from './ShopByCollection';
import CustomerReview from './CustomerReview';
import Footer from './Footer';
import Navbar from './Navbar';
const Home = () => {

  const carouselItems = [
    {
      src: "https://ambraee.com/cdn/shop/files/jpeg-optimizer_LUXE_BANNER_copy_3.jpg?v=1740651592&width=1920",
      alt: "First slide",
    },
    {
      src: "https://ambraee.com/cdn/shop/files/jpeg-optimizer_VACATION_copy_3e7c9f89-7dbb-4566-819f-b28faf42a882.jpg?v=1740651681&width=1920",
      alt: "Second slide",
    },
    {
      src: "https://ambraee.com/cdn/shop/files/jpeg-optimizer_LUXE_BANNER_home_copy_ee22173d-6096-4c39-aef6-eb72d72435d2.jpg?v=1740651704&width=1920",
      alt: "Third slide",
    },
  ];

  return (
    <div className="bg-[#ebe3d8] min-h-screen w-full">
      {/* Navbar */}
      <div className='sticky top-0  z-1000'>
      <Navbar/>
      </div>

      {/* Carousel */}
      <div className="px-0">
        <Carousel>
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-full object-cover md:h-[80vh] h-[40vh]" src={item.src} alt={item.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* New Arrivals */}
      <div className="text-center mt-[50px] text-[black]"  id="new-arrivals">
        <h1>NEW ARRIVALS</h1>
        <p>A curated collection of the latest trends and timeless elegance.</p>
        <NewArrivel />
      </div>

 {/* Slide-in Animated Image with Zoom Effect and Left-Half View */}
<motion.div
  className="mt-[150px] relative"
  initial={{ x: 300, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <img
    className="object-cover w-full h-auto sm:h-[60vh] sm:w-[200%] sm:scale-110 sm:transform sm:translate-x-[-15%] sm:object-left md:h-[80vh] md:scale-100 md:translate-x-0 transition-transform"
    src="https://ambraee.com/cdn/shop/files/jpeg-optimizer_Luxe_DESKTOP_copy.jpg?v=1743057473&width=1920"
    alt=""
  />
</motion.div>



      {/* Watch & Shop */}
      <div className="text-center mt-[100px] text-[black]">
        <h1>WATCH&SHOP</h1>
        <WatchAndShop />
      </div>

      {/* Shop by Category */}
      <div className="text-center mt-[50px] text-[black]">
        <h1>SHOP BY CATEGORY</h1>
        <p>Discover effortlessly with our Shop by Category feature.</p>
        <ShopByCategory />
      </div>

      {/* Shop by Collection */}
      <div className="text-center mt-[50px] text-[black]" id="party-wears">
        <h1>SHOP BY COLLECTION</h1>
        <p>Handpicked ensembles that celebrate style, tradition, and elegance.</p>
        <ShopByCollection />
      </div>

      {/* Customer Review */}
      <div>
        <CustomerReview />
      </div>

      {/* Footer */}
      <div className="mt-[70px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
