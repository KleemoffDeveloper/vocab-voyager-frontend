import { useEffect, useState } from "react";
import "./quiz.css";

// this can either be multiple choice or drag and drop

const definitions = [
  "something something yeah",
  "another definition",
  "group youp",
  "drag onnnnnnnmeeeeee",
];

const words = ["Fish", "Gather", "Pronounce", "Loop"];

// Save the localStorage when you click the next question

export default function Quiz({ quiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionType, setQuestionType] = useState("drag-drop"); // 'multiple-choice' || 'drag-drop'
  const [dragChoice, setDragChoice] = useState(null);

  const [widgets, setWidgets] = useState([]);

  function handleOnDrag(e, widgetType) {
    e.dataTransfer.setData("widgetType", widgetType);
  }

  function handleOnDrop(e) {
    const widgetType = e.dataTransfer.getData("widgetType");
    console.log(widgets);
    setWidgets([...widgets, widgetType]);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <div className="quiz">
      {questionType === "multiple-choice" ? (
        <div className="banner">
          <h1>Multiple Choice</h1>
          <h2>1. What is the definition of "word"?</h2>
          <div className="choices">
            {[1, 2, 3, 4].map((choice) => {
              return (
                <div>
                  Answer Choice <input type="checkbox" />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="drag-and-drop">
          <h1>Drag & drop the words to their matching definitions.</h1>
          <div className="layout">
            <div className="banner definitions">
              <h2>Definitions</h2>
              <div className="layout">
                {definitions.map((def) => (
                  <div
                    className="option"
                    onDrop={handleOnDrop}
                    onDragOver={handleDragOver}
                  >
                    {def}
                    <div className="choice"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="banner words">
              <h2>Words</h2>
              <div className="layout">
                {words.map((word) => (
                  <div
                    className="option"
                    draggable
                    onDragStart={(e) => handleOnDrag(e, 'option')}
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}