import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from './main'

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const signInWithGoogle = (actulizador: Function) => {
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      actulizador(result.user);
    } catch (error: any) {
      console.log(error);
      console.log(error.code);
      console.log(error.message);
    }
  };

  signIn();
};
