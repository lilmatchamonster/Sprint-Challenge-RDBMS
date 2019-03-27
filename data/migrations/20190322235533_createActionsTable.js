
exports.up = function(knex, Promise) {
  return  knex.schema.createTable('actions', table => {
    table.increments();
    table.string("action", 1000)
      .notNullable();
    table.string("notes", 1000);
    table.boolean("action_completed");

      table.integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
