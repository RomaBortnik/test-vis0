import { GoogleMap } from "@react-google-maps/api";
import { useCallback, useRef } from "react";
import { MapWrapper } from "./Map.styled";
import Marker from "../Marker";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: true,
  fullscreenControl: true,
};

const Map = ({ center, markers, onMarkerAdd }) => {
  const mapRef = useRef(undefined);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const onClick = useCallback(
    (loc) => {
      const lat = loc.latLng.lat();
      const lng = loc.latLng.lng();
      onMarkerAdd({ lat, lng });
    },
    [onMarkerAdd]
  );

  return (
    <MapWrapper>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onClick}
        options={defaultOptions}
      >
        <ul>
          {markers.map((pos, index) => (
            <li key={index}>
              <Marker position={pos} number={`${index}`} />
            </li>
          ))}
        </ul>
      </GoogleMap>
    </MapWrapper>
  );
};

export default Map;
