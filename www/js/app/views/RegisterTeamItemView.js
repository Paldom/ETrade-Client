/*jslint nomen: true */
/*global define, console, alert, App, navigator*/

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        tpl = require('text!templates/RegisterTeamItem.html');

    return Backbone.Marionette.ItemView.extend({

        template: tpl,

        ui: {
            name : "#name"
        },

        initialize: function () {
            this.bindUIElements();
        },

        onRender: function (that) {
            this.ui.name.text(this.model.get('name'));
        },
        
        events: {
            //'tap .station': 'selectStation'
        }
        
    });
});