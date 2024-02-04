// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_KEY;

const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "studycreek-f049d.firebaseapp.com",
  projectId: "studycreek-f049d",
  storageBucket: "studycreek-f049d.appspot.com",
  messagingSenderId: "637555834067",
  appId: "1:637555834067:web:022346f4b059b7e432a826",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC74UBNuVyRIa_WykhJMtLwmpKBCtO5ih0",
//   authDomain: "study-creek.firebaseapp.com",
//   projectId: "study-creek",
//   storageBucket: "study-creek.appspot.com",
//   messagingSenderId: "949273491106",
//   appId: "1:949273491106:web:91715b0fb644d452b209fb",
//   measurementId: "G-LLE8WP40VJ",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// const auth = getAuth(app);

// export { app, auth };
