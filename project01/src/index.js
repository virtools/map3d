import "@src/index.scss";
//import url from "@src/94182078.kmz";
//console.log(url);
/*import { KMLLoader } from "@loaders.gl/kml";
import { load } from "@loaders.gl/core";
import { Tiles3DLoader } from "@loaders.gl/3d-tiles";
const getData = async (url) => {
  return await load(url, KMLLoader, {});
};*/

/*getData("./res/94182078/94182078.kml").then((data) => {
  console.log(data);
  data.features.forEach((el) => {
    console.log(el);
  });
});*/
/*getData("./res/gdpPerCapita2008/doc.kml").then((data) => {
  console.log(data);
});
getData("./res/my/94182078.kml").then((data) => {
  console.log(data);
  data.features.forEach((el) => {
    console.log(el);
  });
});*/
/*getData("./res/94182078-0/94182078.kml").then((data) => {
  console.log(data);
  data.features.forEach((el) => {
    console.log(el);
  });
});*/
/*const getTilesetJson = async () => {
  const tilesetUrl = "./res/tile3d/94182078/tileset.json";
  const tilesetJson = await load(tilesetUrl, Tiles3DLoader);
  console.log(tilesetJson);
};

getTilesetJson();*/

import { Ion, Viewer, createWorldTerrain, createOsmBuildings, Cartesian3, Math } from "cesium";
import "cesium/Widgets/widgets.css";

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ZGY2ZDM4NS1kMzk4LTQxZWQtODEwMC1iM2RlMTQyZDcxM2UiLCJpZCI6NzQzMDUsImlhdCI6MTYzNzY0ODAzMX0.oyxgDdI85clXgRXtgBZRDkkrJbiTMXBLPl94OdBBF5o";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer("cesiumContainer", {
  terrainProvider: createWorldTerrain(),
});

// Add Cesium OSM Buildings, a global 3D buildings layer.
viewer.scene.primitives.add(createOsmBuildings());

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation: {
    heading: Math.toRadians(0.0),
    pitch: Math.toRadians(-15.0),
  },
});
