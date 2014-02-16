/*jslint nomen: true */
/*global define, alert, App*/

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        hammer = require('hammer'),
        tpl = require('text!templates/Register.html');

    return Backbone.Marionette.ItemView.extend({

        template: tpl,

        ui: {
          // name : "#name",
        },

        initialize: function () {
            this.bindUIElements();
        },

        onRender: function (that) {
        },

        events: {
            'tap .team': 'regTeam',
            'tap #btnRegOne': 'regOne'
        },
        
        regTeam: function () {
            App.navigate("#/station/register/team");
        },
        
        regOne: function () {
            App.navigate("#/station/register/one");
        }
        
    });

});