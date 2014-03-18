/*jslint nomen: true */
/*global define, console, alert, App, navigator*/

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        tpl = require('text!templates/RegisterItem.html');

    return Backbone.Marionette.ItemView.extend({

        template: tpl,

        ui: {
            name : "#name",
	    colorsample: "#colorsample"
        },

        initialize: function () {
            this.bindUIElements();
        },

        onRender: function (that) {
            this.ui.name.text(this.model.get('name'));
            //this.ui.colorsample.text("BLA");
	    this.ui.colorsample.css("background-color", this.model.get('color'));
        },
        
        events: {
            'tap .regteam': 'selectTeam'
        },
        
        selectTeam: function () {
            //alert("Selected something");
	    App.teamregistering = this.model;
            App.navigate("#/station/register/team");
        }
        
    });
});