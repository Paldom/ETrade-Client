/*jslint nomen: true */
/*global define, alert, App*/

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        hammer = require('hammer'),
        tpl = require('text!templates/Options.html');

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
            'tap #btnReg': 'reg',
            'tap #btnExit': 'exit'
        },
        
        reg: function () {
            App.navigate("#/station/register");
        },
        
        exit: function () {
            App.navigate("#/home");
        }
        
    });

});