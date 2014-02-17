/*global define */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        Marionette = require('marionette');

    return Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            '': 'login',
            'home': 'home',
            'station': 'station',
            'station/trade': 'trade',
            'station/steal': 'steal',
            'station/bank': 'bank',
            'station/transfer': 'transfer',
            'station/identify/:action': 'identify',
            'station/options': 'stationOptions',
            'station/register': 'registerPlayer',
            'station/register/one': 'registerOne',
            'station/register/team': 'registerTeam',
            '*actions': 'other'
        }
    });

});


