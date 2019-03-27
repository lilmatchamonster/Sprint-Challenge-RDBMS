
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action: 'Install React', notes: 'Run create-react-app to get started.', action_completed: 'false', project_id: '2'}
      ]);
    });
};

// [
//   {
//       "id": 2,
//       "name": "Add Multi-button Navigation",
//       "description": "Add 3 fully functional nav buttons. One for home, about me, and contact.",
//       "completed": "false",
//       "action": "Add Home Button",
//       "notes": "Make sure button has hover effect and resizing.",
//       "project_id": 1
//   },
//   {
//       "id": 3,
//       "name": "Add Multi-button Navigation",
//       "description": "Add 3 fully functional nav buttons. One for home, about me, and contact.",
//       "completed": "false",
//       "action": "Add About Me Button",
//       "notes": "Make sure button has hover effect and rotation.",
//       "project_id": 1
//   }
// ]
