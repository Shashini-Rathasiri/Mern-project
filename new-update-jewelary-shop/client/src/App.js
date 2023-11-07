import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Collection from "./pages/Collection";
import CategoryUnit from "./pages/CategoryUnit";
import CategoryItem from "./pages/CategoryItem";
import CollectionUnit from "./pages/CollectionUnit";
import CollectionItem from "./pages/CollectionItem";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Payment from "./pages/Payment";
import AddShop from "./pages/AddShop";
import MyShops from "./pages/MyShops";
import MyPenddingShop from "./pages/MyPenddingShop";
import ShoppingCart from "./pages/ShoppingCart";
import Completion from "./pages/Completion";
import UserBooking from "./pages/UserBooking";
import ShopBooking from "./pages/ShopBooking";
import ShopOrder from "./pages/ShopOrder";
import AddProduct from "./pages/AddProduct";
import ShopProductItems from "./pages/ShopProductItems";
import ShopProducts from "./pages/ShopProducts";
import ShopSearch from "./pages/ShopSearch";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* category routes */}
        <Route path="/category" element={<Category />} />
        <Route path="/category/:categoryId" element={<CategoryUnit />} />
        <Route
          path="/category/:categoryId/:categoryItemId"
          element={<CategoryItem />}
        />
        {/* collection routes */}
        <Route path="/collection/" element={<Collection />} />
        <Route path="/collection/:collectionId/" element={<CollectionUnit />} />
        <Route
          path="/collection/:collectionId/:collectionItemId"
          element={<CollectionItem />}
        />
        {/* about contact register login routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shops" element={<Shop />} />
        <Route path="/searchshops" element={<ShopSearch />} />
        <Route path="/shop-booking/:shopId" element={<ShopBooking />} />
        <Route path="/shopsearch/:shopId" element={<ShopProducts />} />
        <Route
          path="/shopsearch/:shopId/:shopItemId"
          element={<ShopProductItems />}
        />
        <Route path="/user-booking" element={<UserBooking />} />
        <Route path="/add-shop" element={<AddShop />} />
        <Route path="/my-shops" element={<MyShops />} />
        <Route path="/add-product/:shopId" element={<AddProduct />} />
        <Route path="/shop-orders/:shopId" element={<ShopOrder />} />
        <Route path="/my-pendding-shops" element={<MyPenddingShop />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/completion" element={<Completion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
