const express = require('express');
const routes = express.Router();

/*
routes.get('/', (request, response) => {
    return response.sendFile(__dirname + "/views/pages/index.html");
})
*/

// request, response 

routes.get('/views/pages/index.html', (req, res) => {
    return res.redirect('/');
})

module.exports = routes;