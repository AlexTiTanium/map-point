# Map point

Application based on the Backbone-Marionette.js framework for demonstration conversion geographic coordinate to x,y coordinates on image using
quirectangular and mercator projection algorithms.

Demo: http://mappoint.xogames.org/

## Install

````sh
git clone git@github.com:AlexTiTanium/map-point.git
cd map-point

bower install
````

## Where is quirectangular and mercator projection algorithm?
Here: https://github.com/AlexTiTanium/map-point/blob/master/app/map/data/MapModel.js

````js
/**
  * Translate point from geographic coordinate system to image position
  *
  * @param {PointModel} point
  * @returns {{x: number, y: number}}
  */
transform: function(point){

    // Map options
    var projection = this.get('projection');
    var size = this.get('size');
    var offset = this.get('offset');

    // Point options
    var latitude = point.get('latitude');
    var longitude = point.get('longitude');

    // X works fine for equirectangular and mercator
    var x = (longitude + 180) * (size.width / 360);
    var y = 0;

    // Equirectangular  projection
    if(projection == 'equirectangular'){
        y = ((latitude * -1) + 90) * (size.height / 180);
    }

    // Mercator projection
    if(projection == 'mercator'){
        var latRad = latitude * Math.PI/180;
        var mercatorProjection = Math.log(Math.tan((latRad/2) + (Math.PI/4)));
        y = (size.height / 2) - (size.width * mercatorProjection / (2 * Math.PI));
    }

    x -= offset.x / 2;
    y -= offset.y / 2;

    return { x: x, y: y };
}
````
## Screenshot



