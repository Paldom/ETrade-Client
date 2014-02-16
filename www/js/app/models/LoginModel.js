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
            var usrString = this.get('username') ? '?serverName=' + this.get('username') : '';
            var pwdString = this.get('password') ? '&serverPassword=' + this.get('password') : '';
            return App.Configs.API + '/games' + usrString + pwdString;
        },
        
    });
    
});