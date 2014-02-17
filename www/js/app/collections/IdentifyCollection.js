/*jslint nomen: true */
/*global define, StationModel, App */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Collection.extend({
        
        model : Backbone.Model
    
    });
});