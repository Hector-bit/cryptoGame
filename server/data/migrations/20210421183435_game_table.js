
exports.up = function(knex) {
  return knex.schema.createTable('game_table', tbl => {
      tbl.increments();
      tbl
      .string('username')
      .notNullable()
      .unique();
      tbl
        .string('username')
        .notNullable()
        .unique();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('game_table')
};
