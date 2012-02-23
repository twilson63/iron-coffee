var app, coffeecup, flatiron;

require('coffee-script');

coffeecup = require('coffeecup');

flatiron = require('flatiron');

app = flatiron.app;

app.use(flatiron.plugins.http);

app.router.get('/', function() {
  this.res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  return this.res.end(coffeecup.render(function() {
    doctype(5);
    return html(function() {
      head(function() {
        return title('Foo');
      });
      return body(function() {
        h1('Welcome to Iron-Coffee');
        return h3('CoffeeScript Flatiron http server template!');
      });
    });
  }));
});

app.start(3000);
