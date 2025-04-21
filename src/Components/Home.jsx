import React, { useState } from 'react';
import SheImg from '../assets/images/SheImg.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Avery from '../assets/images/Avery.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';
import './style.css';
import NewArrivel from './NewArrivel';
import WatchAndShop from './WatchAndShop';
import { motion } from 'framer-motion';
import ShopByCategory from './ShopByCategory';
import ShopByCollection from './ShopByCollection';
import CustomerReview from './CustomerReview';
import Footer from './Footer';
import Login from './Login';

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleSearchInput = () => {
    setShowSearch(!showSearch);
    if (!showSearch) setSearchTerm("");
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleLoginOverlay = () => {
    setShowLogin(!showLogin);
  };

  const menuLinks = [
    { name: "NEW ARRIVALS" },
    { name: "ETHNIC WEARS" },
    { name: "DRESSES" },
    { name: "SALVAR" },
    { name: "TOP & SHIRT" },
    { name: "WESTERN WEARS" },
    { name: "PARTY WEARS" },
  ];

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
      <div className="sticky top-0 z-50 bg-[#ebe3d8] shadow-md py-4 md:h-[150px]">
        {/* First Row */}
        <div className="flex justify-between items-center px-6 md:px-12 relative">
          <div>
            <img src={SheImg} className="w-14 md:w-20 animate-triple-flip-reset logo-bottom-shadow" alt="SheImg" />
          </div>

          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <img src={Avery} className="w-28 md:w-36" alt="Avery" />
          </div>

          <div className="flex items-center gap-3 flex-grow justify-end">
            <div className="flex items-center relative">
              {showSearch ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "12rem", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative border border-gray-400 rounded-md flex items-center px-2 py-1 w-[12rem] max-w-[80vw]"
                >
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="outline-none px-2 w-full text-sm pr-6"
                  />
                  <CloseIcon
                    onClick={toggleSearchInput}
                    className="cursor-pointer w-5 h-5 text-gray-500 absolute right-2"
                  />
                </motion.div>
              ) : (
                <SearchIcon onClick={toggleSearchInput} className="cursor-pointer w-6 h-6" />
              )}
            </div>

            {/* Desktop Icons */}
            <div className={`hidden md:flex gap-3 ${showSearch ? 'hidden' : 'flex'}`}>
              <PersonIcon onClick={toggleLoginOverlay} className="cursor-pointer w-6 h-6" />
              <FavoriteBorderIcon className="cursor-pointer w-6 h-6" />
              <ShoppingBagIcon className="cursor-pointer w-6 h-6" />
              <LocalShippingIcon className="cursor-pointer w-6 h-6" />
            </div>

            {/* Mobile Icons */}
            <div className={`flex md:hidden gap-3 ${showSearch ? 'hidden' : 'flex'}`}>
              <PersonIcon onClick={toggleLoginOverlay} className="cursor-pointer w-6 h-6" />
              <FavoriteBorderIcon className="cursor-pointer w-6 h-6" />
              <ShoppingBagIcon className="cursor-pointer w-6 h-6" />
              <LocalShippingIcon className="cursor-pointer w-6 h-6" />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <MenuIcon onClick={toggleMenu} className="cursor-pointer w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex justify-center mt-2">
          <ul className="flex gap-6 text-[#5d3620] font-semibold text-lg relative">
            {menuLinks.map((link, index) => (
              <li key={index} className="relative cursor-pointer flex flex-col items-center gap-2 group">
                {link.name}
                <motion.div
                  className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Dropdown */}
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 py-4 bg-[#ebe3d8] shadow-md z-40"
          >
            <ul className="flex flex-col gap-4 text-[#5d3620] font-semibold text-base">
              {menuLinks.map((link, index) => (
                <li
                  key={index}
                  onClick={toggleMenu}
                  className="cursor-pointer border-b border-gray-300 pb-2"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      {/* Login Overlay */}
      <Login isOpen={showLogin} onClose={toggleLoginOverlay} />

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
      <div className="text-center mt-[50px] text-[black]">
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
      <div className="text-center mt-[50px] text-[black]">
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
