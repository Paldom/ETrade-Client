/*jslint nomen: true */
/*global define, StationModel, App */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        RegisterModel = require('app/models/RegisterModel');

    return Backbone.Collection.extend({
        
        model : RegisterModel,
        
        url: function () {
            return App.Configs.API + '/teams?gameSessionID=' + App.gameSessionID;
        }
    
    });
});