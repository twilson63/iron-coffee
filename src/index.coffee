flatiron = require 'flatiron'
ecstatic = require 'ecstatic'
jade = require 'jade.plugin'
app = flatiron.app
port = process.env.PORT or 3000

# plugins
app.use(flatiron.plugins.http)
app.use(jade.plugin, dir: "#{__dirname}/views", ext: '.jade')

app.http.before = [
  ecstatic(__dirname + '/../public', { autoIndex: false })
]
# routes
app.router.get '/', -> app.render @res, 'index'

# start server
app.start port, ->
  console.log """
    Server Running on port #{port}
    Press CTRL-C to quit...
  """
