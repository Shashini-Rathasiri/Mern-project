import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import AddShopContent from "../components/pageComponents/AddShopPageComponents/AddShopContent";
import "../styles/pageStyle/addShop.css";

const AddShop = () => {
  return (
    <div className="main_container">
      {/* header */}
      <Header />
      {/* add shop content */}
      <AddShopContent />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default AddShop;
