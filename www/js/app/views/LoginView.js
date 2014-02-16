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
            username: "#inputServer",
            password: "#inputPasswd"
        },

        initialize: function () {
            this.bindUIElements();
        },

        onRender: function (that) {
        },

        events: {
            'tap #btnLogin': 'login'
        },

        login: function () {
            this.model.set("username", this.ui.username.val());
            this.model.set("password", this.ui.password.val());
            this.model.fetch({
                success: this.loginSuccess,
                error: this.loginFailed
            });
        },

        loginSuccess: function (model, resp, options) {
            App.GameSessionID = model.gameSessionID;
            App.navigate("#/home");
        },

        loginFailed: function (model, xhr, options) {
            App.navigate("#/home"); // TODO: élesben kiszedni
            if (xhr.status === 404) {
                alert("Sikertelen bejelentkezés");
            } else {
                alert("Hiba");
            }
        }
        
    });

});