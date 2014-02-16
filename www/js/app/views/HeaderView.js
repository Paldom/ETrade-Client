/*jslint nomen: true */
/*global define */

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
            backBox: "#btnBackBox"
        },

        initialize: function () {
            this.bindUIElements();
        },

        onRender: function (that) {
           this.$el.hammer();
        },
        
        setTitle: function(titleText){
            this.ui.title.text(titleText);
        },
                                                                            
        enableBack: function(isEnabled){
            if(isEnabled){
                this.ui.backBox.show();
            } else {
                this.ui.backBox.hide();
            }
        },                                      

        events: {
            'tap #btnBack': 'back'
        },
        
        back: function () {
            window.history.back();  
        }
        
    });

});