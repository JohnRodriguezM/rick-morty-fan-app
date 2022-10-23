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
} from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";


export const firebaseConfig = {
  apiKey: "AIzaSyDB3huoRUDnYjOVbbnK2Ej6Y6TU_SP0_cQ",
  authDomain: "rick-morty-app-c905f.firebaseapp.com",
  projectId: "rick-morty-app-c905f",
  storageBucket: "rick-morty-app-c905f.appspot.com",
  messagingSenderId: "630850839621",
  appId: "1:630850839621:web:4169b491fe3e4e65216f2c",
  measurementId: "G-B4QKTW2VQV",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

//? proveedor de google
const provider = new GoogleAuthProvider();
//? proveedor de github
const providerGithub = new GithubAuthProvider();
export const auth = getAuth();

export const login = async (actualizador: Function) => {
  try {
    const sign = await signInWithPopup(auth, provider);
    if (sign) return actualizador(sign);
  } catch (err) {
    alert("error en la autenticación");
    console.log(err);
  }
};

export const getOutApp = async () => {
  try {
    await signOut(auth);
    console.log("auth sign out", auth.currentUser);
    return auth;
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
    if (result) return actualizador(result);
  } catch (error: any) {
    alert("error en la autenticación");
    const errorCode = error?.code;
    const errorMessage = error?.message;
  }
};

//* crear un nuevo usuario para autenticación con correo y contraseña
export const createUserFirebaseEmail = async (
  auth: any,
  email: string,
  password: string,
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err: any) {
    const errorCode = err.code;
    const errorMessage = err.message;
    alert(errorCode);
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
