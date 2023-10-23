import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home({ setQuestionType, setNumberOfWord }) {
  const [localType, setLocalType] = useState();

  const handleRadioButton = (value) => {
    // console.log(value)
    setNumberOfWord(value);
  };

  const handleChoicedtype = (value) => {
    // console.log(value);
    if (value === "multipleChoice") {
      setQuestionType("multipleChoice");
      setLocalType("multipleChoice");
    } else if (value === "dragAndDrop") {
      setQuestionType("dragAndDrop");
      setLocalType("dragAndDrop");
    } else if (value === "both") {
      setQuestionType("both");
    }
  };

  return (
    <div className="home">
      <div className="home-banner">
        <h2>Quiz Type</h2>

        <div className="button">
          <button
            onClick={() => handleChoicedtype("multipleChoice")}
            style={
              localType === "multipleChoice"
                ? { boxShadow: "1px 1px 15px cyan" }
                : null
            }
          >
            Multiple choice
          </button>
          <button
            onClick={() => handleChoicedtype("dragAndDrop")}
            style={
              localType === "dragAndDrop"
                ? { boxShadow: "1px 1px 15px cyan" }
                : null
            }
          >
            Drag & Drop
          </button>
          {/* <button onClick={() => handleChoicedtype("both")}>Both</button> */}
        </div>

        <h2>How many words?</h2>

        <div className="radio-selector-container">
          <div className="radio-selector">
            <input
              type="radio"
              id="5"
              name="words"
              value="5"
              onChange={() => handleRadioButton("5")}
            />
            <label htmlFor="5">5</label>
          </div>
          <div className="radio-selector">
            <input
              type="radio"
              id="10"
              name="words"
              value="10"
              onChange={() => handleRadioButton("10")}
            />
            <label htmlFor="10">10</label>
          </div>
          <div className="radio-selector">
            <input
              type="radio"
              id="15"
              name="words"
              value="15"
              onChange={() => handleRadioButton("15")}
            />
            <label htmlFor="15">15</label>
          </div>
          <div className="radio-selector">
            <input
              type="radio"
              id="20"
              name="words"
              value="20"
              onChange={() => handleRadioButton("20")}
            />
            <label htmlFor="20">20</label>
          </div>
          <div className="radio-selector">
            <input
              type="radio"
              id="25"
              name="words"
              value="25"
              onChange={() => handleRadioButton("25")}
            />
            <label htmlFor="25">25</label>
          </div>
          <div className="radio-selector">
            <input
              type="radio"
              id="30"
              name="words"
              value="30"
              onChange={() => handleRadioButton("30")}
            />
            <label htmlFor="30">30</label>
          </div>
        </div>
        <Link to="./quiz">
          <button type="button">Start Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
