/*jslint nomen: true */
/*global define, alert, App*/

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        PlayerModel = require('app/models/PlayerModel'),
        RegisterItemView = require('app/views/RegisterTeamItemView'),
        tpl = require('text!templates/RegisterTeamComposite.html');

    return Backbone.Marionette.CompositeView.extend({

        template: tpl,

        itemViewContainer: "ul",

        itemView: RegisterItemView,

        ui: {
            memberlist: "#new_team_members",
	    teamname: "#team_name"
        },

        initialize: function () {
            this.bindUIElements();
        },

        onRender: function (that) {
            var self = this;
	    this.ui.teamname.text(App.teamregistering.get('name'));

            App.setActiveNfcHandler(function (nfcEvent) {
                var nfcID = nfc.bytesToHexString(nfcEvent.tag.id);
                console.log("Registering " + nfcID);
                var playerModel = self.createPlayerModel(nfcID);
                playerModel.save(null, {
                    success: function (model, resp, options) {
                        self.collection.add(playerModel);
                        alert("Sikeres NFC regisztráció! " + model.id);
                    },
                    error: function (model, xhr, options) {
                        alert("NFC Regisztrációs hiba! (" + xhr.status + ")");
                    }
                });
            });
        },

        createPlayerModel: function (id) {
            var model = new PlayerModel();
            model.set("nfcID", id);
            model.set("gameSessionID", App.gameSessionID);
            model.set("teamID", App.teamregistering.get('teamID'));
            model.set("money", 100);
            return model;
        },

        close: function () {
            //stop nfc listener
            App.stopActiveNfcHandler();
        },

        events: {
            'tap #btnQr': 'qr'
        },

        qr: function () {
            var self = this;
            var success = function (result) {
                qrID = result.text;
                console.log("Registering from QR" + qrID);
                var playerModel = self.createPlayerModel(qrID);
                playerModel.save(null, {
                    success: function (model, resp, options) {
                        self.collection.add(playerModel);
                        alert("Sikeres QR regisztráció! " + model.id);
                    },
                    error: function (model, xhr, options) {
                        alert("QR Regisztrációs hiba! (" + xhr.status + ")");
                    }
                });
            };
            App.qrscan(success);
        },

    });

});