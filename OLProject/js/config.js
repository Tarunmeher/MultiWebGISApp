const layerConfig = {
  wmsURL: "http://localhost:8888/geoserver/wms",
  wmsLayers: [
    {
      layerName: "Training:india_outline",
      layerTitle: "India Boundary",
      visible: true,
      groupName: "adminLayer",
    },
    {
      layerName: "Training:india_state_boundary",
      layerTitle: "State Boundary",
      visible: true,
      groupName: "adminLayer",
    },
    {
      layerName: "Training:india_district_boundary",
      layerTitle: "District Boundary",
      visible: true,
      groupName: "adminLayer",
    },
  ],
};
