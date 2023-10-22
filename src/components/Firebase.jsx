import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnnISxt1Yo_hBQ6npW9a_j9A8QWADgnbc",
  authDomain: "vocab-voyager-815e2.firebaseapp.com",
  projectId: "vocab-voyager-815e2",
  storageBucket: "vocab-voyager-815e2.appspot.com",
  messagingSenderId: "985621930526",
  appId: "1:985621930526:web:56bc41763ccd2edd97840f",
  measurementId: "G-8D35ZJTB7J",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
