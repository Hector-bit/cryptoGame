
exports.up = function(knex) {
  return knex.schema.createTable('game_table', tbl => {
      tbl.increments();
      tbl
      .string('game_name')
      .notNullable()
      .unique();
      tbl
      .integer('dollars');
      tbl
      .integer('bitcoin');
      tbl
      .integer('litecoin');
      tbl
      .integer('dogecoin');
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('game_table')
}; 