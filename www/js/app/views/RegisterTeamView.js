/*jslint nomen: true */
/*global define, alert, App*/

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        hammer = require('hammer'),
        tpl = require('text!templates/RegisterTeam.html');

    return Backbone.Marionette.ItemView.extend({

        template: tpl,

        ui: {
            memberlist: "#new_team_members"
        },

        initialize: function () {
            this.bindUIElements();
        },

        onRender: function (that) {
            var self = this;
            App.setActiveNfcHandler(function (nfcEvent) {
                console.log("Registering " + nfc.bytesToHexString(nfcEvent.tag.id));
                console.log(self.model);
                self.model.id = null;
                self.model.set("nfcID", nfc.bytesToHexString(nfcEvent.tag.id));
                self.model.set("gameSessionID", App.gameSessionID);
                self.model.set("team", 1);
                self.model.set("money", 100);
                self.model.save(null, {
                    success: self.teamRegisterSuccess,
                    error: self.teamRegisterFail
                });


            });
        },

        close: function () {
            //stop nfc listener
            App.stopActiveNfcHandler();
        },
        
        teamRegisterSuccess: function (model, resp, options) {
            var li = document.createElement("li");
            li.classList.add("topcoat-list__item");
            li.appendChild(document.createTextNode("valami")); //model.id //id helyett majd nev lesz
            self.ui.memberlist.prepend(li);
            alert("Sikeres regisztráció! " + model.id);
        },

        teamRegisterFail: function (model, xhr, options) {
            alert("Regisztrációs hiba! (" + xhr.status + ")");
        },

        events: {
            'tap #btnQr': 'qr'
        },

        qr: function () {
            var self = this;
            var success = function (result) {
                console.log("Registering form qr" + result.text);
                console.log(self.model);
                self.model.id = null;
                self.model.set("nfcID", result.text);
                self.model.set("gameSessionID", App.gameSessionID);
                self.model.set("team", 1);
                self.model.set("money", 100);
                self.model.save(null, {
                    success: self.teamRegisterSuccess,
                    error: self.teamRegisterFail
                });
            };
            App.qrscan(success);
        },

    });

});