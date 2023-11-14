import { useJsApiLoader } from "@react-google-maps/api";
import { Map } from "./Map";

const API_KEY = process.env.REACT_APP_API_KEY;

const center = {
  lat: 49.5290848,
  lng: 26.141698,
};

const App = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  return isLoaded ? <Map center={center} /> : <h2>Loading</h2>;
};

export default App;
