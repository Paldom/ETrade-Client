/*jslint nomen: true */
/*global define, App, window */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        HeaderView = require('app/views/HeaderView');

    return Backbone.Marionette.Controller.extend({

        initialize: function (options) {
            App.headerView = App.headerView || new HeaderView();
            App.headerRegion.show(App.headerView);
        },

        login: function () {
            App.headerView.setTitle("ETrade bejelentkezés");
            App.headerView.enableBack(false);
            App.headerView.enableSettings(false);
            require(["app/views/LoginView", "app/models/LoginModel"], function (View, Model) {
                App.contentRegion.show(new View({
                    model: new Model()
                }));
            });
        },

        home: function () {
            App.headerView.setTitle("ETrade rendszer");
            App.headerView.enableBack(true);
            App.headerView.enableSettings(false);
            require(["app/views/HomeView"], function (View) {
                App.contentRegion.show(new View());
            });
        },

        station: function () {
            App.headerView.setTitle("Állomás");
            App.headerView.enableBack(true);
            App.headerView.enableSettings(true);
            require(["app/views/StationView"], function (View) {
                App.contentRegion.show(new View());
            });
        },
        
        trade: function () {
            App.headerView.setTitle("Kereskedés");
            App.headerView.enableBack(true);
            App.headerView.enableSettings(false);
            require(["app/views/TradeView", "app/models/TradeModel"], function (View, Model) {
                App.contentRegion.show(new View({
                    model: new Model()
                }));
            });
        },
        
        steal: function () {
            App.headerView.setTitle("Rablás");
            App.headerView.enableBack(true);
            App.headerView.enableSettings(false);
            require(["app/views/StealView", "app/models/StealModel"], function (View, Model) {
                App.contentRegion.show(new View({
                    model: new Model()
                }));
            });
        },
        
        bank: function () {
            App.headerView.setTitle("Bank");
            App.headerView.enableBack(true);
            App.headerView.enableSettings(false);
            require(["app/views/BankView", "app/models/BankModel"], function (View, Model) {
                App.contentRegion.show(new View({
                    model: new Model()
                }));
            });
        },
        
        transfer: function () {
            App.headerView.setTitle("Mozgatás");
            App.headerView.enableBack(true);
            App.headerView.enableSettings(false);
            require(["app/views/TransferView", "app/models/TransferModel"], function (View, Model) {
                App.contentRegion.show(new View({
                    model: new Model()
                }));
            });
        },
        
        stationOptions: function () {
            App.headerView.setTitle("Állomás beállítások");
            App.headerView.enableBack(true);
            App.headerView.enableSettings(false);
            require(["app/views/OptionsView", "app/models/OptionsModel"], function (View, Model) {
                App.contentRegion.show(new View({
                    model: new Model()
                }));
            });
        },
        
        registerPlayer: function () {
            App.headerView.setTitle("Játékos regisztrálása");
            App.headerView.enableBack(true);
            App.headerView.enableSettings(false);
            require(["app/views/RegisterView", "app/models/RegisterModel"], function (View, Model) {
                App.contentRegion.show(new View({
                    model: new Model()
                }));
            });
        },
        
        registerOne: function () {
            App.headerView.setTitle("Regisztrálás egyénileg");
            App.headerView.enableBack(true);
            App.headerView.enableSettings(false);
            require(["app/views/RegisterOneView", "app/models/RegisterOneModel"], function (View, Model) {
                App.contentRegion.show(new View({
                    model: new Model()
                }));
            });
        },
        
        registerTeam: function () {
            App.headerView.setTitle("Regisztrálás csapatban");
            App.headerView.enableBack(true);
            App.headerView.enableSettings(false);
            require(["app/views/RegisterTeamView", "app/models/RegisterTeamModel"], function (View, Model) {
                App.contentRegion.show(new View({
                    model: new Model()
                }));
            });
        },

        other: function () {}

    });

});