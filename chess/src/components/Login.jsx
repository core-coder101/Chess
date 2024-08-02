import React from "react";
import {
  auth,
  db,
  GoogleAuthProvider,
  signInWithPopup,
} from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import "../css/Login.css"

const Login = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Save user data to Firestore
      saveUserToFirestore(user);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const saveUserToFirestore = async (user) => {
    const userRef = doc(db, "users", user.uid);
    await setDoc(
      userRef,
      {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
      { merge: true }
    );
  };

  return (
    <div className="Login">
      <h1 style={{ color: "white" }}>
        Log in to Play <span style={{ color: "#739552" }}>Online</span>
      </h1>
      <button onClick={signInWithGoogle}>
        Log in with Google <FcGoogle style={{ width: "40px", height: "40px" }} />
      </button>
    </div>
  );
};

export default Login;
