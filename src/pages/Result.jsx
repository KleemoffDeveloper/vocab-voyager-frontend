import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css"

function Result() {
    const navigate = useNavigate();
    const [quizData, setQuizData] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    useEffect(() => {
      // Retrieve quiz data from localStorage
      const storedData = JSON.parse(localStorage.getItem("quizData"));
      if (storedData) {
        setQuizData(storedData);
        // Calculate the number of correct answers
        const correct = storedData.filter(
          (item) => item.userAnswer === item.correctAnswer
        );
        setCorrectAnswers(correct.length);
      }
    }, []);


    return (
      <div className="results">
        <h1>Quiz Results</h1>
        <div>
          <p>Congratulations you answered 0 of 15 questions correctly.</p>
          <div>
            <ol>
              <li>Question Answer</li>
            </ol>
            <footer>
              Try again or attempt a different type of quiz
              below.
            </footer>
          </div>
        </div>
      </div>
    );
}

export default Result;