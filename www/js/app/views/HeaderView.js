/*jslint nomen: true */
/*global define, window, alert, App */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        hammer = require('hammer'),
        tpl = require('text!templates/Header.html');

    return Backbone.Marionette.ItemView.extend({

        template: tpl,

        ui: {
            title: "#title",
            back: "#btnBack",
            backBox: "#btnBackBox",
            settings: "#btnSettings",
            settingsBox: "#btnSettingsBox"
        },

        initialize: function () {
            this.settingsLocation = "station/options";
            this.bindUIElements();
        },

        onRender: function (that) {
        },
        
        setTitle: function (titleString) {
            this.ui.title.text(titleString);
        },
                                                                            
        enableBack: function (isEnabled) {
            if (isEnabled) {
                this.ui.backBox.show();
            } else {
                this.ui.backBox.hide();
            }
        },
        
        enableSettings: function (isEnabled) {
            if (isEnabled) {
                this.ui.settingsBox.show();
            } else {
                this.ui.settingsBox.hide();
            }
        },
        
        setSettingsLocation: function (locationString) {
            this.settingLocation = locationString;
        },

        events: {
            'tap #btnBack': 'back',
            'tap #btnSettings': 'settings'
        },
        
        back: function () {
            window.history.back();
        },
        
        settings: function () {
            App.navigate("#/" + this.settingsLocation);
        }
        
    });

});