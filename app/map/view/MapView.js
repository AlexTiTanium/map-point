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
        showOnNextRender: null,

        ui:{
            mapsPoints: 'a.map-point'
        },

        events: {

        },

        initialize: function(){
            var self = this;
            this.listenTo(mapsCollection, 'change', this.render);
            this.listenTo(pointsCollection, 'add',  function(item){ self.showOnNextRender = item.cid; });
            this.listenTo(pointsCollection, 'add',  this.render);

        },

        serializeData: function(){
            return {
                map: mapsCollection.getCurrent(),
                items: pointsCollection
            }
        },

        onRender: function(){

            this.ui.mapsPoints.popover();

            // Show last added element
            if(this.showOnNextRender){
                this.ui.mapsPoints.last().focus();
                this.showOnNextRender = null;
            }
        }

    });
});