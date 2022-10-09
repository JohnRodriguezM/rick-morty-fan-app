import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

//*para firebase messaging
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { act } from "react-dom/test-utils";

export const firebaseConfig = {
  apiKey: "AIzaSyDB3huoRUDnYjOVbbnK2Ej6Y6TU_SP0_cQ",
  authDomain: "rick-morty-app-c905f.firebaseapp.com",
  projectId: "rick-morty-app-c905f",
  storageBucket: "rick-morty-app-c905f.appspot.com",
  messagingSenderId: "630850839621",
  appId: "1:630850839621:web:7c393ecc73fec763216f2c",
  measurementId: "G-Y7EWQDWL6N",
};

export const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
export const analytics = getAnalytics(app);

//? proveedor de google
const provider = new GoogleAuthProvider();
//? proveedor de github
const providerGithub = new GithubAuthProvider();
export const auth = getAuth();
let currentUserr = auth.currentUser;
console.log("soy el current", currentUserr);

export const login = async (actualizador: Function) => {
  try {
    const sign = await signInWithPopup(auth, provider);

    /*console.log(sign);*/
    actualizador(sign);
  } catch (err) {
    alert("error en la autenticación");
    console.log(err);
  }
};

export const getOutApp = async () => {
  try {
    await signOut(auth);
    /*window.localStorage.setItem("googleToken", JSON.stringify(auth));*/
    console.log(auth);
  } catch (err) {
    console.log(err);
  }
};

//!realizar auth de user con github

export const loginGitHub = async (actualizador: Function) => {
  try {
    const result = await signInWithPopup(auth, providerGithub);
    /*console.log(result);*/
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    actualizador(result);
  } catch (error: any) {
    alert("error en la autenticación");
    const errorCode = error?.code;
    const errorMessage = error?.message;
  }
  /*signInWithPopup(auth,provider).then((result:any) => {

  })*/
};

//* crear un nuevo usuario para autenticación con correo y contraseña
export const createUserFirebaseEmail = async (
  auth: any,
  email: string,
  password: any
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err: any) {
    const errorCode = err.code;
    const errorMessage = err.message;
    alert(errorCode);
    /*alert(errorMessage);*/
    console.log(errorCode);
  }
};

//*permitir acceso a un usario a traves de correo y contraseña
export const allowAccessToUserEmailPassword = async (
  auth: any,
  email: string,
  password: any
) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const userCredential = res.user;
    return userCredential;
  } catch (err: any) {
    const errorCode = err.code;
    const errorMessage = err.message;
    alert(errorCode);
    alert(errorMessage);
    console.log(errorCode);
  }
};

//*funciones de cloud messaging para web
