import React from 'react';
import { Map as Onemap, TileLayer } from 'react-leaflet';
import Search from '../Search';

const defaultPosition: [number, number] = [47.0247, 28.8326];

function App() {
  return (
    <>
      <Search />
      <Onemap center={defaultPosition} zoom={17}>
        <TileLayer detectRetina={true} minZoom={11} maxZoom={21}
          url={`http://localhost/tile?x={x}&y={y}&z={z}&size=256`}
          attribution="&copy; OpenStreetMap contributor (OSM is awesome)"
        />
      </Onemap>
    </>
  );
}

export default App;
