// Generated by CoffeeScript 1.3.3
var app, ecstatic, flatiron, jade, port;

flatiron = require('flatiron');

ecstatic = require('ecstatic');

jade = require('jade.plugin');

app = flatiron.app;

port = process.env.PORT || 3000;

app.use(flatiron.plugins.http);

app.use(jade.plugin, {
  dir: "" + __dirname + "/views",
  ext: '.jade'
});

app.http.before = [
  ecstatic(__dirname + '/../public', {
    autoIndex: false
  })
];

app.router.get('/', function() {
  return app.render(this.res, 'index');
});

app.start(port, function() {
  return console.log("Server Running on port " + port + "\nPress CTRL-C to quit...");
});