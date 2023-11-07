//Import required modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const catetoryRouter = require("./routes/category");
const collectionRouter = require("./routes/collection");
const productRoute = require("./routes/product");
const shopRoute = require("./routes/shop");
const penddingShopRoute = require("./routes/penddingShop");
const bookingRoute = require("./routes/booking");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

//This line loads the environment variables from a `.env` file into the `process.env` object.
dotenv.config();

//Set up middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/category", catetoryRouter);
app.use("/api/collection", collectionRouter);
app.use("/api/products", productRoute);
app.use("/api/shops", shopRoute);
app.use("/api/pendding-shops", penddingShopRoute);
app.use("/api/booking", bookingRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

// connect the mongoDB 
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfull!");
    app.listen(process.env.PORT || 5000, () => {
      console.log("Backend server is running!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
