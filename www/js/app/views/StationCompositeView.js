/*jslint nomen: true */
/*global define, alert, App, StationItemView */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        StationItemView = require('app/views/StationItemView'),
        tpl = require('text!templates/StationComposite.html');

    return Backbone.Marionette.CompositeView.extend({

        template: tpl,
        
        itemViewContainer: "ul",
    
        itemView: StationItemView
        
    });

});