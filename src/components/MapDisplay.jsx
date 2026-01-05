import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-scene";
import "@arcgis/map-components/components/arcgis-elevation-profile";
import "@arcgis/map-components/components/arcgis-direct-line-measurement-3d";
import "../index.css";
import "../App.css";

export default function MapDisplay() {
  return (
    <arcgis-scene
      basemap="dark-gray-vector"
      viewingMode="local"
      ground="world-elevation"
    >
      <arcgis-elevation-profile
        slot="bottom-right"
        unit="millimeters"
      ></arcgis-elevation-profile>
      <arcgis-direct-line-measurement-3d slot="bottom-left"></arcgis-direct-line-measurement-3d>
    </arcgis-scene>
  );
}
