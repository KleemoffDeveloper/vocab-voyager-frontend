import React, { useState } from "react";
import { auth } from "../components/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
        setError("Sign-in failed. Please check your email and password.");
      })
      .finally(() => {
        setIsLoading(false);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in-container">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <form className="sign-in-form" onSubmit={handleSignIn}>
          <h1>Please Log In</h1>
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
            Sign In
          </button>

          {error && <p className="error-message">{error}</p>}
        </form>
      )}
    </div>
  );
}

export default SignIn;
