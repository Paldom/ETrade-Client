/*jslint nomen: true */
/*global define, alert, App*/

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        hammer = require('hammer'),
        tpl = require('text!templates/Home.html');

    return Backbone.Marionette.ItemView.extend({

        template: tpl,

        ui: {
          // name : "#name",
        },

        initialize: function () {
            this.bindUIElements();
        },

        onRender: function (that) {
           this.$el.hammer();
        },

        events: {
            // 'tap #name': 'function'
        }
        
    });

});