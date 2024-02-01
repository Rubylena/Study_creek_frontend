// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_KEY

const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "studycreek-f049d.firebaseapp.com",
  projectId: "studycreek-f049d",
  storageBucket: "studycreek-f049d.appspot.com",
  messagingSenderId: "637555834067",
  appId: "1:637555834067:web:022346f4b059b7e432a826"
};

// Initialize Firebase
const app = getApps().length? getApp(): initializeApp(firebaseConfig);
const auth = getAuth()

export {app, auth}