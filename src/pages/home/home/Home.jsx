import useTitle from "../../../hooks/useTitle";
import Banner from "../banner/Banner";
import ContactUs from "../contactUs/ContactUs";
import Gallery from "../gallery/Gallery";
import ShopByCategory from "../shopByCategory/ShopByCategory";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
  // use dynamic title
  useTitle("");
  return (
    <div>
      <Banner />
      <Gallery />
      <ShopByCategory />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
