import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/Navbar";
import Footer from "../pages/shared/footer/Footer";
import ScrollToFix from "../components/scrollFix/ScrollToFix";

const Main = () => {
  return (
    <>
      <ScrollToFix />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
