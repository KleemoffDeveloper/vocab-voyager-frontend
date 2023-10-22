import { useEffect, useState } from "react";
import "./quiz.css";
import DragAndDrop from "../components/DragAndDrop";
import MultipleChoice from "../components/MultipleChoice";
import { Link, Navigate } from "react-router-dom";

export default function Quiz({ quiz, questionType, userResponses, setUserResponses }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [question, setQuestion] = useState();

  useEffect(() => {
    if (quiz) {
      setQuestion(quiz.terms[0]);
    }
  }, []);

  return (
    <div className="quiz">
      {quiz ? (
        quiz.type === "multipleChoice" ? (
                  <MultipleChoice quiz={quiz}
        userResponses = {userResponses}
        setUserResponses ={setUserResponses}
        />
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
