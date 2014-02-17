/*jslint nomen: true */
/*global define, App */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({

        initialize: function () {
        },
        
        defaults: {
        },
        
        url: function () {
            var usrString = this.get('serverName') ? '?serverName=' + this.get('serverName') : '';
            var pwdString = this.get('serverPassword') ? '&serverPassword=' + this.get('serverPassword') : '';
            return App.Configs.API + '/games' + usrString + pwdString;
        },
        
    });
    
});