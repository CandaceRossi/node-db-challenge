const db = require("../data/dbconfig.js");

module.exports = {
  find
};

function find(id) {
  if (id) {
    return db("task")
      .where({ id })
      .first();
  } else {
    return db("tasks");
  }
}
