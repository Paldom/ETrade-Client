/*jslint nomen: true */
/*global define, alert, App*/

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        hammer = require('hammer'),
        tpl = require('text!templates/Login.html');

    return Backbone.Marionette.ItemView.extend({

        template: tpl,

        ui: {
            username: "#username",
            password: "#password"
        },

        initialize: function () {
            this.bindUIElements();
        },

        onRender: function (that) {
            this.$el.hammer();
        },

        events: {
            'tap #btnLogin': 'login'
        },

        login: function () {
            App.navigate("#/home");
            // this.model.save(this.ui.username.val(), this.ui.password.val(), this.loginSuccess, this.loginFailed);
        },

        loginSuccess: function (model, resp, options) {
            App.GameSessionID = model.gameSessionID;
            App.navigate("#/home");
        },

        loginFailed: function (model, xhr, options) {
            alert(options);
        }
        
    });

});