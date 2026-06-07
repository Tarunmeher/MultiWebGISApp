//Initialization of Map
const center = [78.9629, 20.5937];
const initialZoom = 4.5;

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
  // view.setCenter(ol.proj.fromLonLat(center));
  // view.setZoom(initialZoom);
  view.animate({
          center: ol.proj.fromLonLat(center),
          duration: 2000,
          zoom:initialZoom
        });
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

var maplayers = [];
const idDropdown = document.getElementById("idDropdown");
var dropdownTemplate = "";
loadWMSLayers(layerConfig.wmsLayers);
function loadWMSLayers(wmsLayerInfo) {
  wmsLayerInfo.forEach((element) => {
    const layer = new ol.layer.Tile({
      title: element.layerTitle,
      source: new ol.source.TileWMS({
        url: layerConfig.wmsURL,
        params: { LAYERS: element.layerName },
        serverType: "geoserver",
      }),
    });
    layer.set("LayerType", "WMS");
    map.addLayer(layer);
    maplayers.push(layer);
    dropdownTemplate += `<option value="${element.layerTitle}">${element.layerTitle}</option>`;
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

map.on("singleclick", async function (evt) {
  let dropdownVal = idDropdown.value;
  document.getElementById("heading").innerHTML = dropdownVal;
  let currentSelectedLayer = null;

  maplayers.forEach((item) => {
    if (dropdownVal == item.get("title")) {
      currentSelectedLayer = item;
    }
  });

  if (!currentSelectedLayer.getVisible()) {
    alert("Current selected layer is not checked");
    return;
  }

  if (currentSelectedLayer.get("LayerType") == "WMS") {
    var viewResolution = /** @type {number} */ (map.getView().getResolution());

    var url =
      currentSelectedLayer &&
      currentSelectedLayer
        .getSource()
        .getGetFeatureInfoUrl(evt.coordinate, viewResolution, "EPSG:3857", {
          INFO_FORMAT: "application/json",
        });

    if (url) {
      fetch(url).then(function (res) {
        if (res.ok) {
          res.json().then(function (data) {
            // Safety Check: Verify if a feature was actually returned from the click location
            if (!data.features || data.features.length === 0) {
              console.warn("No features found at this location.");
              return;
            }

            bindFeaturePopup(data.features[0].properties, evt.coordinate);
          });
        }
      });
    }
  } else {
    let features = currentSelectedLayer.getSource().getFeatures();
    let clickedFeature = await map.forEachFeatureAtPixel(
      evt.pixel,
      function (feature, currentSelectedLayer) {
        // Optional: Filter by layer if you only want info from a specific vector layer
        // if (layer === myTargetVectorLayer) { return feature; }
        return feature;
      },
    );
    const prop = clickedFeature.getProperties();
    const filteredProperties = {};
    for(const key in prop){
      if(key!='geometry')
        filteredProperties[key] = prop[key];
    }

    console.log(filteredProperties)
    // let filteredProperties = clickedFeature.getProperties()
    bindFeaturePopup(filteredProperties, evt.coordinate)
  }
});

function bindFeaturePopup(properties, coordinate) {
  const thead = document.querySelector("#popup-content table thead");
  const tbody = document.querySelector("#popup-content table tbody");

  // Build Table Header
  var theadTemplate = ["<tr>"];
  for (let field in properties) {
    theadTemplate.push("<td>" + field + "</td>");
  }
  theadTemplate.push("</tr>");
  thead.innerHTML = theadTemplate.join("");

  // Build Table Body
  var tbodyTemplate = ["<tr>"];
  for (let field in properties) {
    tbodyTemplate.push("<td>" + properties[field] + "</td>");
  }
  tbodyTemplate.push("</tr>");
  tbody.innerHTML = tbodyTemplate.join("");

  // ==========================================
  // FIX: Parse and transform the geometry safely
  // ==========================================
  // const geojsonFormat = new ol.format.GeoJSON();

  // // Read feature and reproject from Geodetic (4326) to Map View (3857)
  // const olFeature = geojsonFormat.readFeature(data.features[0], {
  //   dataProjection: 'EPSG:4326',
  //   featureProjection: 'EPSG:3857'
  // });

  // // Pass the proper OpenLayers geometry object to your highlight function
  // highlightFeature(olFeature.getGeometry());

  overlay.setPosition(coordinate);
}

// Make sure you have a dedicated vector layer for highlights added to your map
const highlightSource = new ol.source.Vector();
const highlightLayer = new ol.layer.Vector({
  source: highlightSource,
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: "#0000ff",
      width: 5,
    }),
    fill: new ol.style.Fill({
      color: "rgba(255, 51, 51, 0.2)",
    }),
  }),
});

function highlightFeature(olGeometry) {
  // 1. Clear the old highlight so they don't pile up
  highlightSource.clear();

  // 2. Create an actual OpenLayers Feature
  const feature = new ol.Feature({
    geometry: olGeometry,
  });

  // 3. Add it safely to the vector source
  highlightSource.addFeature(feature);
}

addVectorfeature(lineFeature.features, "line", map);
addVectorfeature(pointFeature.features, "point", map);
addVectorfeature(polygonFeature.features, "polygon", map);
map.addLayer(highlightLayer);
