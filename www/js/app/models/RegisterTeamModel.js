/*jslint nomen: true */
/*global define */

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
	    return App.Configs.API + '/players';
        }

    });
    
});