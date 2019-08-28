exports.seed = function(knex) {
  return knex('ingredient').insert([
    {
      name: 'Chocolate Stout Beer',
    },
    {
      name: 'Coffee Ice Cream',
    },
    {
      name: 'Unsweetened Cocoa Powder',
    },
    {
      name: 'Belgian-Style Raspberry Sour Beer',
    },
    {
      name: 'Vanilla Ice Cream',
    },
    {
      name: 'All-Purpose Flour',
    },
    {
      name: 'Baking Powder',
    },
    {
      name: 'Salt',
    },
    {
      name: 'Baking Soda',
    },
    {
      name: 'Unsalted Butter - Chilled in freezer. Cut into thin slices',
    },
    {
      name: 'Cold Buttermilk',
    },
    {
      name: 'Buttermilk',
    },
    {
      name: 'Brown Sugar',
    },
    {
      name: 'Rice Vinegar',
    },
    {
      name: 'Maple Syrup',
    },
    {
      name: 'Ground Black Pepper',
    },
    {
      name: 'Thick-Cut Bacon',
    },
  ]);
};
