/*jslint nomen: true */
/*global define, window, IcomaticUtils, FastClick, document */


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
    

    App.Configs = {
        API : "http://localhost:3000"
    };
    
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
    
    var afterRender = function (view) {
        IcomaticUtils.run();
        new FastClick(document.body);
        $('body').hammer();
    };
    
    App.headerRegion.on("show", afterRender);
    App.contentRegion.on("show", afterRender);
    App.footerRegion.on("show", afterRender);

    return App;
});