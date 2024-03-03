import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVIZ6Drj5Ate_RLtNHQV12Hvcsm1OFmo0",
  authDomain: "clone-f5d2d.firebaseapp.com",
  projectId: "clone-f5d2d",
  storageBucket: "clone-f5d2d.appspot.com",
  messagingSenderId: "516788515321",
  appId: "1:516788515321:web:6ac970aeac5d0cb55c4d28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;
