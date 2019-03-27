
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Database Creating', description: "Use the given data to create a database to handle projects and actions.", completed: "false"},
        {name: 'React Insta', description: "Use react to create a instagram like application.", completed: "false"}
      ]);
    });
};
