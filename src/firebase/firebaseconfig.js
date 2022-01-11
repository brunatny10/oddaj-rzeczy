// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7kD0DMOhQjviynB0eET28qsnw4VuEXCk",
  authDomain: "oddaj-rzeczy-ddab3.firebaseapp.com",
  projectId: "oddaj-rzeczy-ddab3",
  storageBucket: "oddaj-rzeczy-ddab3.appspot.com",
  messagingSenderId: "188370938289",
  appId: "1:188370938289:web:ebe9585d5e728678d4f590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;