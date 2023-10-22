import Result from "./pages/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Quiz from "./pages/Quiz";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  const [questionType, setQuestionType] = useState("");
  const [numberOfWord, setNumberOfWord] = useState();
  const [quiz, setQuiz] = useState();
  const [userResponses, setUserResponses] = useState([]);


  function m_quiz() {
    if (!questionType || !numberOfWord) {
      return;
    }
    let terms = data.terms;
    let arr = []
    while (arr.length < numberOfWord) {
      arr.push(...terms.splice(Math.floor(Math.random() * terms.length), 1));
    }
    setQuiz(arr);
    console.log(quiz);
  }
  return (
    <div className="app">
      <Router>
        <main>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                setQuestionType={setQuestionType}
                  setNumberOfWord={setNumberOfWord}
                />
              }
            />
            <Route path="/quiz" 
              element={<Quiz m_quiz={m_quiz} 
              quiz={quiz} 
              questionType={questionType}
              userResponses={userResponses}
              setUserResponses={setUserResponses}
              />} />
            <Route path="/results" element={<Result userResponses={userResponses}/>} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/log-in" element={<SignIn />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

import Result from "./pages/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import data from "./assets/data.json";
import Quiz from "./pages/Quiz";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
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
  const [questionType, setQuestionType] = useState("");
  const [numberOfWord, setNumberOfWord] = useState();
  const [quiz, setQuiz] = useState();
  const [userResponses, setUserResponses] = useState([]);


  function m_quiz() {
    if (!questionType || !numberOfWord) {
      return;
    }
    let terms = data.terms;
    let arr = []
    while (arr.length < numberOfWord) {
      arr.push(...terms.splice(Math.floor(Math.random() * terms.length), 1));
    }
    setQuiz(arr);
    console.log(quiz);
  }

  // console.log("setQuestionType", setQuestionType);
  // console.log("numberOfWord", numberOfWord);
  // console.log(quiz);
  return (
    <div className="app">
      <Router>
        <main>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                setQuestionType={setQuestionType}
                  setNumberOfWord={setNumberOfWord}
                />
              }
            />
            <Route path="/quiz" 
              element={<Quiz m_quiz={m_quiz} 
              quiz={quiz} 
              questionType={questionType}
              userResponses={userResponses}
              setUserResponses={setUserResponses}
              />} />
            <Route path="/results" element={<Result userResponses={userResponses}/>} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/log-in" element={<SignIn />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
