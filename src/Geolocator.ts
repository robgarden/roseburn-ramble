import { LngLat } from "mapbox-gl";

class GeoLocator {
  ready = false;
  callback: (position: LngLat) => void;
  watchId: number | null = null;

  constructor(callback: (position: LngLat) => void) {
    this.callback = callback;
  }

  callCallback(position: GeolocationPosition) {
    const { longitude: lng, latitude: lat } = position.coords;
    this.callback(new LngLat(lng, lat));
  }

  init() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.ready = true;
        this.callCallback(position);
        this.watchId = navigator.geolocation.watchPosition(this.callCallback);
      },
      (_error) => {
        this.ready = false;
      }
    );
  }

  cleanup() {
    if (this.watchId) {
      navigator.geolocation.clearWatch(this.watchId);
    }
  }
}

export default GeoLocator;
