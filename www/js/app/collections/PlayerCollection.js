/*jslint nomen: true */
/*global define, StationModel, App */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        PlayerModel = require('app/models/PlayerModel');

    return Backbone.Collection.extend({
        
        model : PlayerModel,
        
        url: function () {
	       return App.Configs.API + '/players';
        }
    
    });
});