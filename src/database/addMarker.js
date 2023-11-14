import { ref, set } from "firebase/database";
import { nanoid } from "nanoid";
import db from "./config";

const addMarker = (location, markers) => {
  const id = nanoid();
  const currentTimestamp = new Date();

  set(ref(db, `/${id}`), {
    index: markers.length + 1,
    location,
    timestamp: currentTimestamp.toISOString(),
  });
};

export default addMarker;
