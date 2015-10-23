/*global module */
module.exports = function ( config ) {
  'use strict';

  var files = [
    '../bower_components/angular/angular.js',
    '../bower_components/angular-route/angular-route.js',
    '../bower_components/angular-mocks/angular-mocks.js',
    'https://cdn.firebase.com/js/client/2.2.4/firebase.js',
    'https://cdn.firebase.com/libs/angularfire/1.1.2/angularfire.min.js',
    '../src/scripts/**/*.js',
    '../test/unit/**/*.spec.js'
  ];

  config.set({
    files : files,
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['progress', 'coverage'],
    browsers: ['PhantomJS'],
    autoWatch: true,
    singleRun: false,
    colors: true
  });
}
