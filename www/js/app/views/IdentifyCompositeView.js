/*jslint nomen: true */
/*global define, alert, App, StationItemView */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        IdentifyItemView = require('app/views/IdentifyItemView'),
        tpl = require('text!templates/IdentifyComposite.html');

    return Backbone.Marionette.CompositeView.extend({

        template: tpl,

        itemViewContainer: "ul",

        itemView: IdentifyItemView,

        ui: {
            next: "#btnNext"
        },

        initialize: function () {
            this.bindUIElements();
        },

        onRender: function (that) {
            this.ui.next.attr('disabled', 'disabled');
            var self = this;
            App.setActiveNfcHandler(function (nfcEvent) {
                console.log("NFC azonosítva: " + nfc.bytesToHexString(nfcEvent.tag.id));
                self.collection.add({name: nfc.bytesToHexString(nfcEvent.tag.id)});
            });
        },
        
        close: function () {
            App.stopActiveNfcHandler();
        },

        setAction: function (action) {
            this.action = action;
        },

        events: {
            'tap #btnNext': 'next',
            'tap #btnIdentify': 'qr'
        },

        next: function () {
            App.navigate("#/station/" + this.action);
        },

        qr: function () {
            var self = this;
            var success = function (result) {
                if (result.text !== "") self.collection.add({name: result.text});
                self.checkEnabled();
            };
            var fail = function (error) {
                self.checkEnabled();
            };
            var notAvailable = function() {
                self.collection.add({
                    name: "qrkód"
                });
                self.checkEnabled();
            };
            App.qrscan(success,fail,notAvailable);
        },

        checkEnabled: function () {
            if (this.collection.length > 0) {
                this.ui.next.removeAttr('disabled');
            }
        }

    });

});