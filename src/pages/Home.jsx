import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home({ setTestType, setNumberOfWord }) {

  const handleRadioButton = (value) => {
    console.log(value)
    setNumberOfWord("value")
  };

  const handleChoicedtype = (value) => {
    console.log(value);
    if (value === "multipleChoice") {
      setTestType("multipleChoice");
    } else if (value === "dragAndDrop") {
      setTestType("dragAndDrop");
    } else if (value === "both") {
      setTestType("both");
    }
  };

  return (
    <div className="home">
        <h2>Quiz Type</h2>

        <div>
            <button onClick={() => handleChoicedtype("multipleChoice")}>Multiple choice</button>
            <button onClick={() => handleChoicedtype("dragAndDrop")}>Drag & Drop</button>
            <button onClick={() => handleChoicedtype("both")}>Both</button>
        </div>

        <h3>How many words?</h3>

        <div className="radio-selector-container">
            <div className="radio-selector">
                <input type="radio" id="5" name="words" value="5" onChange={() => handleRadioButton("5")} />
                <label htmlFor="5">5</label>
            </div>
            <div className="radio-selector">
                <input type="radio" id="5" name="words" value="5" onChange={() => handleRadioButton("5")} />
                <label htmlFor="10">10</label>
            </div>
            <div className="radio-selector">
                <input type="radio" id="5" name="words" value="5" onChange={() => handleRadioButton("5")} />
                <label htmlFor="5">5</label>
            </div>
            <div className="radio-selector">
                <input type="radio" id="5" name="words" value="5" onChange={() => handleRadioButton("5")} />
                <label htmlFor="5">5</label>
            </div>
        </div>

        <Link to="./quiz">
            <button type="button">
                Start Quiz
            </button>
        </Link>
    </div>
  );
}

export default Home;
