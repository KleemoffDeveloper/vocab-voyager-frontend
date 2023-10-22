import React, { useState } from "react";
import { auth } from "../components/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        alert("New account created!");
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
        setError("Sign up failed. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-up-container">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <form className="sign-up-form" onSubmit={handleSignUp}>
          <h1>Create an Account</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            Sign Up
          </button>

          {error && <p className="error-message">{error}</p>}
        </form>
      )}
    </div>
  );
}

export default SignUp;
