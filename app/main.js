"use strict";

require.config({

    paths: {
        "lodash": "../bower_components/lodash/lodash",
        "jquery": "../bower_components/jquery/dist/jquery",
        "backbone": "../bower_components/backbone/backbone",
        "marionette": "../bower_components/marionette/lib/backbone.marionette",
        "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap",
        "ldsh": "../bower_components/lodash-template-loader/loader",
        "typeahead": '../bower_components/bootstrap3-typeahead/bootstrap3-typeahead',
        "unveil": '../bower_components/unveil/jquery.unveil.min',
        "application": 'application'
    },

    map: {
        '*': {
            'underscore': 'lodash'
        }
    },

    shim: {
        'backbone': ['jquery', 'underscore'],
        'lodashLoader': ['lodash'],
        'bootstrap': ['jquery'],
        'typeahead': ['jquery', 'bootstrap'],
        'bttrLazyLoading': ['jquery'],
        'application': ['jquery', 'marionette', 'typeahead', 'bootstrap', 'backbone']
    },

    lodashLoader: {

        // This is the default extension, you can change to whatever you like.
        // Setting this to "" will disable automatic extensions.
        ext: "",

        // Globally configured template settings to be applied to any templates
        // loaded.  This correlates directly to `_.templateSettings`.
        templateSettings: {}
    },

    deps: ["application", "bootstrap"]
});