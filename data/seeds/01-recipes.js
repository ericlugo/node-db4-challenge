exports.seed = function(knex) {
  return knex('recipe').insert([
    {
      name: 'Beer Floats',
      description:
        'Making ice cream floats with beer is either a genius idea, or a horrible mistake.',
    },
    {
      name: 'Buttermilk Biscuits',
      description:
        'Flaky, but not dry; chewy, but not tough; crisp in just the right spots.',
    },
    {
      name: 'Candied Bacon',
      description: 'This makes a great party snack.',
    },
  ]);
};
