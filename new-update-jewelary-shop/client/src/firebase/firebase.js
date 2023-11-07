import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// apiKey: "AIzaSyA7Iv2wssnjrU_SUNLTF7HwP5RkZB4bUxM",
// authDomain: "new-class-auk.firebaseapp.com",
// projectId: "new-class-auk",
// storageBucket: "new-class-auk.appspot.com",
// messagingSenderId: "811776585850",
// appId: "1:811776585850:web:cfadade5f1b07e78ca8bc3",
const firebaseConfig = {
  apiKey: "AIzaSyC5WOArYUli0A9HYsGqnVKl9BWMCtw8zAM",
  authDomain: "jshop-ddd26.firebaseapp.com",
  projectId: "jshop-ddd26",
  storageBucket: "jshop-ddd26.appspot.com",
  messagingSenderId: "621054556669",
  appId: "1:621054556669:web:7c800c3297ea12f8844194",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
