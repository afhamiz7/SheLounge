import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useWishlist } from "./MyContext";
import CloseIcon from "@mui/icons-material/Close";
import { Slider } from "@mui/material";
import SheIcon from "../assets/images/images/SheImg.png";
import "./Style.css";

const stepLabels = {
  1: "Phone",
  2: "Address",
  3: "Payment",
};

const AddCart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useWishlist();
  const [showPayment, setShowPayment] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const openPayment = (item) => {
    setSelectedItem(item);
    setStep(1);
    setShowPayment(true);
  };

  const closePayment = () => {
    setSelectedItem(null);
    setShowPayment(false);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-3">
            <label className="block text-left font-semibold">Phone Number</label>
            <input
              type="tel"
              className="w-full border px-3 py-2 rounded bg-white"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="flex justify-between">
              <div></div>
              <button
                onClick={nextStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-3">
            <label className="block text-left font-semibold">Shipping Address</label>
            <textarea
              className="w-full border px-3 py-2 rounded bg-white"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-200 text-black px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                Continue
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-3">
            <label className="block text-left font-semibold">Payment Method</label>
            <select
              className="w-full border px-3 py-2 rounded bg-white"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Select Payment Method</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="cod">Cash on Delivery</option>
            </select>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-200 text-black px-4 py-2 rounded"
              >
                Back
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Pay Now
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#ebe3d8] min-h-screen w-full">
      <Navbar />
      <div
        onClick={() => navigate("/")}
        className="flex items-center cursor-pointer mb-4 px-4 pt-2"
      >
        <KeyboardBackspaceIcon fontSize="medium" />
        <h4 className="ml-1">Home</h4>
      </div>

      <h1 className="text-center text-xl font-bold">Cart Items</h1>

      {cartItems.length === 0 ? (
        <p className="text-center mt-4">No items in cart.</p>
      ) : (
        <div className="grid gap-4 mt-4 px-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow flex gap-4">
              <img
                src={item.images?.[0]}
                alt={item.name}
                className="w-[100px] h-[100px] object-cover"
              />
              <div className="flex flex-col justify-between w-full">
                <div>
                  <h2 className="font-semibold">{item.description}</h2>
                  <p className="text-gray-700">Price: {item.price}</p>
                  <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    className="bg-black text-white px-3 py-1 rounded text-sm"
                    onClick={() => openPayment(item)}
                  >
                    Checkout
                  </button>
                  <button
                    className="text-red-500 text-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Payment Overlay */}
      {showPayment && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2 md:px-0">
          <div className="bg-[#ebe3d8] rounded shadow-lg w-[350px] h-[600px] md:w-[900px] md:h-auto flex flex-col md:flex-row relative overflow-y-auto md:overflow-visible">
            {/* Close Button */}
            <button
              onClick={closePayment}
              className="absolute top-2 right-2 text-gray-500 hover:text-black z-10"
            >
              <CloseIcon />
            </button>

            {/* Mobile: Animated SheIcon on top */}
            <div className="block md:hidden w-full mt-4 flex justify-center">
              <img
                src={SheIcon}
                alt="Welcome"
                className="w-[80px] h-auto animate-triple-flip-reset"
              />
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-4 flex flex-col items-center md:items-start order-2 md:order-none">
              <img
                src={selectedItem.images?.[4]}
                className="w-full h-[200px] object-cover rounded md:w-full"
              />
              <h2 className="text-lg font-bold mt-3 text-center md:text-left">
                {selectedItem.description}
              </h2>
              <p className="text-sm text-gray-700 mt-1">Size: {selectedItem.selectedSize}</p>
              <p className="text-sm text-gray-700">Price: {selectedItem.price}</p>
            </div>

            {/* Form Steps */}
            <div className="md:w-1/2 p-4 w-full">
              {/* Desktop: Animated SheIcon */}
              <div className="hidden md:block w-[80px] mb-4 perspective mx-auto md:mx-0">
                <img
                  src={SheIcon}
                  alt="Welcome"
                  className="w-full h-auto animate-triple-flip-reset"
                />
              </div>

              {/* Step slider (desktop only) */}
              <div className="mb-6 hidden md:block">
                <Slider
                  value={step}
                  step={1}
                  marks={[
                    { value: 1, label: stepLabels[1] },
                    { value: 2, label: stepLabels[2] },
                    { value: 3, label: stepLabels[3] },
                  ]}
                  min={1}
                  max={3}
                  disabled
                />
              </div>

              {/* Step Form Content */}
              {renderStepContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCart;
