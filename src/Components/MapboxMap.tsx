import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import distance from "@turf/distance";
import mapboxgl, { LngLat, Map, Marker } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import { MAPBOX_ACCESS_TOKEN } from "../config";
import GeoLocator from "../Geolocator";
import { Paragraph } from "../styles";

(mapboxgl as any).workerClass =
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const MapContainer = styled.div`
  height: 200px;
`;

export function MapboxMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);
  const [lng, setLng] = useState(-3.2368);
  const [lat, setLat] = useState(55.9434);
  const [zoom, setZoom] = useState(16);
  const marker = useRef<Marker>();
  const [currentLocation, setCurrentLocation] = useState<LngLat | undefined>();

  const distanceFromClue = useMemo(() => {
    if (currentLocation) {
      return distance([currentLocation.lng, currentLocation.lat], [lng, lat], {
        units: "miles",
      });
    }
  }, [currentLocation]);

  function plotMarkerAndCenter(map: Map, lngLat: LngLat) {
    setCurrentLocation(lngLat);
    map.setCenter(lngLat);
    if (!marker.current) {
      marker.current = new mapboxgl.Marker().setLngLat(lngLat).addTo(map);
    } else {
      marker.current.setLngLat(lngLat);
    }
  }

  const markCurrentLocation = useCallback((lngLat: LngLat) => {
    if (!map.current) {
      if (!!mapContainer.current) {
        map.current = new mapboxgl.Map({
          accessToken: MAPBOX_ACCESS_TOKEN,
          container: mapContainer.current,
          // style: "mapbox://styles/jackalberry/cl0pmxfi300dc14ldgo5f2g4f",
          style: "mapbox://styles/mapbox/streets-v11",
          center: [lng, lat],
          zoom: zoom,
          attributionControl: true,
        });
        plotMarkerAndCenter(map.current, lngLat);
      }
    } else {
      plotMarkerAndCenter(map.current, lngLat);
    }
  }, []);

  useEffect(() => {
    const locator = new GeoLocator(markCurrentLocation);
    locator.init();
    return () => {
      locator.cleanup();
    };
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      if (map.current) {
        setLng(Number(map.current.getCenter().lng.toFixed(4)));
        setLat(Number(map.current.getCenter().lat.toFixed(4)));
        setZoom(Number(map.current.getZoom().toFixed(2)));
      }
    });
  }, [map.current]);

  return (
    <div style={{ width: "100%" }}>
      {typeof distanceFromClue !== "undefined" && (
        <Paragraph>
          Est. Distance from clue {distanceFromClue.toFixed(5)} miles
        </Paragraph>
      )}
      <MapContainer ref={mapContainer} className="map-container" />
    </div>
  );
}
