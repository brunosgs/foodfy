const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

server.set('viwe engine', 'njk')
server.use(express.static('public'))
server.use(function(req, res) {
    res.send("Página não encontrada!")
})

nunjucks.configure('views', {
    express: server
})

server.listen(5000, function() {
    console.log("Server is running...")
})