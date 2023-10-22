import { useEffect, useState } from "react";
import "./DragAndDrop.css";

export default function DragAndDrop({ terms }) {
  const [definitions, setDefinitions] = useState([]); // This contains the data for results
  const [randomizedTerms, setRandomizedTerms] = useState([]);

  function randomizeTerms() {
    const arr = [...terms];
    let randomTerms = [];
    for (let i = 0; i < terms.length; i++) {
      randomTerms.push(
        ...arr.splice(Math.floor(Math.random() * arr.length), 1)
      );
    }
    randomTerms = randomTerms.map((_term) => _term.term);
    setRandomizedTerms(randomTerms);
  }

  function setDefinitionQueries() {
    const arr = terms.map((term) => {
      return {
        definition: term.description,
        correctAnswer: term.term,
        answer: null,
      };
    });
    setDefinitions(arr);
  }

  useEffect(() => {
    randomizeTerms();
    setDefinitionQueries();
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

  return (
    <div className="drag-and-drop">
      <h1>Drag & drop the term to its matching definition.</h1>
      <button
        style={
          randomizedTerms.length === 0
            ? { opacity: "100%", boxShadow: "1px 1px 10px cyan" }
            : { opacity: "50%", cursor: "default", border: "none" }
        }
      >
        Finish Quiz
      </button>
      <div className="main-container">
        <div className="terms-container">
          <h2>Terms — {`${randomizedTerms.length} / ${terms.length}`}</h2>
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
  );
}
