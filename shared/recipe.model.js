const mongoose = require('mongoose');
const RecipeSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: [
        'SHELLS',
        'BASE_LAYERS',
        'MIXINS',
        'SEASONINGS',
        'CONDIMENTS',
        'FULL_TACOS'
      ]
    },
    title: String,
    description: String,
    ingredients: [String],
    steps: [String],
    tags: [String]
  },
  {
    collection: 'Recipes',
    read: 'nearest'
  }
);
const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
