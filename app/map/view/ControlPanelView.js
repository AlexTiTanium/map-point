"use strict";

define([
    'marionette',
    '../data/MapsCollection',
    '../data/PointsCollection',
    "ldsh!../template/ControlPanelView.html",
    'typeahead'
], function(Marionette, mapsCollection, pointsCollection, template, typeahead) {

    return Marionette.ItemView.extend({

        template: template,

        ui:{
            nextMapBtn: '[data-action="previous-map"]',
            previousMapBtn: '[data-action="next-map"]',
            addPointInput: 'input[name="add-point-input"]'
        },

        events: {
            'click @ui.previousMapBtn': 'onPreviousMap',
            'click @ui.nextMapBtn': 'onNextMap'
        },

        onRender: function(){

            var self = this;

            this.ui.addPointInput.typeahead({
                source: this.typeaheadSource,
                updater: this.typeaheadUpdater,
                afterSelect: function(){ self.ui.addPointInput.val(''); }
            });
        },

        typeaheadSource: function(query, process){

            var service = new google.maps.places.AutocompleteService();

            service.getPlacePredictions({ input: query }, function(predictions, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    process($.map(predictions, function(prediction) {
                        return prediction.description;
                    }));
                }
            });
        },

        typeaheadUpdater: function(item){

            var geocoder = new google.maps.Geocoder();

            geocoder.geocode({ address: item }, function(results, status) {

                if (status != google.maps.GeocoderStatus.OK) {
                    return;
                }

                var location = results[0].geometry.location;

                pointsCollection.add({
                    latitude: location.k,
                    longitude: location.D,
                    name: results[0].formatted_address
                });

            });

            return item;
        },

        onPreviousMap: function(){
            mapsCollection.previous();
        },

        onNextMap: function(){
            mapsCollection.next();
        }

    });
});