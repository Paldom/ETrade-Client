/*jslint nomen: true */
/*global define, console, alert, App, navigator*/

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        tpl = require('text!templates/StationItem.html');

    return Backbone.Marionette.ItemView.extend({

        template: tpl,

        ui: {
            name : "#name",
            type : "#type"
        },

        initialize: function () {
            this.bindUIElements();
        },

        onRender: function (that) {
            this.ui.name.text(this.model.get('name'));
            this.ui.type.text(this.model.get('type'));
        },
        
        events: {
            'tap .station': 'selectStation'
        },
        
        selectStation: function () {
            App.station = this.model;
            App.navigate("#/station");
        }
        
    });
});