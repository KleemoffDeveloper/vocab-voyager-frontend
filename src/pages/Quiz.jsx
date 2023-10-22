import { useEffect, useState } from "react";
import "./quiz.css";
import DragAndDrop from "../components/DragAndDrop";
import MultipleChoice from "../components/MultipleChoice";
import { Link, Navigate } from "react-router-dom";

export default function Quiz({ quiz }) {
  const [question, setQuestion] = useState();

  useEffect(() => {
    if (quiz) {
      setQuestion(quiz.terms[0]);
    }
  }, []);

  function next() {
    let index = quiz.terms.indexOf(question);
    if (index < quiz.terms.length - 1) {
      setQuestion(quiz.terms[index + 1]);
    }
  }

  function previous() {
    let index = quiz.terms.indexOf(question);
    if (index > 0) {
      setQuestion(quiz.terms[index - 1]);
    }
  }

  return (
    <div className="quiz">
      {quiz ? (
        quiz.type === "multipleChoice" ? (
          <MultipleChoice />
        ) : quiz.type === "dragAndDrop" ? (
          <DragAndDrop terms={quiz.terms} />
        ) : (
          <div>
            <h1>Sorry, nothing to show here...</h1>
            <Link to={"/"}>
              <button>Back to home page</button>
            </Link>
          </div>
        )
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
}
