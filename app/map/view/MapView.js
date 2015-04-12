"use strict";

define([
    'marionette',
    '../data/MapsCollection',
    '../data/PointsCollection',
    "ldsh!../template/MapView.html"
], function(Marionette, mapsCollection, pointsCollection, template) {

    return Marionette.ItemView.extend({

        template: template,
        collection: pointsCollection,
        showPopoverOnNextRender: null,
        updateImageOnNextRender: true,

        ui:{
            mapsPoints: 'a.map-point',
            mapImageContainer: '#map-image-container',
            imageLoader: '#image-loader-wrapper'
        },

        events: {

        },

        initialize: function(){

            var self = this;

            this.listenTo(mapsCollection, 'change', function(){ self.updateImageOnNextRender = true; });
            this.listenTo(pointsCollection, 'add',  function(){ self.showPopoverOnNextRender = true; });

            this.listenTo(mapsCollection, 'change', this.render);
            this.listenTo(pointsCollection, 'add',  this.render);
        },

        serializeData: function(){
            return {
                map: mapsCollection.getCurrent(),
                items: pointsCollection
            };
        },

        onRender: function(){

            var self = this;

            this.ui.mapsPoints.popover();

            // Show last added element
            if(this.showPopoverOnNextRender){
                this.ui.mapsPoints.last().focus();
                this.showPopoverOnNextRender = null;
            }

            if(this.updateImageOnNextRender) {
                this.ui.mapsPoints.hide();
                this.ui.imageLoader.show();
                this.updateImageOnNextRender = false;
            }

            this.ui.mapImageContainer.on("load", function () {
                self.ui.mapsPoints.show();
                self.ui.imageLoader.hide();
            });
        }
    });
});