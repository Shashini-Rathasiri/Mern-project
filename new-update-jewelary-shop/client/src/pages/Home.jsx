import Header from "../components/header/Header";
import HomeTopSection from "../components/pageComponents/HomePageComponents/HomeTopSection";
import AboutUsSection from "../components/pageComponents/HomePageComponents/AboutUsSection";

import "../styles/pageStyle/home.css";
import NewArrivalsSction from "../components/pageComponents/HomePageComponents/NewArrivalsSction";
import BookingShopSection from "../components/pageComponents/HomePageComponents/BookingShopSection";
import ShopLogosection from "../components/pageComponents/HomePageComponents/ShopLogosection";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="main_container">
      <Header />
      {/* home top */}
      <HomeTopSection />
      {/* about us section */}
      <AboutUsSection />
      {/* new arrivals section */}
      <NewArrivalsSction />
      {/* Shop logo section */}
      <ShopLogosection />
      {/* booking shop section */}
      <BookingShopSection />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
