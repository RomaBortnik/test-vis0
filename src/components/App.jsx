import { useJsApiLoader } from "@react-google-maps/api";
import { useState, useCallback } from "react";
import Map from "./Map";
import Loader from "./Loader";

const API_KEY = process.env.REACT_APP_API_KEY;

const center = {
  lat: 49.5290848,
  lng: 26.141698,
};

const App = () => {
  const [markers, setMarkers] = useState([]);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const onMarkerAdd = useCallback(
    (coordinates) => {
      setMarkers([...markers, coordinates]);
    },
    [markers]
  );

  return isLoaded ? (
    <Map center={center} markers={markers} onMarkerAdd={onMarkerAdd} />
  ) : (
    <Loader />
  );
};

export default App;
