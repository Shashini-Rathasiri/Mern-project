const PenddingShop = require("../models/PenddingShop");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyToken, async (req, res) => {
  const newShop = new PenddingShop(req.body);

  try {
    const savedShop = await newShop.save();
    res.status(200).json(savedShop);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedShop = await PenddingShop.findByIdAndUpdate(
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
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await PenddingShop.findByIdAndDelete(req.params.id);
    res.status(200).json("Shop has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SHOP
router.get("/find/:id", async (req, res) => {
  try {
    const shop = await PenddingShop.findById(req.params.id);
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

  try {
    let shops;

    if (qNew) {
      shops = await PenddingShop.find().sort({ createdAt: -1 }).limit(1);
    } else if (qUser) {
      shops = await PenddingShop.find({
        userIds: {
          $in: [qUser],
        },
      }).sort({
        createdAt: -1,
      });
    } else if (qUserId) {
      shops = await PenddingShop.find({
        userId: qUserId,
      }).sort({
        createdAt: -1,
      });
    } else {
      shops = await PenddingShop.find().sort({
        createdAt: -1,
      });
    }

    res.status(200).json(shops);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
