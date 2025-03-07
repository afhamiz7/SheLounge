import React, { useState } from 'react';
import SheImg from '../assets/images/SheImg.png';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchIcon from '@mui/icons-material/Search';
import Avery from '../assets/images/Avery.png';
import './style.css';

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearchInput = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <div className="bg-[#ebe3d8] min-h-screen w-full">
        {/* Navbar */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src={SheImg}
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
              alt="SheImg"
            />
            <img
              src={Avery}
              alt="Avery"
              className="w-[150px] md:w-[200px] mt-[-30px] md:mt-[-50px]"
            />
          </div>

          {/* Search and Icons Section */}
          <div className="flex items-center mt-4 md:mt-0">
            {/* Search Icon and Input */}
            <div className="relative">
              <SearchIcon
                onClick={toggleSearchInput}
                className="cursor-pointer text-[#5d3620]"
              />
              <div
                className={`search-container absolute top-8 left-0 ${
                  showSearch ? 'show' : ''
                }`}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input p-2 border rounded-md w-[150px] md:w-[200px]"
                />
              </div>
            </div>

            {/* Other Icons */}
            <ul className="flex space-x-4 ml-4 text-[#5d3620]">
              <li>
                <PersonIcon className="cursor-pointer" />
              </li>
              <li>
                <FavoriteBorderIcon className="cursor-pointer" />
              </li>
              <li>
                <ShoppingBagIcon className="cursor-pointer" />
              </li>
              <li>
                <LocalShippingIcon className="cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-8 px-4">
          <ul className="flex flex-wrap justify-center gap-4 text-[#5d3620] font-[500]">
            <li className="hover:text-black flex items-center">
              NEW ARRIVALS <FiberNewIcon className="text-[#f35454] ml-1" />
            </li>
            <li className="hover:text-black">ETHNIC WEARS</li>
            <li className="hover:text-black">DRESSES</li>
            <li className="hover:text-black">SALVAR</li>
            <li className="hover:text-black">TOP & SHIRT</li>
            <li className="hover:text-black">WESTERN WEARS</li>
            <li className="hover:text-black">PARTY WEARS</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;