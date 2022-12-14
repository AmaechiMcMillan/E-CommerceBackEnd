// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

  
// Categories have many Products
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    foreignKey: 'product_id',
    unique: false
  },
  
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    foreignKey: 'tag_id',
    unique: false
  },
  
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
