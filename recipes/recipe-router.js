const express = require('express');
const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    recipes &&
      res.status(200).json({
        success: true,
        message: 'Recipes retrieved.',
        recipes,
      });
    res.status(400).json({
      success: false,
      message: 'Error. Unable to retrieve recipes.',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Fatal Error.\n${err}`,
    });
  }
});

router.get('/:id/shoppingList', async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const shoppingList = await Recipes.getShoppingList(id);
      shoppingList &&
        res.status(200).json({
          success: true,
          message: 'Shopping list retrieved.',
          shoppingList,
        });
      res.status(400).json({
        success: false,
        message: 'Error. Unable to retrieve shopping list.',
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Fatal Error.\n${err}`,
    });
  }
});

router.get('/:id/instructions', async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const instructions = await Recipes.getInstructions(id);
      instructions &&
        res.status(200).json({
          success: true,
          message: 'Instructions retrieved.',
          instructions,
        });
      res.status(400).json({
        success: false,
        message: 'Error. Unable to retrieve instructions.',
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Fatal Error.\n${err}`,
    });
  }
});

module.exports = router;
