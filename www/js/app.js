/*jslint nomen: true */
/*global define, window, IcomaticUtils, FastClick, document, console, n */


define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        Transitionregion = require('transitionregion'),
        Router = require('app/router'),
        Controller = require('app/controller'),
        App = new Backbone.Marionette.Application();


    App.Configs = {
        API: "http://sleepy-ocean-2201.herokuapp.com"
    };

    App.addRegions({
        headerRegion: {
            selector: "#header"
        },
        contentRegion: {
            selector: "#content",
            regionType: Backbone.Marionette.TransitionRegion
        },
        footerRegion: {
            selector: "#footer"
        }
    });

    App.navigate = function (route, options) {
        options = options || {};
        Backbone.history.navigate(route, options);
    };

    App.addInitializer(function () {
        App.Router = new Router({
            controller: new Controller()
        });
        Backbone.history.start();
    });

    var afterRender = function (view) {
        IcomaticUtils.run();
        new FastClick(document.body);
        $('body').hammer();
    };

    App.headerRegion.on("show", afterRender);
    App.contentRegion.on("show", afterRender);
    App.footerRegion.on("show", afterRender);


    // NFC

    if (typeof nfc !== "undefined") {
        nfc.addTagDiscoveredListener(
            App.nfcTagDetected,
            function () {
                console.log("NFC listener up.");
            },
            function () {
                console.log("NFC listener error.");
            });
    } else {
        console.log("NFC not available!");
    }

    App.nfcTagDetectedDummy = function (nfcEvent) {
        console.log(nfc.bytesToHexString(nfcEvent.tag.id));
    };
    App.nfcTagDetected = App.nfcTagDetectedDummy;

    App.setActiveNfcHandler = function (newhandler) {
        if (typeof nfc !== "undefined") {
            if (App.nfcTagDetected != App.nfcTagDetectedDummy) {
                console.log("Warning: NFC listener overwrite!");
            }
            App.nfcTagDetected = newhandler;
        } else {
            console.log("Cannot set listener: NFC not available!");
        }
    };

    App.stopActiveNfcHandler = function () {
        App.nfcTagDetected = App.nfcTagDetectedDummy;
    };


    // QR

    App.qrscan = function (success, failed, na) {
        if (typeof cordova !== "undefined") {
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    success(result);
                },
                function (error) {
                    if(failed !== undefined) failed(error);
                    alert("Sikertelen QR kód olvasás");
                }
            );
        } else {
            if(na !== undefined) na();
            console.log("Cannot read QR: QR not available");
        }

    }


    return App;
});