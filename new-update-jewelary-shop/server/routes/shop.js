const Shop = require("../models/Shop");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newShop = new Shop(req.body);

  try {
    const savedShop = await newShop.save();
    res.status(200).json(savedShop);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedShop = await Shop.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedShop);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Shop.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SHOP
router.get("/find/:id", async (req, res) => {
  try {
    const shop = await Shop.findById(req.params.id);
    res.status(200).json(shop);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL SHOPS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qUser = req.query.user;
  const qUserId = req.query.userId;
  const qName = req.query.name;
  const qLocation = req.query.location;

  try {
    let shops;

    if (qNew) {
      shops = await Shop.find().sort({ createdAt: -1 }).limit(1);
    } else if (qUser) {
      shops = await Shop.find({
        userIds: {
          $in: [qUser],
        },
      }).sort({
        createdAt: -1,
      });
    } else if (qUserId) {
      shops = await Shop.find({
        userId: qUserId,
      }).sort({
        createdAt: -1,
      });
    } else if (qName) {
      shops = await Shop.find({
        shopName: qName,
      }).sort({
        createdAt: -1,
      });
    } else if (qLocation) {
      shops = await Shop.find({
        location: qLocation,
      }).sort({
        createdAt: -1,
      });
    } else {
      shops = await Shop.find().sort({
        createdAt: -1,
      });
    }

    res.status(200).json(shops);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
