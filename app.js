var map;
require(["esri/map", "esri/layers/ArcGISTiledMapServiceLayer", "dojo/domReady!"], function(Map) {
	map = new Map("map",{center: [-76,-9],zoom:5,basemap: "national-geographic"});
	layer = new esri.layers.ArcGISDynamicMapServiceLayer("http://geoservidor.minam.gob.pe/arcgis/rest/services/ServicioSusceptibilidad/MapServer/");
	map.addLayer(layer);
});