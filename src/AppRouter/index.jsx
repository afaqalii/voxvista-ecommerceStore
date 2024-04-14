import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import ProductListing from "../pages/ProductListing";
import PageNotFound from "../pages/PageNotFound";
import DashboardLayout from "./DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard/pages/homePage/DashboardHome";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute redirectPath="/signin">
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/*  routes that are protected  */}
          <Route index element={<Dashboard/>} />
          <Route path="orders" element={<h1>Coming soonF</h1>} />
          <Route path="listing" element={<h1>Coming soonF</h1>} />
          <Route path="products" element={<h1>Coming soonF</h1>} />
          <Route path="stats" element={<h1>Coming soonF</h1>} />

        </Route>
        {/* routes that are public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
