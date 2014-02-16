/*jslint nomen: true */
/*global requirejs, document, define, window */

requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.9.1.min',
        'underscore': 'lib/underscore-min-1.5.2',
        'backbone': 'lib/backbone-1.1.0.min',
        'marionette': 'lib/backbone.marionette-1.4.0.min',
        'text': 'lib/text',
        'hammer': 'lib/jquery.hammer-1.0.5.min',
        'transitionregion': 'lib/marionette.transitionregion'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'marionette': {
            deps: ['backbone', 'jquery'],
            exports: 'Marionette'
        },
        'transitionregion': {
            deps: ['marionette', 'backbone', 'jquery'],
            exports: 'Backbone.Marionette.TransitionRegion'
        }
    }
});

requirejs(['app'], function (App) {

    "use strict";

    window.App = App;
    App.start();

    document.addEventListener("deviceready", function () {
        // TODO: app itt indule
    }, false);

});