import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import data from "../assets/data.json";

function Home({ setQuiz }) {
  const [testType, setTestType] = useState("");
  const [numberOfWord, setNumberOfWord] = useState();

  const handleRadioButton = (value) => {
    setNumberOfWord(value);
  };

  const handleChoicedtype = (value) => {
    setTestType(value);
  }
  return (
    <div className="home">
      <h2>Quiz Type</h2>

      <div className="button">
        <button
          onClick={() => handleChoicedtype("multipleChoice")}
          style={
            testType === "multipleChoice"
              ? { boxShadow: "1px 1px 10px white" }
              : null
          }
        >
          Multiple choice
        </button>
        <button
          onClick={() => handleChoicedtype("dragAndDrop")}
          style={
            testType === "dragAndDrop"
              ? { boxShadow: "1px 1px 10px white" }
              : null
          }
        >
          Drag & Drop
        </button>
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
        <button
          type="button"
          onClick={() => {
            if (!testType || !numberOfWord) {
              return;
            }
            let terms = data.terms;
            let arr = [];
            while (arr.length < numberOfWord) {
              arr.push(
                ...terms.splice(Math.floor(Math.random() * terms.length), 1)
              );
            }
            setQuiz({ type: testType, terms: arr });
          }}
        >
          Start Quiz
        </button>
      </Link>
    </div>
  );
}

export default Home;
