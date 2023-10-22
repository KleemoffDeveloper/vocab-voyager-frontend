import { useEffect, useState } from "react";
import "./DragAndDrop.css";
import allData from "../assets/data.json";
import { Link } from "react-router-dom";

export default function DragAndDrop({
  numberOfWord,
  userResponses,
  setUserResponses,
}) {
  const [definitions, setDefinitions] = useState([]); // This contains the data for results
  const [randomizedTerms, setRandomizedTerms] = useState([]);
  const [quiz, setQuiz] = useState([]);

  function generateQuiz() {
    let terms = allData.terms;
    let arr = [];
    while (arr.length < numberOfWord) {
      arr.push(...terms.splice(Math.floor(Math.random() * terms.length), 1));
    }
    setQuiz(arr);

    const x_arr = [...arr];
    let randomTerms = [];
    for (let i = 0; i < arr.length; i++) {
      randomTerms.push(
        ...x_arr.splice(Math.floor(Math.random() * x_arr.length), 1)
      );
    }
    randomTerms = randomTerms.map((_term) => _term.term);
    setRandomizedTerms(randomTerms);

    const y_arr = arr.map((term) => {
      return {
        definition: term.description,
        correctAnswer: term.term,
        answer: null,
      };
    });
    setDefinitions(y_arr);
  }

  useEffect(() => {
    generateQuiz();
  }, []);

  function removeAnswer(definitionObj) {
    setRandomizedTerms([...randomizedTerms, definitionObj.answer]);
    definitionObj.answer = null;
  }

  function handleOnDrag(e, data) {
    e.dataTransfer.setData("term", data);
  }

  function handleOnDrop(e, definitionObj) {
    if (definitionObj.answer) {
      return;
    }
    const data = e.dataTransfer.getData("term");
    const arr = [...randomizedTerms];

    definitionObj.answer = data;
    arr.splice(arr.indexOf(data), 1);
    setRandomizedTerms(arr);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return quiz ? (
    <div className="drag-and-drop">
      <h1>Drag & drop the term to its matching definition.</h1>
      <Link to="/results">
        <button
          style={
            randomizedTerms.length === 0
              ? { opacity: "100%", boxShadow: "1px 1px 10px cyan" }
              : { opacity: "50%", cursor: "default", border: "none" }
          }
          onClick={() => {
            if (randomizedTerms.length > 0) {
              return;
            }
            const responses = [];
            definitions.forEach((definition) => {
              responses.push({
                correctAnswer: definition.correctAnswer,
                isCorrect: definition.correctAnswer === definition.answer,
                question: definition.definition,
                userAnswer: definition.answer,
              });
              setUserResponses(responses);
            });
          }}
        >
          Finish Quiz
        </button>
      </Link>
      <div className="main-container">
        <div className="terms-container">
          <h2>Terms — {`${randomizedTerms.length} / ${quiz.length}`}</h2>
          <div className="terms">
            {randomizedTerms.map((term) => (
              <div
                className="term"
                draggable
                onDragStart={(e) => handleOnDrag(e, term)}
              >
                {term}
              </div>
            ))}
          </div>
        </div>
        <div className="definitions-container">
          <h2>Definitions</h2>
          <div className="definitions">
            {definitions.map((definition) => (
              <div
                className="definition"
                onDrop={(e) => handleOnDrop(e, definition)}
                onDragOver={handleDragOver}
              >
                <div
                  className="answer-slot"
                  style={
                    definition.answer
                      ? { backgroundColor: "white", color: "black" }
                      : null
                  }
                >
                  {definition.answer}
                  {definition.answer ? (
                    <button
                      className="remove-button"
                      onClick={() => {
                        removeAnswer(definition);
                      }}
                    >
                      Remove
                    </button>
                  ) : null}
                </div>
                <div className="definition-slot">
                  <h3>{definition.definition}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
