import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDB3huoRUDnYjOVbbnK2Ej6Y6TU_SP0_cQ",
  authDomain: "rick-morty-app-c905f.firebaseapp.com",
  projectId:"rick-morty-app-c905f",
  storageBucket: "rick-morty-app-c905f.appspot.com",
  messagingSenderId: "630850839621",
  appId:"1:630850839621:web:7c393ecc73fec763216f2c",
  measurementId: "G-Y7EWQDWL6N",
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export const login = () => {
  signInWithPopup(auth,provider).then((result:any) => {
    console.log(result)
  })
};
