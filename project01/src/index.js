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

// import {
//   Ion,
//   Viewer,
//   createWorldTerrain,
//   createOsmBuildings,
//   Cartesian3,
//   Math,
//   Cesium3DTileset,
//   IonResource,
// } from "cesium";
import * as Cesium from "cesium";
import "cesium/Widgets/widgets.css";

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
/*Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ZGY2ZDM4NS1kMzk4LTQxZWQtODEwMC1iM2RlMTQyZDcxM2UiLCJpZCI6NzQzMDUsImlhdCI6MTYzNzY0ODAzMX0.oyxgDdI85clXgRXtgBZRDkkrJbiTMXBLPl94OdBBF5o";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer("cesiumContainer", {
  //terrainProvider: createWorldTerrain(),
});*/

// Add Cesium OSM Buildings, a global 3D buildings layer.
//viewer.scene.primitives.add(createOsmBuildings());

// Fly the camera to San Francisco at the given longitude, latitude, and height.
/*viewer.camera.flyTo({
  destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation: {
    heading: Math.toRadians(0.0),
    pitch: Math.toRadians(-15.0),
  },
});
*/

/*var tileset = viewer.scene.primitives.add(
  new Cesium3DTileset({
    url: IonResource.fromAssetId(692158),
  })
);
viewer.zoomTo(tileset);*/

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNjNjZjQwYy00ODAxLTQwMGYtYTc1NC05NGU4NThlNWYzZTYiLCJpZCI6NzQzMDUsImlhdCI6MTYzODM3MzIzNn0.hLHBtpvdp6CiMIprNDFwJ-FCCKvJer0Tm-SoXJz3img";

var viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: new Cesium.CesiumTerrainProvider({
    url: Cesium.IonResource.fromAssetId(1),
  }),
});
viewer.scene.globe.depthTestAgainstTerrain = true;

var tileset = viewer.scene.primitives.add(
  new Cesium.Cesium3DTileset({
    url: Cesium.IonResource.fromAssetId(692158),
  })
);

/*var tileset = viewer.scene.primitives.add(
  new Cesium.Cesium3DTileset({
    url: "./res/tile3d/94182078/tileset.json", // big b3dm data, a commercial project, upload prohibited
    maximumScreenSpaceError: 256, // set a big number for test, faster but rough
    maximumMemoryUsage: 4096,
    skipLevelOfDetail: true,
    preferLeaves: true,
  })
);*/

//var layer = viewer.imageryLayers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 4 }));
tileset.readyPromise
  .then(function () {
    viewer.zoomTo(tileset);

    // Apply the default style if it exists
    /*var extras = tileset.asset.extras;
    if (Cesium.defined(extras) && Cesium.defined(extras.ion) && Cesium.defined(extras.ion.defaultStyle)) {
      tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
    }*/
  })
  .otherwise(function (error) {
    console.log(error);
  });

// var promise = Cesium.IonResource.fromAssetId(692911).then(function (resource) {
//   return viewer.entities.add({
//     model: { uri: resource },
//   });
// });
