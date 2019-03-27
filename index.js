const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const server = express();
const parser = express.json();

server.use(parser, helmet());

//Get Projects
server.get('/api/projects', async (req, res) => {
  try {
    const projects = await db('projects');
    res.status(200).json(projects);
  }
  catch (error) {
    res.status(500).json(error);
  }
})

//Get Project by ID and Any Associated Actions 
server.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await db('projects')
      .where({id: req.params.id})
      .first()

    const actions = await db('actions')
      .where({project_id: req.params.id})

    project.actions = actions;
    console.log(project)
    res.status(200).json(project)
  }
  catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

//Add Project
server.post('/api/projects', async (req, res) => {
  try {
    const [id] = await db('projects')
      .insert(req.body);
    res.status(200).json(id);
  }
  catch (error) {
    res.status(500).json(error);
  }
})

//Add Action to a Project
server.post('/api/projects/:id/actions', async (req, res) => {
  const { id } = req.params;
  const newAction = req.body;

  const addedAction = {project_id: id, ...newAction}
  try {
    const id = await db('actions')
      .insert(addedAction);
    console.log(id)
    res.status(200).json(id);
  }
  catch (error) {
    res.status(500).json(error);
  }
})

//Get Actions
server.get('/api/actions', async (req, res) => {
  try {
    const actions = await db('actions');
    res.status(200).json(actions);
  }
  catch (error) {
    res.status(500).json(error);
  }
})


const PORT = '9090'
server.listen(PORT, () => console.log(`\nListening on port: ${PORT}\n`));
