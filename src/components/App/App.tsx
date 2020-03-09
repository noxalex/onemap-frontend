import React from 'react';
import { Map as Onemap, TileLayer, GeoJSON } from 'react-leaflet';
import Search from '../Search';

const defaultPosition: [number, number] = [47.0247, 28.8326];

function App() {
  const [geoJSONLayer, setGeoJSONLayer] = React.useState<any>();

  const centerCoord: [number, number] = geoJSONLayer ? [
    geoJSONLayer.features[0].geometry.coordinates[0][0],
    geoJSONLayer.features[0].geometry.coordinates[0][1]
  ] : defaultPosition;

  const coords = geoJSONLayer ?
    `z=17&lat=${geoJSONLayer.features[0].geometry.coordinates[0][0]}&lon=${geoJSONLayer.features[0].geometry.coordinates[0][1]}`
    : ``;

  return (
    <>
      <Search setLayer={setGeoJSONLayer as () => void} />
      <Onemap center={defaultPosition} zoom={17}>
        <TileLayer detectRetina={true} minZoom={11} maxZoom={21}
          url={`http://onemap.md/tile?x={x}&y={y}&z={z}&size=256`}
          attribution="&copy; OpenStreetMap contributor (OSM is awesome)"
        />
        {geoJSONLayer && <GeoJSON key={JSON.stringify(geoJSONLayer)} data={geoJSONLayer as any} />}
      </Onemap>
    </>
  );
}

export default App;
