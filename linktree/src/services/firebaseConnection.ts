
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBK8fMsabB15ngoZ-Vg5oyiZ3r499SCCBc",
  authDomain: "linktree-34045.firebaseapp.com",
  projectId: "linktree-34045",
  storageBucket: "linktree-34045.firebasestorage.app",
  messagingSenderId: "611098727089",
  appId: "1:611098727089:web:2c1eed43fd946af0a64890",
  measurementId: "G-0P7DSF053S"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const fireStore = getFirestore(app)

export {auth, fireStore}