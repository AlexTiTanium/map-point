"use strict";

define([
    'marionette',
    './view/Layout'
], function(Marionette, Layout) {

    return Marionette.Module.extend({

        application: null,
        layout: null,
        router: null,

        initialize: function(options, moduleName, app) {
            this.application = app;
        },

        onStart: function(options) {
            this.layout = new Layout();
            this.layout.render();
        }

    });
});