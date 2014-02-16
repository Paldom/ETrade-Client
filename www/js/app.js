/*jslint nomen: true */
/*global define, window */


define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        Transitionregion = require('transitionregion'),
        Router = require('app/router'),
        Controller = require('app/controller'),
        App = new Backbone.Marionette.Application();
    

    App.addRegions({
        headerRegion: {
            selector: "#header"
        },
        contentRegion: {
            selector: "#content",
            regionType: Backbone.Marionette.TransitionRegion
        },
        footerRegion: {
            selector: "#footer"
        }
    });

    App.navigate = function (route, options) {
        options = options || {};
        Backbone.history.navigate(route, options);
    };

    App.addInitializer(function () {
        App.Router = new Router({
            controller: new Controller()
        });
        Backbone.history.start();
    });

    return App;
});