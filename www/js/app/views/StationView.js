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
            'tap #btnTrade': 'trade',
            'tap #btnTransfer': 'transfer',
            'tap #btnSteal': 'steal',
            'tap #btnBank': 'bank',
            'tap #btnIdentify' : 'qr'
        },
        
        trade: function () {
            App.navigate("#/station/trade");
        },
        
        transfer: function () {
            App.navigate("#/station/transfer");
        },
        
        steal: function () {
            App.navigate("#/station/steal");
        },
        
        bank: function () {
            App.navigate("#/station/bank");
        },
       
        qr: function () {
            cordova.plugins.barcodeScanner.scan(
               function (result) {
                  alert("We got a barcode\n" +
                     "Result: " + result.text + "\n" +
                     "Format: " + result.format + "\n" +
                     "Cancelled: " + result.cancelled);
               },
               function (error) {
                  alert("Scanning failed: " + error);
               }
            );
        }
        
    });

});