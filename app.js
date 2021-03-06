define(function (require, exports, module) {
/**
 * Module dependencies.
 */

var express = require('express');
var router = require('./routes/server_router');
var routes = require('routes');
var http = require('http');
var path = require('path');
var __dirname = path.dirname(module.uri);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public_release')));
} else {
  app.use(express.static(path.join(__dirname, 'public_development')));
}

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

router.registerRoutes(app, routes);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

});