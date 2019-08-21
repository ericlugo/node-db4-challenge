const db = require('../data/dbConfig.js');

const recipeModel = (module.exports = {});

recipeModel.getRecipes = function() {
  return db('recipe');
};

recipeModel.getShoppingList = function(recipe_id) {
  return db('measure')
    .join('recipe', 'measure.recipe_id', 'recipe.recipe_id')
    .join('ingredient', 'measure.ingredient_id', 'ingredient.ingredient_id')
    .select(
      'ingredient.name as ingredientName',
      'measure.amount as quantity',
      'measure.unit as unitOfMeasure',
    )
    .where('measure.recipe_id', recipe_id)
    .orderBy('ingredient.name');
};

recipeModel.getInstructions = function(recipe_id) {
  return db('instruction')
    .where('instruction.recipe_id', recipe_id)
    .orderBy('instruction.step_number');
};
