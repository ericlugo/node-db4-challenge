exports.up = function(knex) {
  return knex.schema
    .createTable(`recipe`, (tbl) => {
      tbl.increments(`recipe_id`);
      tbl.string(`name`, 128).notNullable();
      tbl.string(`description`);
    })
    .createTable(`instruction`, (tbl) => {
      tbl.increments(`instruction_id`);
      tbl
        .integer(`step_number`)
        .unsigned()
        .notNullable();
      tbl.string(`description`).notNullable();
      tbl
        .integer(`recipe_id`)
        .unsigned()
        .notNullable()
        .references(`recipe_id`)
        .inTable(`recipe`)
        .onUpdate(`CASCADE`)
        .onDelete(`CASCADE`);
    })
    .createTable(`ingredient`, (tbl) => {
      tbl.increments(`ingredient_id`);
      tbl.string(`name`, 128).notNullable();
      tbl.string(`description`);
    })
    .createTable(`measure`, (tbl) => {
      tbl.increments(`measure_id`);
      tbl.float(`amount`).notNullable();
      tbl.string(`unit`, 128).notNullable();
      tbl
        .integer(`ingredient_id`)
        .unsigned()
        .notNullable()
        .references(`ingredient_id`)
        .inTable(`ingredient`)
        .onUpdate(`CASCADE`)
        .onDelete(`CASCADE`);
      tbl
        .integer(`recipe_id`)
        .unsigned()
        .notNullable()
        .references(`recipe_id`)
        .inTable(`recipe`)
        .onUpdate(`CASCADE`)
        .onDelete(`CASCADE`);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists(`measure`)
    .dropTableIfExists(`instruction`)
    .dropTableIfExists('ingredient')
    .dropTableIfExists(`recipe`);
};
