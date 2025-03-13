import React, { useState } from 'react';
import SheImg from '../assets/images/SheImg.png';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';  // Import the Close (X) icon
import Avery from '../assets/images/Avery.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './style.css';
import NewArrivel from './NewArrivel';

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");  // Added for managing the input value

  const toggleSearchInput = () => {
    setShowSearch(!showSearch);
    if (showSearch) setSearchTerm("");  // Reset search term when closing the input
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);  // Update search term as user types
  };

  const carouselItems = [
    {
      src: "https://ambraee.com/cdn/shop/files/jpeg-optimizer_LUXE_BANNER_copy_3.jpg?v=1740651592&width=1920",
      alt: "First slide",
      buttonPosition: { xs: "50%", md: "73%" },
    },
    {
      src: "https://ambraee.com/cdn/shop/files/jpeg-optimizer_VACATION_copy_3e7c9f89-7dbb-4566-819f-b28faf42a882.jpg?v=1740651681&width=1920",
      alt: "Second slide",
      buttonPosition: { xs: "50%", md: "74%" },
    },
    {
      src: "https://ambraee.com/cdn/shop/files/jpeg-optimizer_LUXE_BANNER_home_copy_ee22173d-6096-4c39-aef6-eb72d72435d2.jpg?v=1740651704&width=1920",
      alt: "Third slide",
      buttonPosition: { xs: "50%", md: "47%" },
    },
  ];

  return (
    <div className="bg-[#ebe3d8] min-h-screen w-full h-[2000px]">
      {/* Navbar */}
      <div className="flex flex-col items-center justify-between p-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full max-w-7xl">
          <div className="flex items-center">
            <img
              src={SheImg}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
              alt="SheImg"
            />
            <img
              src={Avery}
              alt="Avery"
              className="w-32 sm:w-40 md:w-48 ml-4 md:ml-110 mt-[-20px] md:mt-[-30px]"
            />
          </div>
          <div className="flex items-center">
            {/* Search Input */}
            <div className="relative mt-[-60px]">
              <div
                className={`search-container absolute top-8 right-0 ${showSearch ? 'show' : ''}`}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}  // Update the search term as user types
                  className="search-input p-2 border-1 rounded-md w-40 sm:w-48 md:w-64 transition-all duration-300 ease-in-out"
                  style={{ opacity: showSearch ? 1 : 0, transform: showSearch ? 'translateX(0)' : 'translateX(100%)' }}
                />
                {/* Close (X) Icon on the right side of the input */}
                {showSearch && (
                  <CloseIcon
                    onClick={toggleSearchInput}  // Close the input when X is clicked
                    className="absolute right-2 top-2 cursor-pointer text-[#5d3620] w-6 h-6"
                  />
                )}
              </div>
            </div>
            <ul className="flex space-x-3 md:space-x-4 ml-3 md:ml-4 text-[#5d3620]">
              {/* Search Icon */}
              {!showSearch && (
                <li>
                  <SearchIcon
                    onClick={toggleSearchInput}
                    className="cursor-pointer text-[#5d3620] w-6 h-6"
                  />
                </li>
              )}
              <li><PersonIcon className="cursor-pointer w-6 h-6" /></li>
              <li><FavoriteBorderIcon className="cursor-pointer w-6 h-6" /></li>
              <li><ShoppingBagIcon className="cursor-pointer w-6 h-6" /></li>
              <li><LocalShippingIcon className="cursor-pointer w-6 h-6" /></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="px-4 md:px-6 lg:px-8 mt-[-60px]">
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-4 md:gap-6 text-[#5d3620] font-medium text-sm md:text-base">
          <li className="hover:text-black flex items-center">
            NEW ARRIVALS <FiberNewIcon className="text-[#f35454] ml-1 w-5 h-5" />
          </li>
          <li className="hover:text-black">ETHNIC WEARS</li>
          <li className="hover:text-black">DRESSES</li>
          <li className="hover:text-black">SALVAR</li>
          <li className="hover:text-black">TOP & SHIRT</li>
          <li className="hover:text-black">WESTERN WEARS</li>
          <li className="hover:text-black">PARTY WEARS</li>
        </ul>
      </div>

      {/* Carousel */}
      <div className="px-0 md:px-4 lg:px-8">
        <Carousel className="carousel-responsive">
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 object-cover"
                style={{ maxHeight: '80vh' }}
                src={item.src}
                alt={item.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div>
        <p className='flex md:ml-[40%] pt-[50px] text-[#5d3620] font-light text-[40px]'>NEW ARRIVALS</p>
      </div>
      <div>
        <p className='flex md:ml-[34%] text-[#5d3620]'>A curated collection of the latest trends and timeless elegance.</p>
      </div>
      <NewArrivel/>
    </div>
  );
};

export default Home;
