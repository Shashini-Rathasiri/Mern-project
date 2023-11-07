const router = require("express").Router();
const Collection = require("../models/Collection");
const { verifyTokenAndAdmin } = require("./verifyToken");

// GET ALL COLLECTION
router.get("/", async (req, res) => {
  try {
    const collections = await Collection.find();
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE COLLECTION
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newCollection = new Collection({
    collectionName: req.body.collectionName,
    img: req.body.img,
  });

  try {
    const savedCollection = await newCollection.save();
    res.status(201).json(savedCollection);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
