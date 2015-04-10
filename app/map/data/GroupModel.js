"use strict";

define([
    'backbone'
], function(Backbone) {

    return Backbone.Model.extend({
        defaults: {
            name: "None",
            tasks: 0
        }
    });

});