import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoaderSkeleton from "./components/LoaderSkeleton";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import SearchModal from "./components/SearchModal";
import { useSelector } from "react-redux";
import CartSideBar from "./components/CartSideBar";
import Shoppage from "./pages/Shoppage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

export default function Layout() {
  const searchModalData = useSelector((state) => state.FunctionalSlice.searchModal);


  return (
    <>
      {/* <LoaderSkeleton /> */}
      <Header />
      <CartSideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/details" element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
      {searchModalData && <SearchModal />}
    </>
  );
}
