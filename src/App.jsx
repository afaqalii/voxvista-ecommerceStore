import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import ProductListing from "./pages/ProductListing";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/productListing" element={<ProductListing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
