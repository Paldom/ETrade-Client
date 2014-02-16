/*jslint nomen: true */
/*global define, alert, App, confirm, window */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        hammer = require('hammer'),
        tpl = require('text!templates/Trade.html');

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
            'tap #btnOK': 'ok',
            'tap #btnCancel': 'cancel'
        },
        
        ok: function () {
            window.history.back();
        },
        
        cancel: function () {
            if (confirm("Biztos megszakítod a tranzakciót!")) {
                window.history.back();
            }
        }
        
    });

});