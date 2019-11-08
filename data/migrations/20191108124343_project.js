exports.up = function(knex) {
  return knex.schema.createTable("project", tbl => {
    tbl.increments();

    tbl.string("name").notNullable();
    tbl.string("description");
    tbl.boolean("completed").notNullable();

    tbl
      .integer("task_id")
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    tbl
      .integer("resource_id")
      .unsigned()
      .references("id")
      .inTable("directions")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExist("project")
    .dropTableIfExist("task")
    .dropTableIfExist("resource");
};
