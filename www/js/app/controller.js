/*jslint nomen: true */
/*global define, App, window */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        HeaderView = require('app/views/HeaderView');

    return Backbone.Marionette.Controller.extend({

        initialize: function (options) {
            App.headerView = App.headerView || new HeaderView();
            App.headerRegion.show(App.headerView);
        },
        
        login: function () {
            App.headerView.setTitle("ETrade bejelentkezés");
            App.headerView.enableBack(false);
            App.headerView.enableSettings(false);
            require(["app/views/LoginView", "app/models/LoginModel"], function (View, Model) {
                App.contentRegion.show(new View({model: new Model()}));
            });
        },

        home: function () {
            App.headerView.setTitle("ETrade rendszer");
            App.headerView.enableBack(true);
            App.headerView.enableSettings(true);
            require(["app/views/HomeView"], function (View) {
                App.contentRegion.show(new View());
            });
        },

        other: function () {
        }

    });

});