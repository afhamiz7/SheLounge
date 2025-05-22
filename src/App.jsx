import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import ProductDetails from './Components/ProductDetails';
import WishList from './Components/WishList';
import AddCart from './Components/AddCart';
import NewArrivals from './Components/NewArrivel';
import ShopByCollection from './Components/ShopByCollection';
import AllProducts from './Components/AllProducts';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/AddCart" element={<AddCart />} />
        <Route path="/Newarrivel" element={<NewArrivals/>} />
        <Route path="/PartyWears" element={<ShopByCollection/>} />
        <Route path="/Allproduct" element={<AllProducts/>} />
      </Routes>
    </Router>
  );
}

export default App;
