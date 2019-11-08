exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("project").insert([
        {
          name: "Denise",
          description: "I am the boss",
          completed: "false",
          task_id: 1,
          resource_id: 1
        }
      ]);
    });
};
