import { useState, useCallback, useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { ref, onValue } from "firebase/database";

import db from "../database/config";
import addMarker from "../database/addMarker";
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

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setMarkers(Object.values(data));
      }
    });
  }, []);

  const onMarkerAdd = useCallback(
    async (position) => {
      await addMarker(position, markers);
      onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        setMarkers(Object.values(data));
      });
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
