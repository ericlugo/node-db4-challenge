exports.seed = function(knex) {
  return knex('instruction').insert([
    {
      step_number: 1,
      description:
        'Version 1: Pour stout into a British pint glass and scoop coffee ice cream on top. Garnish with a dusting of cocoa powder.',
      recipe_id: 1,
    },
    {
      step_number: 2,
      description:
        'Version 2: Pour raspberry beer into a pint glass; top with vanilla ice cream.',
      recipe_id: 1,
    },
    {
      step_number: 3,
      description: 'Add a straw to each float and serve with spoons alongside.',
      recipe_id: 1,
    },
    {
      step_number: 1,
      description: 'Preheat oven to 425 degrees F (220 degrees C).',
      recipe_id: 2,
    },
    {
      step_number: 2,
      description:
        'Line a baking sheet with a silicone baking mat or parchment paper.',
      recipe_id: 2,
    },
    {
      step_number: 3,
      description:
        'Whisk flour, baking powder, salt, and baking soda together in a large bowl.',
      recipe_id: 2,
    },
    {
      step_number: 4,
      description:
        'Cut butter into flour mixture with a pastry blender until the mixture resembles coarse crumbs, about 5 minutes.',
      recipe_id: 2,
    },
    {
      step_number: 5,
      description:
        'Make a well in the center of butter and flour mixture. Pour in 3/4 cup buttermilk; stir until just combined.',
      recipe_id: 2,
    },
    {
      step_number: 6,
      description:
        'Turn dough onto a floured work surface, pat together into a rectangle.',
      recipe_id: 2,
    },
    {
      step_number: 7,
      description:
        'Fold the rectangle in thirds. Turn dough a half turn, gather any crumbs, and flatten back into a rectangle. Repeat twice more, folding and pressing dough a total of three times.',
      recipe_id: 2,
    },
    {
      step_number: 8,
      description: 'Roll dough on a floured surface to about 1/2 inch thick.',
      recipe_id: 2,
    },
    {
      step_number: 9,
      description:
        'Cut out 12 biscuits using a 2 1/2-inch round biscuit cutter.',
      recipe_id: 2,
    },
    {
      step_number: 10,
      description:
        'Transfer biscuits to the prepared baking sheet. Press an indent into the top of each biscuit with your thumb.',
      recipe_id: 2,
    },
    {
      step_number: 11,
      description: 'Brush the tops of biscuits with 2 tablespoons buttermilk.',
      recipe_id: 2,
    },
    {
      step_number: 12,
      description:
        'Bake in the preheated oven until browned, about 15 minutes.',
      recipe_id: 2,
    },
    {
      step_number: 1,
      description: 'Preheat oven to 350 degrees F (175 degrees C).',
      recipe_id: 3,
    },
    {
      step_number: 2,
      description:
        'Mix brown sugar, rice vinegar, maple syrup, and black pepper in a small bowl.',
      recipe_id: 3,
    },
    {
      step_number: 3,
      description:
        'Place bacon slices on cooling rack set over a baking sheet.',
      recipe_id: 3,
    },
    {
      step_number: 4,
      description:
        'Bake in the preheated oven for 10 minutes, turn slices, and bake another 5 minutes.',
      recipe_id: 3,
    },
    {
      step_number: 5,
      description:
        'Remove bacon and brush both sides with brown sugar mixture. Return bacon to the oven and bake another 5 minutes. Repeat basting every 5 minutes until bacon is browned and crisp, about 35 minutes.',
      recipe_id: 3,
    },
  ]);
};
