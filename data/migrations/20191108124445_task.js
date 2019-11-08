exports.up = function(knex) {
  return knex.schema.createTable("task", tbl => {
    tbl.increments();

    tbl.string("description").notNullable();
    tbl.string("notes");
    tbl.boolean("completed").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist("task");
};
