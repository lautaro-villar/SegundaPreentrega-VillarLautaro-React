import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqTVoS-kS8QqwDabgJa00R26PxsJPE3CA",
  authDomain: "trabajofinal-fdcb3.firebaseapp.com",
  projectId: "trabajofinal-fdcb3",
  storageBucket: "trabajofinal-fdcb3.appspot.com",
  messagingSenderId: "24459572137",
  appId: "1:24459572137:web:44ffbd19c59da936bbcab8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
