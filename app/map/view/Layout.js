"use strict";

define([
    'marionette',
    "./MapView",
    "./ControlPanelView",
    "ldsh!../template/Layout.html"
], function(Marionette, MapView, ControlPanelView, template) {

    return Marionette.LayoutView.extend({

        el: '#content',
        template: template,

        regions: {
            map: "#rgn-map",
            panel: "#rgn-control-panel"
        },

        onRender: function(){
            this.getRegion('map').show(new MapView());
            this.getRegion('panel').show(new ControlPanelView());
        }

    });
});