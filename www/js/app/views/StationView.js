/*jslint nomen: true */
/*global define, alert, App, cordova */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        hammer = require('hammer'),
        tpl = require('text!templates/Station.html');

    return Backbone.Marionette.CompositeView.extend({

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
            'tap #btnTrade': 'trade',
            'tap #btnTransfer': 'transfer',
            'tap #btnSteal': 'steal',
            'tap #btnBank': 'bank'
        },
        
        trade: function () {
            App.navigate("#/station/identify/trade");
        },
        
        transfer: function () {
            App.navigate("#/station/identify/transfer");
        },
        
        steal: function () {
            App.navigate("#/station/identify/steal");
        },
        
        bank: function () {
            App.navigate("#/station/identify/bank");
        }
        
    });

});