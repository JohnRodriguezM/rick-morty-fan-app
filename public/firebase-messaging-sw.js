// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.9.4/firebase-app-compat.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.9.4/firebase-messaging-compat.js');

export const firebaseConfig = {
  apiKey: "AIzaSyDB3huoRUDnYjOVbbnK2Ej6Y6TU_SP0_cQ",
  authDomain: "rick-morty-app-c905f.firebaseapp.com",
  projectId: "rick-morty-app-c905f",
  storageBucket: "rick-morty-app-c905f.appspot.com",
  messagingSenderId: "630850839621",
  appId: "1:630850839621:web:4169b491fe3e4e65216f2c",
  measurementId: "G-B4QKTW2VQV",
};


const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);


messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});