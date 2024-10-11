import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhBErH_MxSEm9F9eevk1dQhKmf-cJ-8m8",
  authDomain: "my-tolist.firebaseapp.com",
  projectId: "my-tolist",
  storageBucket: "my-tolist.appspot.com",
  messagingSenderId: "1017372656070",
  appId: "1:1017372656070:web:b24c895c82e3696dddf2c7",
  measurementId: "G-8FXWMVEKQZ",
  databseURL: "https://my-tolist-default-rtdb.firebaseio.com/"

};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const database = getDatabase(app);

