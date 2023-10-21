// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

import Navbar from "./components/NavBar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.API_KEY,
//   authDomain: import.meta.env.AUTH_DOMAIN,
//   projectId: import.meta.env.PROJECT_ID,
//   storageBucket: import.meta.env.STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
//   appId: import.meta.env.APP_ID
// };

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="app">
      <Navbar />
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
