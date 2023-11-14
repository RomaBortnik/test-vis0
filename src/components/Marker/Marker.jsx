import { Marker as GoogleMapMarker } from "@react-google-maps/api";

const Marker = ({ position, number }) => {
  return <GoogleMapMarker position={position} label={number}></GoogleMapMarker>;
};

export default Marker;
