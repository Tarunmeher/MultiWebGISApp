const pointStyle = new ol.style.Style({
  image: new ol.style.Icon({
    src: "./assets/marker.png",
    scale: 0.4,
  }),
});

const lineStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: "red",
    width: 4, // Creates a dashed effect
  }),
});

const polygonStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgba(255,0,0,0.5)",
  }),
  stroke: new ol.style.Stroke({
    color: "red",
    width: 4,
  }),
});

function addVectorfeature(arrayOfFeatures, type, map) {
  try {
    let layerTitle = "";
    let currentLayer = null;
    if (type.toLowerCase() == "point") {
      console.log("Adding Point Feature/s ......");
      const pointFeatures = [];
      for (let i = 0; i < arrayOfFeatures.length; i++) {
        let feature = new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat(arrayOfFeatures[i].geometry.coordinates),
          ),
        });
        feature.setProperties(arrayOfFeatures[i].properties);
        pointFeatures.push(feature);
      }
      layerTitle = "vectorPointFeature";
      currentLayer = new ol.layer.Vector({
        title: layerTitle,
        source: new ol.source.Vector({
          features: pointFeatures
        }),
        style: pointStyle,
      });

      map.addLayer(currentLayer);
    } else if (type.toLowerCase() == "line") {
      console.log("Addibg Line Feature/s.....");
      const lineFeatures = [];
      for (let i = 0; i < arrayOfFeatures.length; i++) {
        for (
          let j = 0;
          j < arrayOfFeatures[i].geometry.coordinates.length;
          j++
        ) {
          arrayOfFeatures[i].geometry.coordinates[j] = ol.proj.fromLonLat(
            arrayOfFeatures[i].geometry.coordinates[j],
          );
        }

        const lineFeature = new ol.Feature({
            geometry: new ol.geom.LineString(
              arrayOfFeatures[i].geometry.coordinates,
            )
          });
        lineFeature.setProperties(arrayOfFeatures[i].properties);
        lineFeatures.push(lineFeature);
      }
      layerTitle = "vectorlineFeatures";
      currentLayer = new ol.layer.Vector({
        title: layerTitle,
        source: new ol.source.Vector({
          features: lineFeatures,
        }),
        style: lineStyle,
      });

      map.addLayer(currentLayer);
    } else if (type.toLowerCase() == "polygon") {
      console.log("Addibg Polygon Feature/s.....");
      const polygonFeatures = [];

      for (let i = 0; i < arrayOfFeatures.length; i++) {
        const rings = arrayOfFeatures[i].geometry.coordinates;
        const projectedRings = [];

        // Loop through each ring (Outer boundary, inner holes)
        for (let j = 0; j < rings.length; j++) {
          const ring = rings[j];

          // Project every individual [Lng, Lat] pair inside this ring
          const projectedRing = ring.map((coord) => ol.proj.fromLonLat(coord));
          projectedRings.push(projectedRing);
        }

        const polyFeature = new ol.Feature({
            geometry: new ol.geom.Polygon(projectedRings),
          });
        polyFeature.setProperties(arrayOfFeatures[i].properties);
        polygonFeatures.push(polyFeature);
      }

      layerTitle = "vectorpolygonFeatures";
      currentLayer = new ol.layer.Vector({
        title: layerTitle,
        source: new ol.source.Vector({
          features: polygonFeatures,
        }),
        style: polygonStyle,
      });

      map.addLayer(currentLayer);
    }

    if (currentLayer) {
      currentLayer.set("LayerType", "VECTOR");
      maplayers.push(currentLayer);
      const parentDiv = document.createElement("div");
      parentDiv.classList.add("layer-item");
      const inputElement = document.createElement("input");
      inputElement.type = "checkbox";
      inputElement.checked = true;
      inputElement.addEventListener("change", function () {
        if (this.checked) {
          currentLayer.setVisible(true);
        } else {
          currentLayer.setVisible(false);
        }
      });
      const label = document.createElement("label");
      label.innerHTML = layerTitle;
      parentDiv.appendChild(inputElement);
      parentDiv.appendChild(label);
      document.getElementById("vectorlayer").appendChild(parentDiv);

      let idDropdown = document.getElementById("idDropdown");
      let option = document.createElement("option");
      option.value = layerTitle;
      option.innerText = layerTitle;
      idDropdown.appendChild(option);
    }
  } catch (error) {
    console.log(error);
  }
}
