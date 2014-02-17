/*jslint nomen: true */
/*global define, StationModel, App */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        StationModel = require('app/models/StationModel');

    return Backbone.Collection.extend({
        
        model : StationModel,
        
        url: function () {
            return App.Configs.API + '/stations?gameSessionID=' + App.gameSessionID;
        }
    
    });
});