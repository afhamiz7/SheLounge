import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SheIcon from '../assets/images/images/SheImg.png';
import './Style.css';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PaymentsIcon from '@mui/icons-material/Payments';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-[#ebe3d8] p-6 rounded-lg shadow-lg w-[75%] h-[500px] relative flex">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-lg text-gray-600 hover:text-gray-800"
          >
            <CloseIcon />
          </button>

          {/* Content Wrapper */}
          <div className="flex w-full">
            {/* Welcome Section */}
            <div className="flex flex-col justify-start items-center w-1/2 pr-4">
              <div className="w-[100px] mb-4 perspective">
                <img
                  src={SheIcon}
                  alt="Welcome"
                  className="w-full h-auto animate-triple-flip-reset"
                />
              </div>
              <p className="text-lg text-center mb-4">
                Welcome! Register to avail the best deals!
              </p>

              {/* Cards with Animated Icons */}
              <div className="flex w-full justify-between gap-8">
                {/* Card 1 */}
                <div className="bg-black p-4 rounded-md shadow-md flex flex-col items-center w-[30%] h-[250px] text-white transition-transform duration-300 hover:scale-105">
                  <AssignmentReturnIcon />
                  <p className="text-center font-semibold mb-1">Hassle-Free Returns</p>
                  <p className="text-center text-sm">Worry-free shopping with our easy return policy!</p>
                </div>

                {/* Card 2 */}
                <div className="bg-black p-4 rounded-md shadow-md flex flex-col items-center w-[30%] h-[250px] text-white transition-transform duration-300 hover:scale-105">
                  <DeliveryDiningIcon />
                  <p className="text-center font-semibold mb-1">Fast Delivery</p>
                  <p className="text-center text-sm">Get your items quickly with our delivery service.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-black p-4 rounded-md shadow-md flex flex-col items-center w-[30%] h-[250px] text-white transition-transform duration-300 hover:scale-105">
                  <PaymentsIcon />
                  <p className="text-center font-semibold mb-1">Secure Payment</p>
                  <p className="text-center text-sm">Your transactions are protected with encryption.</p>
                </div>
              </div>
            </div>

            {/* Login Form Section */}
            <div className="flex flex-col justify-center items-center transition-transform duration-300 hover:scale-110">
              <div className="ml-[100px] bg-black w-[300px] h-[400px] flex justify-center items-center rounded-md shadow-md">
                <form className="w-full flex flex-col items-center px-4 text-center">
                  {/* Top Small Text */}

                  <div className="mb-4 w-full flex flex-col items-center">
                    <h3 className="text-white text-lg font-semibold mb-2 text-center">
                      Unlock Superior Discounts
                    </h3>
                    <p className="text-sm mb-2 text-white text-center">
                      ENTER YOUR MOBILE NUMBER
                    </p>
                    <input
                      type="text"
                      className="bg-white w-[250px] h-[50px] border-none focus:outline-none px-4 rounded-md"
                      placeholder="ENTER MOBILE NUMBER"
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-4 h-4 accent-[#25D366] cursor-pointer"
                    />
                    <label htmlFor="terms" className="text-xs text-white cursor-pointer">
                      Notify me for any updates & offers
                    </label>
                  </div>

                  {/* WhatsApp Login Button */}
                  <button
                    className="w-[250px] py-2 text-white bg-[#25D366] border border-[#1DA851] rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105"
                    type="submit"
                  >
                    <WhatsAppIcon />
                    <span className="font-semibold">Login with WhatsApp</span>
                  </button>

                  {/* Bottom Small Text */}
                  <p className="text-[10px] text-gray-400 mt-3">
                  I accept that I have read & understood Gokwik's <br />
                    <p className="text-[10px] text-gray-400 mt-3 underline cursor-pointer">
                        Privacy Policy and T&Cs
                        </p>

                  </p>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
