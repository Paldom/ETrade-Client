/*jslint nomen: true */
/*global define, App, window */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        HeaderView = require('app/views/HeaderView'),
        IdentifyCollection = require('app/collections/IdentifyCollection');

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
            
            
            require(["app/views/StationCompositeView", "app/collections/StationsCollection"], function (View, Collection) {
                        
                var collection = new Collection();
                collection.fetch({
                    success: function () {
                        App.contentRegion.show(new View({
                            collection: collection
                        }));
                    }
                });
                        
            });
            
        },

        station: function () {
            
            var title;
            if (App.station) {
                title = App.station.get('name');
            } else {
                title = "Állomás";
            }
            
            App.headerView.setTitle(title);
            App.headerView.enableBack(true);
            App.headerView.enableSettings(true);
            require(["app/views/StationView"], function (View) {
                App.contentRegion.show(new View());
            });
        },
        
        
        identify: function (action) {
            
            App.usersCollection = new IdentifyCollection();
            
            var title;
            switch (action) {
                case 'trade': title = "Kereskedés";
                                    break;
                case 'steal': title = "Rablás";
                                    break;
                case 'transfer': title = "Mozgatás";
                                    break;
                case 'bank': title = "Bank";
                                    break;
                default: title = "Azonosítás";
            }
            
            App.headerView.setTitle(title);
            App.headerView.enableBack(true);
            App.headerView.enableSettings(false);
        
            
            require(["app/views/IdentifyCompositeView"], function (View) {
                var view = new View({collection: App.usersCollection});
                view.setAction(action);
                App.contentRegion.show(view);
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
            
            if(App.usersCollection.length > 1) {
                require(["app/views/TransferMultiView", "app/models/TransferMultiModel"], function (View, Model) {
                App.contentRegion.show(new View({
                        model: new Model()
                    }));
                });
            } else {
                require(["app/views/TransferView", "app/models/TransferModel"], function (View, Model) {
                App.contentRegion.show(new View({
                        model: new Model()
                    }));
                });
            }

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