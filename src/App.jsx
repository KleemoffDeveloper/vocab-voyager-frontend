import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home"
import Navbar from "./components/NavBar";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

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
  const [testType, setTestType] = useState("");
  const [numberOfWord, setNumberOfWord] = useState();
  
  console.log("testType", testType)
  console.log("numberOfWord", numberOfWord)
  return (
    <div className='app'>
      <Router>
        <main>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home
              setTestType = {setTestType}
              setNumberOfWord = {setNumberOfWord}
            />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
