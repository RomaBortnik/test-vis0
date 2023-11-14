import { useCallback, useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";
import PropTypes from "prop-types";

import Marker from "../Marker";
import { MapWrapper } from "./Map.styled";

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

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback((map) => {
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
        {markers.length > 0 && (
          <ul>
            {markers.map(({ location, index }) => (
              <li key={index}>
                <Marker position={location} number={`${index}`} />
              </li>
            ))}
          </ul>
        )}
      </GoogleMap>
    </MapWrapper>
  );
};

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }),
    })
  ).isRequired,
  onMarkerAdd: PropTypes.func.isRequired,
};

export default Map;
