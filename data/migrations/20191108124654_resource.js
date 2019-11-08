exports.up = function(knex) {
  return knex.schema.createTable("resource", tbl => {
    tbl.increments();

    tbl.string("name").notNullable();
    tbl.string("description");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist("resource");
};
