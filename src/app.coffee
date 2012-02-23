require 'coffee-script'
coffeecup = require 'coffeecup'

flatiron = require 'flatiron'
app = flatiron.app
app.use flatiron.plugins.http
app.router.get '/', ->
  @res.writeHead 200, 'Content-Type': 'text/html'
  @res.end coffeecup.render ->
    doctype 5
    html ->
      head ->
        title 'Foo'
      body ->
        h1 'Welcome to Iron-Coffee'
        h3 'CoffeeScript Flatiron http server template!'

app.start 3000
