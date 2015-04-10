"use strict";

define([
    'backbone',
    './PointModel'
], function(Backbone, PointModel) {

    var Collection =  Backbone.Collection.extend({
        model: PointModel
    });

    var collection = new Collection();

    collection.add({
        latitude:  51.5085300,
        longitude: -0.1257400,
        name: "London"
    });

    collection.add({
        latitude: 40.7142700,
        longitude:  -74.0059700,
        name: "NewYork"
    });

    collection.add({
        latitude:  55.7522200,
        longitude:  37.6155600,
        name: "Moskow"
    });

    collection.add({
        latitude:  -33.8678500,
        longitude: 151.2073200,
        name: "Sydnay"
    });

    collection.add({
        latitude:   -34.6131500,
        longitude:  -58.3772300,
        name: "Buenos Aires"
    });

    return collection;
});