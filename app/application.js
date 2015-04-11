"use strict";

require([
    'marionette',
    'backbone',
    'map/main',
    'jquery'
], function(Marionette, Backbone, MapModule, $) {

    /**
     * Setup application
     */
    var Application = Marionette.Application.extend({});
    var application = new Application();


    application.on('start', function(){
        $('body').addClass('loaded');
    });

    /**
     * Modules section
     */
    application.module("map", MapModule);

    // Start application
    application.start();
});