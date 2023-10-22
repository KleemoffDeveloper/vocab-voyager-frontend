import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Result.css"

function Result({ userResponses, handleChoicedtype }) {
    const correctAnswers = userResponses.filter(response => response.isCorrect).length
    const totalQuestions = userResponses.length;
    const [showScrollButton, setShowScrollButton] = useState(false);

    function handleAnswerColor(answer) {
        if (answer === true) {
            return "green"
        } 
        return "red";
    }

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowScrollButton(true);
        } else {
          setShowScrollButton(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    
    return (
      <div className="results">
        <h1>Quiz Results</h1>
        <div>
          {correctAnswers > 0 ? (
            <p>
              Congratulations! You answered {correctAnswers} of {totalQuestions}{" "}
              questions correctly.
            </p>
          ) : (
            <p>Sorry, you did not answer any questions correctly.</p>
          )}
          <div>
            <div className="questionsContainer">
              <table className="questionsTable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Question</th>
                    <th>Your Answer</th>
                    <th>Correct Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {userResponses.map((response, index) => (
                    <tr
                      key={index}
                      style={{ color: handleAnswerColor(response.isCorrect) }}
                    >
                      <td>{index + 1}</td>
                      <td>{response.question}</td>
                      <td>{response.userAnswer}</td>
                      <td style={{ color: "green" }}>
                        {response.correctAnswer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link to="/">
              <button>TRY AGAIN</button>
            </Link>
          </div>
          {showScrollButton && (
            <button className="scroll-top-button" onClick={scrollToTop}>
              &#8593;
            </button>
          )}
        </div>
      </div>
    );
}

export default Result;