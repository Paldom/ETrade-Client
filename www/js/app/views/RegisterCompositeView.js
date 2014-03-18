/*jslint nomen: true */
/*global define, alert, App, StationItemView */

define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        RegisterItemView = require('app/views/RegisterItemView'),
        tpl = require('text!templates/RegisterComposite.html');

    return Backbone.Marionette.CompositeView.extend({

        template: tpl,
        
        itemViewContainer: "ul",
    
        itemView: RegisterItemView
        
    });

});