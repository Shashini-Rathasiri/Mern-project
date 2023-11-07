import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ShopSection from "../components/pageComponents/ShopPageComponents/ShopSection";
import "../styles/pageStyle/shop.css";

const Shop = () => {
  return (
    <div className="main_container">
      <Header />
      {/* shop section */}
      <ShopSection />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Shop;
