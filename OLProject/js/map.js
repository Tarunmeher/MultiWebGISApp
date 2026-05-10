//Initialization of Map
const center = [78.9629, 20.5937];
const initialZoom = 5;

const osmSource = new ol.source.OSM();
const sateliteSource = new ol.source.XYZ({
  url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
});

//Initialise Layer
const basemapLayer = new ol.layer.Tile({
  source: osmSource,
});

var map = new ol.Map({
  target: "map",
  layers: [basemapLayer],
  view: new ol.View({
    center: ol.proj.fromLonLat(center),
    zoom: initialZoom,
  }),
});

//Code to Handle Zoom In
document.getElementById("zoomIn").addEventListener("click", function () {
  let view = map.getView();
  let currentZoom = view.getZoom();
  view.setZoom(currentZoom + 1);
});

//Code to Handle Zoom Out
document.getElementById("zoomOut").addEventListener("click", function () {
  let view = map.getView();
  let currentZoom = view.getZoom();
  view.setZoom(currentZoom - 1);
});

//Code to Handle Goto Location
document.getElementById("goto").addEventListener("click", function () {
  let view = map.getView();
  view.setCenter(ol.proj.fromLonLat(center));
  view.setZoom(initialZoom);
});


//Function to Toggle Basemap
function toggleBaseMap(targetElement, type) {
  var basemapInputs = document.getElementsByClassName("basemap");
  for (let i = 0; i < basemapInputs.length; i++) {
    basemapInputs[i].checked = false;
  }
  targetElement.checked = true;
  if (type == "osm") {
    basemapLayer.setSource(null);
    basemapLayer.setSource(osmSource);
  } else if (type == "satelite") {
    basemapLayer.setSource(null);
    basemapLayer.setSource(sateliteSource);
  } else {
    basemapLayer.setSource(null);
  }
}


//WMS Layer
var worldBoundary = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: 'http://localhost:8888/geoserver/wms',
    params: {'LAYERS': 'ne:world'},
    // ratio: 1,
    serverType: 'geoserver'
  })
});
map.addLayer(worldBoundary);
