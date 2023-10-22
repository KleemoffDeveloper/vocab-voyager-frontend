import { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../pages/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";

export default function Navbar() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const { authUser } = useAuth();
  const [searchChange, setSearchChange] = useState("");

  function navbarClickHandle(e, location) {
    e.preventDefault();
    navigate(location);
  }

  function handleSearch(e) {
    e.preventDefault();
    navigate(`searchResults/?term=${searchData}`);
  }
  const handleLogOutClick = () => {
    signOut(auth)
      .then(() => {
        alert(`log out successful!`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar-container">
      <img
        src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png"
        className="navbar-container__logo"
        onClick={(e) => navbarClickHandle(e, "/")}
        alt="website-logo"
      />
      <form
        className="navbar-container__searchbox"
        onSubmit={(e) => handleSearch(e)}
      >
        <input
          type="text"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          className="navbar-container__searchbox__input"
          placeholder="Search words..."
          required
        />
        <input
          type="submit"
          className="navbar-container__searchbox__submit-button"
          value="Search"
        />
      </form>
      <div className="navbar-container__account-buttons">
        {authUser ? (
          <button
            className="navbar-container__account-buttons__logout"
            onClick={handleLogOutClick}
          >
            Log Out
          </button>
        ) : (
          <button
            className="navbar-container__account-buttons__login"
            onClick={(e) => navbarClickHandle(e, "/sign-up")}
          >
            Sign Up
          </button>
        )}
        {authUser ? null : (
          <button
            className="navbar-container__account-buttons__signup"
            onClick={(e) => navbarClickHandle(e, "/log-in")}
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
}
