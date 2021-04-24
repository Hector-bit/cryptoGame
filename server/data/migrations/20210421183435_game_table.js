
exports.up = function(knex) {
  return knex.schema.createTable('game_table', tbl => {
      tbl.increments();
      tbl
      .integer('gamer_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('gamer')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
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