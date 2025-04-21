import React, { useState } from 'react';
import PaymentIcon from '@mui/icons-material/Payment';
import MoneyIcon from '@mui/icons-material/Money';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import Woman2Icon from '@mui/icons-material/Woman2';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import FooterImg from '../assets/images/images/FooterImg.png';

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    category: false,
    info: false,
    support: false,
    connect: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      {/* Top Icon Row */}
      <div className="bg-black w-full h-[130px] flex justify-around items-center text-white text-center">
        <div className="flex flex-col items-center w-1/5">
          <PaymentIcon sx={{ fontSize: 35 }} />
          <p className="mt-2 text-sm font-medium">Secure Payment</p>
        </div>
        <div className="flex flex-col items-center w-1/5">
          <MoneyIcon sx={{ fontSize: 35, color: 'white' }} />
          <p className="mt-2 text-sm font-medium">Cash On Delivery</p>
        </div>
        <div className="flex flex-col items-center w-1/5">
          <OutlinedFlagIcon sx={{ fontSize: 35, color: 'white' }} />
          <p className="mt-2 text-sm font-medium">Made In India</p>
        </div>
        <div className="flex flex-col items-center w-1/5">
          <Woman2Icon sx={{ fontSize: 35, color: 'white' }} />
          <p className="mt-2 text-sm font-medium">Customer Service</p>
        </div>
        <div className="flex flex-col items-center w-1/5">
          <AirplaneTicketIcon sx={{ fontSize: 35, color: 'white' }} />
          <p className="mt-2 text-sm font-medium">Shipping Worldwide</p>
        </div>
      </div>

      {/* Newsletter Row */}
      <div className="bg-[#f9ede6] w-full py-10 px-6 md:px-16 flex flex-col md:flex-row gap-8 md:gap-0">
        <div className="w-full md:w-1/2">
          <h1 className="text-xl md:text-2xl font-semibold mb-4">Newsletter Subscription</h1>
          <p className="text-sm md:text-base text-gray-700">
            Sign up for weekly newsletters to receive information about the new arrivals, future events, and special discounts.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-white max-w-md p-3 border border-gray-400 rounded-md focus:outline-none"
          />
          <button className="bg-black h-[50px] w-[150px] text-white rounded-md">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Footer Sections */}
      <div className="mt-[15px] bg-[#f9ede6] grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-8">
        {/* TOP CATEGORY */}
        <div>
          <h3
            className="font-semibold text-lg mb-2 md:mb-4 cursor-pointer flex justify-between items-center md:cursor-default"
            onClick={() => toggleSection('category')}
          >
            TOP CATEGORY
            <span className="md:hidden">
              {openSections.category ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          </h3>
          {(openSections.category || window.innerWidth >= 768) && (
            <ul>
              <li>Suit Sets</li>
              <li>Kurta Sets</li>
              <li>Dresses</li>
              <li>Salvar</li>
              <li>Co-ord Sets</li>
              <li>Lehenga</li>
            </ul>
          )}
        </div>

        {/* INFORMATION */}
        <div>
          <h3
            className="font-semibold text-lg mb-2 md:mb-4 cursor-pointer flex justify-between items-center md:cursor-default"
            onClick={() => toggleSection('info')}
          >
            INFORMATION
            <span className="md:hidden">
              {openSections.info ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          </h3>
          {(openSections.info || window.innerWidth >= 768) && (
            <ul>
              <li>About Us</li>
              <li>Customer Reviews</li>
              <li>Return, Exchange, Refund And Cancellation</li>
              <li>Blogs</li>
              <li>Bulk Order / Wholesale</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Size Chart</li>
              <li>Sitemap</li>
            </ul>
          )}
        </div>

        {/* GET SUPPORT */}
        <div>
          <h3
            className="font-semibold text-lg mb-2 md:mb-4 cursor-pointer flex justify-between items-center md:cursor-default"
            onClick={() => toggleSection('support')}
          >
            GET SUPPORT
            <span className="md:hidden">
              {openSections.support ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          </h3>
          {(openSections.support || window.innerWidth >= 768) && (
            <ul>
              <li>Contact Us</li>
              <li>Submit for Return & Exchanges</li>
              <li>Track Your Orders</li>
              <li>Your Addresses</li>
            </ul>
          )}
        </div>

        {/* CONNECT WITH US */}
        <div>
          <h3
            className="font-semibold text-lg mb-2 md:mb-4 cursor-pointer flex justify-between items-center md:cursor-default"
            onClick={() => toggleSection('connect')}
          >
            CONNECT WITH US
            <span className="md:hidden">
              {openSections.connect ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          </h3>
          {(openSections.connect || window.innerWidth >= 768) && (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white max-w-md p-3 border border-gray-400 rounded-md focus:outline-none mb-4"
              />
              <div className="flex space-x-4">
                <Facebook sx={{ fontSize: 30, color: '#3b5998' }} />
                <Instagram sx={{ fontSize: 30, color: '#C13584' }} />
                <Twitter sx={{ fontSize: 30, color: '#1DA1F2' }} />
                <LinkedIn sx={{ fontSize: 30, color: '#0077B5' }} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;
