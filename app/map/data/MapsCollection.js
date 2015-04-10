"use strict";

define([
    'backbone',
    './MapModel'
], function(Backbone, MapModel) {

    var Collection =  Backbone.Collection.extend({

        model: MapModel,
        currentMap: 0,

        getCurrent: function(){
            if(this.currentMap){
                return this.at(this.currentMap);
            }else{
                return this.first();
            }
        },

        next: function(){
            var nextMap = this.at(this.currentMap+1);

            if(nextMap){
                this.currentMap += 1;
                this.trigger('change');
            }
        },

        previous: function(){
            var previousMap = this.at(this.currentMap-1);

            if(previousMap){
                this.currentMap -= 1;
                this.trigger('change');
            }
        }
    });

    var collection = new Collection();

    // Init data
    collection.add({
        url: "http://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Equirectangular_projection_SW.jpg/1200px-Equirectangular_projection_SW.jpg",
        projection: 'equirectangular',
        offset: { x: 10, y: 10 },
        size: {  width: 1200, height: 604 }
    });

    collection.add({
        url: "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mercator_projection_SW.jpg/1061px-Mercator_projection_SW.jpg",
        projection: 'mercator',
        offset: { x: 10, y: 10 },
        size: {  width: 1061, height: 900 }
    });

    collection.add({
        url: "http://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Equirectangular_projection_SW.jpg/640px-Equirectangular_projection_SW.jpg",
        projection: 'equirectangular',
        offset: { x: 10, y: 10 },
        size: {  width: 640, height: 322 }
    });

    collection.add({
        url: "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mercator_projection_SW.jpg/566px-Mercator_projection_SW.jpg",
        projection: 'mercator',
        offset: { x: 10, y: 10 },
        size: {  width: 566, height: 480 }
    });

    return collection;
});