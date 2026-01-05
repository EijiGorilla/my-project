import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-scene";
import "@arcgis/map-components/components/arcgis-elevation-profile";
import "@arcgis/map-components/components/arcgis-direct-line-measurement-3d";
import "../index.css";
import "../App.css";
import { useEffect, useState } from "react";
import { ArcgisAreaMeasurement2d } from "@arcgis/map-components/components/arcgis-area-measurement-2d";

export default function MapDisplay() {
  const [mapView, setMapView] = useState();
  const arcgisMap = document.querySelector("arcgis-map");
  const arcgisElevationProfile = document.querySelector(
    "arcgis-elevation-profile"
  );

  useEffect(() => {
    if (mapView) {
      arcgisElevationProfile.profiles = [
        {
          type: "ground", // first profile line samples the ground elevation
        },
        {
          type: "view", // second profile samples the view and shows building profiles
        },
      ];
    }
  });

  // this is the test apps
  return (
    <arcgis-scene
      item-id="9a542f6755274436985617a462ffdf44"
      //   basemap="dark-gray-vector"
      //   viewingMode="local"
      //   ground="world-elevation"
      onarcgisViewReadyChange={(event) => {
        setMapView(event.target);
      }}
    >
      <arcgis-elevation-profile slot="bottom-right"></arcgis-elevation-profile>
      <arcgis-direct-line-measurement-3d slot="bottom-left"></arcgis-direct-line-measurement-3d>
    </arcgis-scene>
  );
}
