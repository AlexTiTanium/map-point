"use strict";

require([
    'marionette',
    'backbone',
    'map/main'
], function(Marionette, Backbone, MapModule) {

    /**
     * Setup application
     */
    var Application = Marionette.Application.extend({});
    var application = new Application();

    /**
     * Modules section
     */
    application.module("map", MapModule);

    // Save reference to global scope
    window.application = application;

    // Start application
    application.start();
});