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
	    memberlist : "#new_team_members"
        },

        initialize: function () {
            this.bindUIElements();
        },

        onRender: function (that) {
	    //start nfc listener
	    //var nfc = nfc || undefined;
	    if (nfc !== undefined) {
		var self = this;
		nfc.addTagDiscoveredListener(function(nfcEvent) {
		    console.log("Registering " + nfc.bytesToHexString(nfcEvent.tag.id));
		    console.log(self.model);
		    self.model.set("nfcID", nfc.bytesToHexString(nfcEvent.tag.id));
		    self.model.set("gameSessionID", App.gameSessionID);
		    self.model.set("team", 1);
		    self.model.set("money", 100);
		    self.model.save(null, {
			success: self.teamRegisterSuccess,
			error: self.teamRegisterFail
            });


		},//App.nfcTagDetected,
					     function() {console.log("NFC listener up.");},
					     function() {console.log("NFC listener error.");}
					    );
		App.nfcTagDetectedDummy = function(nfcEvent) {
		    console.log(nfc.bytesToHexString(nfcEvent.tag.id));
		};
		App.nfcTagDetected = App.nfcTagDetectedDummy;
		
		App.setActiveNfcHandler = function(newhandler) {
		    if (App.nfcTagDetected != App.nfcTagDetectedDummy) {
			console.log("Warning: NFC listener overwrite!");
		    }
		    App.nfcTagDetected = newhandler;
		};
		
		App.setActiveNfcHandler(this.nfcRegisterTeam);	
	    }
	    else {
		console.log("NFC not available!");
	    }
        },

        close: function () {
	    //stop nfc listener
	    App.stopActiveNfcHandler = function() {
		App.nfcTagDetected = App.nfcTagDetectedDummy;
	    };

	    App.stopActiveNfcHandler();
        },

	nfcRegisterTeam: function (nfcEvent) {
	    console.log("Registering " + nfc.bytesToHexString(nfcEvent.tag.id));
	    console.log(this.model);
	    this.model.set("nfcID", nfc.bytesToHexString(nfcEvent.tag.id));
	    this.model.set("gameSessionID", App.gameSessionID);
	    this.model.set("team", 1);
	    this.model.set("money", 100);
            this.model.save(null, {
                success: this.teamRegisterSuccess,
                error: this.teamRegisterFail
            });
	},

	teamRegisterSuccess: function (model, resp, options) {
	    var li = document.createElement("li");
	    li.classList.add("topcoat-list__item");
	    li.appendChild(document.createTextNode("valami")); //model.id //id helyett majd nev lesz
	    this.ui.memberlist.prepend(li);
	    alert("Sikeres regisztráció! " + model.id);
	},

	teamRegisterFail: function (model, xhr, options) {
	    alert("Regisztrációs hiba! (" + xhr.status + ")");
	},

        events: {
            // 'tap #name': 'function'
        }
        
    });

});