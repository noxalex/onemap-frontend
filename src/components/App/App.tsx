import React from 'react';
import { Map as Onemap, TileLayer } from 'react-leaflet';
import Search from '../Search';

const defaultPosition: [number, number] = [47.0247, 28.8326];

function App() {
  return (
    <>
      <Search />
      <Onemap center={defaultPosition} zoom={17}>
        <TileLayer
          url={`http://onemap.md/tile?x={x}&y={y}&z={z}&size=256`}
          attribution="&copy; OpenStreetMap contributor (OSM is awesome)"
        />
      </Onemap>
    </>
  );
}

export default App;
