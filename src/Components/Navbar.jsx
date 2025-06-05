import React, { useState } from "react";
import SheImg from "../assets/images/SheImg.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Avery from "../assets/images/Avery.png";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";
import { motion } from "framer-motion";
import Login from "./Login";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

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
    { name: "NEW ARRIVALS", category: "NEW ARRIVELS" },
    { name: "ETHNIC WEARS", category: "ETHNIC WEAR" },
    { name: "DRESSES", category: "DRESSES" },
    { name: "SALVAR", category: "SALVAR" },
    { name: "TOP & SHIRT", category: "TOP/SHIRT" },
    { name: "WESTERN WEARS", category: "WESTERN WEAR" },
    { name: "PARTY WEARS", category: "PARTY WEAR" },
  ];

  return (
    <div className="bg-[#ebe3d8] w-full">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-[#ebe3d8] shadow-md py-4 md:h-[150px]">
        {/* First Row */}
        <div className="flex justify-between items-center px-6 md:px-12 relative">
          <div>
            <Link to="/">
              <img
                src={SheImg}
                className="w-14 md:w-20 animate-triple-flip-reset logo-bottom-shadow cursor-pointer"
                alt="SheImg"
              />
            </Link>
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
                <SearchIcon
                  onClick={toggleSearchInput}
                  className="cursor-pointer w-6 h-6"
                />
              )}
            </div>

            {/* Desktop Icons */}
            <div
              className={`hidden md:flex gap-3 ${
                showSearch ? "hidden" : "flex"
              }`}
            >
              <PersonIcon
                onClick={toggleLoginOverlay}
                className="cursor-pointer w-6 h-6"
              />
              <FavoriteBorderIcon
                onClick={() => navigate("/wishlist")}
                className="cursor-pointer w-6 h-6"
              />
              <ShoppingBagIcon
                onClick={() => navigate("/AddCart")}
                className="cursor-pointer w-6 h-6"
              />
              <LocalShippingIcon className="cursor-pointer w-6 h-6" />
            </div>

            {/* Mobile Icons */}
            <div
              className={`flex md:hidden gap-3 ${
                showSearch ? "hidden" : "flex"
              }`}
            >
              <FavoriteBorderIcon
                onClick={() => navigate("/wishlist")}
                className="cursor-pointer w-6 h-6"
              />
              <ShoppingBagIcon className="cursor-pointer w-6 h-6" />
              <LocalShippingIcon className="cursor-pointer w-6 h-6" />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <MenuIcon
                onClick={toggleMenu}
                className="cursor-pointer w-6 h-6"
              />
            </div>
          </div>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex justify-center mt-2">
          <ul className="flex gap-6 font-semibold text-lg relative text-[#5d3620]">
            {menuLinks.map((link, index) => (
              <li
                key={index}
                className="relative cursor-pointer flex flex-col items-center gap-2 group"
              >
                <span
                  onClick={() =>
                    navigate("/Allproduct", {
                      state: { category: link.category },
                    })
                  }
                  className="cursor-pointer"
                >
                  {link.name}
                </span>
                <motion.div className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Dropdown */}
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 py-4 bg-[#ebe3d8] shadow-md z-40"
          >
            <ul className="flex flex-col gap-4 text-[#5d3620] font-semibold text-base">
              {menuLinks.map((link, index) => (
                <li
                  key={index}
                  onClick={toggleMenu}
                  className="cursor-pointer border-b text-[#5d3620] border-gray-300 pb-2"
                >
                  <Link
                    to="/Allproduct"
                    state={{ category: link.category }}
                    className="text-[#5d3620] no-underline hover:no-underline"
                    style={{ color: "#5d3620", textDecoration: "none" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      {/* Login Overlay */}
      <Login isOpen={showLogin} onClose={toggleLoginOverlay} />
    </div>
  );
};

export default Navbar;
