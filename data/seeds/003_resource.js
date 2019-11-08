const resources = [
  {
    name: "Marvelle",
    description: "Queen"
  },
  {
    name: "Bryan",
    description: "King"
  },
  {
    name: "Magi"
  }
];
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resource").then(function() {
    // Inserts seed entries
    return knex("resource").insert(resources);
  });
};
