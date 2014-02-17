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
            next : "#btnNext"
        },

        initialize: function () {
            this.bindUIElements();
        },
        
        onRender: function (that) {
            this.ui.next.attr('disabled','disabled');
        },

        setAction: function(action) {
            this.action = action;   
        },
        
        events: {
            'tap #btnNext': 'next',
            'tap #btnIdentify' : 'qr'
        },
        
        next: function () {
            App.navigate("#/station/" + this.action);
        },
       
        qr: function () {
            var self = this;
            if(typeof cordova === "undefined"){
               self.collection.add({name: "qrkód"});
               this.checkEnabled();
            } else {
                cordova.plugins.barcodeScanner.scan(
                   function (result) {
                       self.collection.add({name: result.text});
                       this.checkEnabled();
                   },
                   function (error) {
                      alert("Sikertelen QR kód olvasás");
                      this.checkEnabled();
                   }
                );
            }
        },
        
        checkEnabled: function() {
            if(this.collection.length > 0){
                this.ui.next.removeAttr('disabled');
            }
        }
        
    });

});