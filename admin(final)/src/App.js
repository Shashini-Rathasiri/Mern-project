import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Shops from "./pages/Shops";
import Category from "./pages/Category";
import Collections from "./pages/Collections";
import Products from "./pages/Products";
import Home from "./pages/Home";
import PenddingShops from "./pages/PenddingShops";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/pendding-shops" element={<PenddingShops />} />
        <Route path="/category" element={<Category />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
