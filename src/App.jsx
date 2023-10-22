import Result from "./pages/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Quiz from "./pages/Quiz";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  const [quiz, setQuiz] = useState(null);

  return (
    <div className="app">
      <Router>
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home setQuiz={setQuiz} />} />
            <Route path="/quiz" element={<Quiz quiz={quiz} />} />
            <Route path="/results" element={<Result />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/log-in" element={<SignIn />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
