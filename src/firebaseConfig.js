// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_KEY
const PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECTID
const DOMAIN= process.env.REACT_APP_FIREBASE_DOMAIN
const APP_ID = process.env.REACT_APP_FIREBASE_APPID

const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: "studycreek-f049d.appspot.com",
  messagingSenderId: "637555834067",
  appId: APP_ID
};

// Initialize Firebase
const app = getApps().length? getApp(): initializeApp(firebaseConfig);
const auth = getAuth()

export {app, auth}