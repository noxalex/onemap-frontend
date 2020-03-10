import React from 'react';
import { Map as Onemap, TileLayer, GeoJSON, LatLngBounds } from 'react-leaflet';
import Search from '../Search';
import { geoJSON } from 'leaflet';

const defaultPosition: [number, number] = [47.0247, 28.8326];

function App() {
  const [geoJSONLayer, setGeoJSONLayer] = React.useState();
  const onemapRef = React.useRef(null);
  const geojsonRef = React.useRef(null);

  React.useEffect(() => {
    const mapRef: any = onemapRef.current;
    const geoLayerRef: any = geojsonRef.current;

    if (geoLayerRef) {
      mapRef.leafletElement.fitBounds(geoLayerRef.leafletElement.getBounds());
    }

  }, [geoJSONLayer]);

  return (
    <>
      <Search setLayer={setGeoJSONLayer as () => void} />
      <Onemap center={defaultPosition} zoom={17} ref={onemapRef}>
        <TileLayer detectRetina={true} minZoom={11} maxZoom={21}
          url={`http://onemap.md/tile?x={x}&y={y}&z={z}&size=256`}
          attribution="&copy; OpenStreetMap contributor (OSM is awesome)"
        />
        {geoJSONLayer && <GeoJSON key={JSON.stringify(geoJSONLayer)} data={geoJSONLayer} ref={geojsonRef} />}
      </Onemap>
    </>
  );
}

export default App;
