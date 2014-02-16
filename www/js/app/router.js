/*global define */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        Marionette = require('marionette');

    return Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            '': 'login',
            'home': 'home'
/*            'station': 'station',
            'station/trade': 'trade',
            'station/steal': 'steal',
            'station/transfer': 'transfer',
            'station/options': 'options',
            'station/register': 'register',
            '*actions': 'other'*/
        }
    });

});


