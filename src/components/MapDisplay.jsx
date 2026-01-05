import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-elevation-profile";
import "../index.css";
import "../App.css";

export default function MapDisplay() {
  return (
    <arcgis-map basemap="dark-gray-vector" ground="world-elevation">
      <arcgis-elevation-profile
        slot="bottom-right"
        unit="millimeters"
      ></arcgis-elevation-profile>
    </arcgis-map>
  );
}
