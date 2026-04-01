import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromoBanner from "./components/PromoBanner";
import Testimonial from "./components/Testimonial";
import Collection from "./components/Colllection";
import Services from "./components/Services";
import CategorySection from "./components/CategorySection";
import Productlist from "./components/ProductList";
import Productdetails from "./pages/Productdetails";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import Wishlist from "./pages/Wishlist"; 
import BestSelling from "./components/BestSelling";
import VideoPromo from "./components/VideoPromo";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Menspage from "./pages/Menspage";
import Womenspage from "./pages/Womenspage";
import Accessoriespage from "./pages/Accessoriespage";
import Shop from "./pages/Shop";


function Home() {
  return (
    <>
      <Hero />
      <Collection />
      <Services />
      <CategorySection />
      <Productlist />
      <PromoBanner />
      <Testimonial />
      <BestSelling />
      <VideoPromo />
      <BlogSection />
      <Footer /> 
    </>
  );
}

function App() {

  useEffect(() => {
  fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("products", JSON.stringify(data));
    });
}, []);

  return (
    <CartProvider>
      <WishlistProvider>
      <BrowserRouter>
        <Navbar />

 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shops" element={<Productlist />} />
  <Route path="/product/:id" element={<Productdetails />} />
  <Route path="/cart" element={<CartPage />} />
  <Route path="/wishlist" element={<Wishlist />} />
  <Route path="/blog" element={<BlogSection />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/mens" element={<Menspage />} />
  <Route path="/womens" element={<Womenspage />} />
  <Route path="/accessories" element={<Accessoriespage />} />
  <Route path="/shop" element={<Shop />} />
</Routes>

      </BrowserRouter>
     </WishlistProvider>
    </CartProvider>
  );
}



export default App;
