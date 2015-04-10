"use strict";

define([
    'backbone'
], function(Backbone) {

    return Backbone.Model.extend({
        defaults: {
            latitude: 0,
            longitude: 0,
            name: null
        }
    });

});