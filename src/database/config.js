import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBuKmyrs-CDqv_4dY6oIdVsRXFZxD37ors",
  authDomain: "test-17e7b.firebaseapp.com",
  projectId: "test-17e7b",
  storageBucket: "test-17e7b.appspot.com",
  messagingSenderId: "116941147935",
  appId: "1:116941147935:web:06098506308c44dcc0ea2a",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;
