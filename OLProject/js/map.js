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

var wmsLayers = [];
const idDropdown = document.getElementById("idDropdown");
var dropdownTemplate = "";
loadWMSLayers(layerConfig.wmsLayers);
function loadWMSLayers(wmsLayerInfo) {
  wmsLayerInfo.forEach((element) => {
    const layer = new ol.layer.Tile({
      title:element.layerTitle,
      source: new ol.source.TileWMS({
        url: layerConfig.wmsURL,
        params: { LAYERS: element.layerName },
        serverType: "geoserver",
      }),
    });
    map.addLayer(layer);
    wmsLayers.push(layer);
    dropdownTemplate+=`<option value="${element.layerTitle}">${element.layerTitle}</option>`
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("layer-item");
    const inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.checked = element.visible;
    inputElement.addEventListener("change", function () {
      if (this.checked) {
        layer.setVisible(true);
      } else {
        layer.setVisible(false);
      }
    });
    const label = document.createElement("label");
    label.innerHTML = element.layerTitle;
    parentDiv.appendChild(inputElement);
    parentDiv.appendChild(label);
    document.getElementById(element.groupName).appendChild(parentDiv);
  });
  idDropdown.innerHTML = dropdownTemplate;
}


map.on("singleclick", function (evt) {
  let dropdownVal = idDropdown.value;
  document.getElementById("heading").innerHTML = dropdownVal;
  let currentSelectedLayer = null;
  wmsLayers.forEach((item)=>{
    if(dropdownVal == item.get("title")){
      currentSelectedLayer = item;
    }
  })
  var viewResolution = /** @type {number} */ (map.getView().getResolution());
  
  var url = currentSelectedLayer && currentSelectedLayer.getSource().getGetFeatureInfoUrl(
    evt.coordinate,
    viewResolution,
    "EPSG:3857",
    { INFO_FORMAT: "application/json" },
  );
  if (url) {
    fetch(url).then(function(res){
      if(res.ok){
        res.json().then(function(data){
          const thead = document.querySelector("#popup-content table thead");
          const tbody = document.querySelector("#popup-content table tbody");
          var properties = data.features[0].properties;
          var theadTemplate = ['<tr>']
          for(let field in properties){            
           theadTemplate.push("<td>"+field+"</td>")
          }
          theadTemplate.push("</tr>");
          thead.innerHTML = theadTemplate.join("");

          var tbodyTemplate = ['<tr>']
          for(let field in properties){            
           tbodyTemplate.push("<td>"+properties[field]+"</td>");
          }
          tbodyTemplate.push("</tr>");
          tbody.innerHTML = tbodyTemplate.join("");
          overlay.setPosition(evt.coordinate);
        })
      }
    })
  }
});
