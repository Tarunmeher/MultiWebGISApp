// ===============================
// Highlight Layer
// ===============================

const highlightSource = new ol.source.Vector();

const highlightLayer = new ol.layer.Vector({
  source: highlightSource,
  zIndex: 9999,
  style: function (feature) {
    const geometryType = feature.getGeometry().getType();

    // POINT STYLE
    if (geometryType === "Point" || geometryType === "MultiPoint") {
      return new ol.style.Style({
        image: new ol.style.Circle({
          radius: 8,
          fill: new ol.style.Fill({
            color: "#2563eb",
          }),
          stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 3,
          }),
        }),
      });
    }

    // LINE STYLE
    if (geometryType === "LineString" || geometryType === "MultiLineString") {
      return new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: "#ef4444",
          width: 4,
        }),
      });
    }

    // POLYGON STYLE
    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "#2563eb",
        width: 3,
      }),
      fill: new ol.style.Fill({
        color: "rgba(37,99,235,0.25)",
      }),
    });
  },
});

map.addLayer(highlightLayer);

// ===============================
// Highlight Feature Function
// ===============================

function highlightFeature(geometry) {
  // Clear old highlight
  highlightSource.clear();

  // Create OpenLayers Feature
  const feature = new ol.Feature({
    geometry: new ol.format.GeoJSON().readGeometry(geometry, {
      featureProjection: "EPSG:3857",
    }),
  });

  // Add feature
  highlightSource.addFeature(feature);

  // Get geometry extent
  const extent = feature.getGeometry().getExtent();

  // Zoom to feature
  map.getView().fit(extent, {
    padding: [80, 80, 80, 80],
    duration: 1000,
    maxZoom: 18,
  });
}
