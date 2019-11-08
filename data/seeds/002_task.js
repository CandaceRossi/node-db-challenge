const tasks = [
  { description: "convert to boolean", completed: true },
  {
    description: "Win at Life",
    notes: "Try Your Best At All Things",
    completed: true
  },
  {
    description: "Pass This Sprint",
    notes: "Take Your Time",
    completed: true
  }
];
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("task").then(function() {
    // Inserts seed entries
    return knex("task").insert(tasks);
  });
};
