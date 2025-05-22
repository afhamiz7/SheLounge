import React, { createContext, useContext, useState } from 'react';


const WishlistContext = createContext(); 

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const toggleWishlistItem = (item) => {
    setWishlistItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
      return [...prev, item];
      }
    });
  };

  const addToCart = (item) => {
    const exists = cartItems.find((i) => i.id === item.id);
    if (!exists) {
      setCartItems((prev) => [...prev, item]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlistItem,
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
