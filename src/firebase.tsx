// import app from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "@firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFqx1mpOj6AoHhMkKOrs0x612AqN6CppM",
  authDomain: "scissorapp-7e3dd.firebaseapp.com",
  projectId: "scissorapp-7e3dd",
  storageBucket: "scissorapp-7e3dd.appspot.com",
  messagingSenderId: "459371471803",
  appId: "1:459371471803:web:fd0d2181a704696c94da9e"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { firebaseApp, firestore, auth };
