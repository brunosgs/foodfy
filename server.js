const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

server.listen(5000, function() {
    console.log("Server is running...")
})

server.set('view engine', 'njk')
server.use(express.static('public'))

nunjucks.configure('views', {
    express: server,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("home", { cards: data })
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.get("/recipe", function(req, res) {
    return res.render("recipe", { cards: data })
})

server.get("/recipe/:id", function(req, res) {
    const recipes = data
    const idRecipe = req.params.id

    return res.render("info-recipe", { recipe: recipes[idRecipe] })
})