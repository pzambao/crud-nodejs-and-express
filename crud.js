const express = require('express'); // import express in "express" constant

const server = express(); // call express in "server" constant

server.use(express.json()); // Set express as a json before the request process

const courses = ['First Course', 'Second Course', 'Third Course']

// GET
server.get('/courses/:index', (req, res) => {
  const { index } = req.params
})

server.listen(3000); // set 3000 as local server port