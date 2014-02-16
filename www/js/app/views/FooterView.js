/*jslint nomen: true */
/*global define */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        hammer = require('hammer'),
        tpl = require('text!templates/Footer.html');

    return Backbone.Marionette.ItemView.extend({

        template: tpl,

        ui: {
        },

        initialize: function () {
            // this.bindUIElements();
        },

        onRender: function (that) {
           this.$el.hammer();
        },

        events: {
        }
        
    });

});