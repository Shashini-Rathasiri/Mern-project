const router = require("express").Router();
const Category = require("../models/Category");
const { verifyTokenAndAdmin } = require("./verifyToken");

// GET ALL CATEGORIES
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE CATEGORY
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newCategory = new Category({
    categoryName: req.body.categoryName,
    img: req.body.img,
  });

  try {
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
