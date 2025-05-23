import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credential = GoogleAuthProvider.credentialFromResult(result);

    const { displayName, email, photoURL, uid } = result.user;

    console.log(result);
    return {
      ok: true,
      displayName: displayName,
      email: email,
      photoURL,
      uid: uid,
    };
  } catch (error) {}
};
