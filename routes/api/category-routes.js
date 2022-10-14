const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get("/", async (req, res) => {
  Category.findAll({
    // include product
    include: [{ model: Product }],
  })
    .then((Categories) => res.json(Categories))
    .catch((err) => res.json(err));
});

router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: Product }],
  }) //include product
    .then((Categories) => res.json(Categories))
    .catch((err) => res.json(err));
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((Categories) => res.json(Categories))
    .catch((err) => res.json(err));
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((Categories) => res.json(Categories))
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((Categories) => res.json(Categories))
    .catch((err) => res.json(err));
});

module.exports = router;
