import { Marker as GoogleMapMarker } from "@react-google-maps/api";
import PropTypes from "prop-types";

const Marker = ({ position, number }) => {
  return <GoogleMapMarker position={position} label={number}></GoogleMapMarker>;
};

Marker.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  number: PropTypes.string.isRequired,
};

export default Marker;
