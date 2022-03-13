import { useEffect, useRef, useState } from "react";

import mapboxgl, { Map } from "mapbox-gl";
import styled from "styled-components";
import { MAPBOX_ACCESS_TOKEN } from "../config";

// eslint-disable-next-line import/no-webpack-loader-syntax
(mapboxgl as any).workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const MapContainer = styled.div`
  height: 400px;
`;

export function MapboxMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);
  const [lng, setLng] = useState(-3.2368);
  const [lat, setLat] = useState(55.9434);
  const [zoom, setZoom] = useState(16);

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      accessToken: MAPBOX_ACCESS_TOKEN,
      container: mapContainer.current,
      style: "mapbox://styles/jackalberry/cl0pmxfi300dc14ldgo5f2g4f",
      center: [lng, lat],
      zoom: zoom,
      attributionControl: true
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      if (map.current) {
        console.log(Number(map.current.getCenter().lng.toFixed(4)));
        console.log(Number(map.current.getCenter().lat.toFixed(4)));
        setLng(Number(map.current.getCenter().lng.toFixed(4)));
        setLat(Number(map.current.getCenter().lat.toFixed(4)));
        setZoom(Number(map.current.getZoom().toFixed(2)));
      }
    });
  });

  return (
    <div>
      <MapContainer ref={mapContainer} className="map-container" />
    </div>
  );
}
