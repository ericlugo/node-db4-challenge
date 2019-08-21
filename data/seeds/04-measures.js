exports.seed = function(knex) {
  return knex('measure').insert([
    {
      amount: 1,
      unit: 'cup',
      ingredient_id: 1,
      recipe_id: 1,
    },
    {
      amount: 1,
      unit: 'scoop',
      ingredient_id: 2,
      recipe_id: 1,
    },
    {
      amount: 1,
      unit: 'pinch',
      ingredient_id: 3,
      recipe_id: 1,
    },
    {
      amount: 1,
      unit: 'cup',
      ingredient_id: 4,
      recipe_id: 1,
    },
    {
      amount: 1,
      unit: 'scoop',
      ingredient_id: 5,
      recipe_id: 1,
    },
    {
      amount: 2,
      unit: 'cups',
      ingredient_id: 6,
      recipe_id: 2,
    },
    {
      amount: 2,
      unit: 'teaspoons',
      ingredient_id: 7,
      recipe_id: 2,
    },
    {
      amount: 1,
      unit: 'teaspoon',
      ingredient_id: 8,
      recipe_id: 2,
    },
    {
      amount: 0.25,
      unit: 'teaspoon',
      ingredient_id: 9,
      recipe_id: 2,
    },
    {
      amount: 7,
      unit: 'tablespoons',
      ingredient_id: 10,
      recipe_id: 2,
    },
    {
      amount: 0.75,
      unit: 'cup',
      ingredient_id: 11,
      recipe_id: 2,
    },
    {
      amount: 2,
      unit: 'tablespoons',
      ingredient_id: 12,
      recipe_id: 2,
    },
    {
      amount: 0.25,
      unit: 'cup',
      ingredient_id: 13,
      recipe_id: 3,
    },
    {
      amount: 2,
      unit: 'tablespoons',
      ingredient_id: 14,
      recipe_id: 3,
    },
    {
      amount: 2,
      unit: 'tablespoons',
      ingredient_id: 15,
      recipe_id: 3,
    },
    {
      amount: 1,
      unit: 'teaspoon',
      ingredient_id: 16,
      recipe_id: 3,
    },
    {
      amount: 1,
      unit: 'pound',
      ingredient_id: 17,
      recipe_id: 3,
    },
  ]);
};
