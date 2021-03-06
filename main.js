var requirejs = require('requirejs');

// RequireJs configuration
// -----------------------
requirejs.config({
  nodeRequire: require,
  baseUrl: 'public_development/app',
  paths: {
    text: "../javascripts/text",
    'jquery': '../bower_components/jquery/jquery',
    'react': '../bower_components/react/react',
    'underscore': '../bower_components/underscore/underscore',
    'backbone': '../bower_components/backbone/backbone',

    // server specific paths
    layouts: '../../layouts'
  },
  shim: {
    'underscore': {
      deps: [],
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

// Inject the server side version of app
// -------------------------------------
//requirejs.define('app', [], function () {
//  return {}
//});

// Start up the actual Express server
// ----------------------------------
requirejs(['../../app'],function(app) {
  //app.listen(8000);
});
