/*import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";

import { getMessaging, onMessage, messaging } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-messaging.js";*/


// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/9.9.4/firebase-app-compat.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/9.9.4/firebase-messaging-compat.js");


const firebaseConfig = {
  apiKey: "AIzaSyDB3huoRUDnYjOVbbnK2Ej6Y6TU_SP0_cQ",
  projectId: "rick-morty-app-c905f",
  messagingSenderId: "630850839621",
  appId: "1:630850839621:web:4169b491fe3e4e65216f2c",

};


// eslint-disable-next-line no-undef
const app = firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const message = firebase.messaging(app);

message.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.data.title;
  console.log("notificationTitle", notificationTitle);
  const notificationOptions = {
    body: payload.data.body,
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});



/*
    pendiente de implementar las imagenes en las notificaciones y en el manifest.json

{
  "src": "favicon.ico",
  "sizes": "64x64 32x32 24x24 16x16",
  "type": "image/x-icon"
},
{
  "src": "logo192.png",
  "type": "image/png",
  "sizes": "192x192"
},
{
  "src": "logo512.png",
  "type": "image/png",
  "sizes": "512x512"
}*/