const express = require('express'); // import express in "express" constant

const server = express(); // call express in "server" constant

// req = request data
// res = request response to front-end

// Query params = params used after the route
//  Ex.: write "?name=PZambao" after the route "/users" in the browser

server.get('/users', (req, res) => {
  const name = req.query.name
  
  return res.json({ name: `What's up, ${name}?`})
})

// Route params = params used in route
//  Ex.: /user/id

server.get('/user/:id', (req, res) => {
  const id = req.params.id
  
  return res.json({ name: `User ${id} of list`})
})

server.listen(3030); // set 3030 as local server port