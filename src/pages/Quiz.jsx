import { useState } from "react";
import "./quiz.css";

// this can either be multiple choice or drag and drop

export default function Quiz({ quiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [questionType, setQuestionType] = useState("drag-drop"); // 'multiple-choice' || 'drag-drop'

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
          <h1>Drag & drop what the words to their matching definitions.</h1>
          <div className="layout">
            <div className="banner definitions">
              <h2>Definitions</h2>
              <div className="layout">
                <div
                  className="option"
                  onMouseUp={(e) => {
                    console.log("hey");
                  }}
                >
                  option name
                </div>
                <div className="option">option name</div>
                <div className="option">option name</div>
                <div className="option">option name</div>
              </div>
            </div>

            <div className="banner words">
              <h2>Words</h2>
              <div className="layout">
                <div
                  className="option"
                  onDragStart={(e) => {
                    console.log(e.target);
                  }}
                >
                  option name
                </div>
                <div className="option">option name</div>
                <div className="option">option name</div>
                <div className="option">option name</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}