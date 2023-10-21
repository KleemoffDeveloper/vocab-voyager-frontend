import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  const [testType, setTestType] = useState("");
  const [numberOfWord, setNumberOfWord] = useState();

  console.log("testType", testType);
  console.log("numberOfWord", numberOfWord);
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
                  setTestType={setTestType}
                  setNumberOfWord={setNumberOfWord}
                />
              }
            />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/log-in" element={<SignIn />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
