import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MultipleChoice.css";

export default function MultipleChoice({ quiz, userResponses, setUserResponses }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [userResponses, setUserResponses] = useState([]);
  const [choices, setChoices] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (quiz && quiz[currentQuestion]) {
      generateChoices();
    }
  }, [currentQuestion, quiz]);

  const generateChoices = () => {
    const currentQuestionData = quiz[currentQuestion];
    const currentCorrectAnswer = currentQuestionData.term;

    const incorrectAnswers = getIncorrectAnswers(currentCorrectAnswer);
    const allChoices = shuffleArray([currentCorrectAnswer, ...incorrectAnswers]);

    setChoices(allChoices);

    const userResponse = {
      question: currentQuestionData.description,
      userAnswer: "", 
      correctAnswer: currentCorrectAnswer,
      isCorrect: false,
    };

    setUserResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[currentQuestion] = userResponse;
      return updatedResponses;
    });
  };

  const getIncorrectAnswers = (correctAnswer) => {
    const otherQuestions = quiz.filter((question, index) => index !== currentQuestion);
    const incorrectAnswers = [];

    while (incorrectAnswers.length < 3) {
      const randomIndex = Math.floor(Math.random() * otherQuestions.length);
      const randomAnswer = otherQuestions[randomIndex].term;

      if (!incorrectAnswers.includes(randomAnswer) && randomAnswer !== correctAnswer) {
        incorrectAnswers.push(randomAnswer);
      }
    }

    return incorrectAnswers;
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  const handleFinish = () => {
    setFinished(true);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleChoiceChange = (event) => {
    const selectedChoice = event.target.value;

    if (userResponses[currentQuestion]) {
      const isCorrect = selectedChoice === quiz[currentQuestion].term;
      console.log(userResponses[currentQuestion].correctAnswer)
      setUserResponses((prevResponses) => {
        const updatedResponses = [...prevResponses];
        updatedResponses[currentQuestion].userAnswer = selectedChoice;
        updatedResponses[currentQuestion].isCorrect = isCorrect;
        return updatedResponses;
      });
    }
  };

  if (!quiz || !quiz[currentQuestion]) {
    return <div>No quiz data available.</div>;
  }

  if (finished) {
    return (
      <Link to="./result"></Link>
    );
  }

  console.log("currentQuestion", currentQuestion)
  console.log("userResponses", userResponses)  
  console.log("choices", choices)  
  console.log("finished", )  

  return (
    <div className="multipleChoice-container">
      <h1>Multiple Choice</h1>
      <div className="multipleChoice">
        <div>
          <h2>{quiz[currentQuestion].description}</h2>
          <ul>
            {choices.map((choice, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={choice}
                    checked={userResponses[currentQuestion] && userResponses[currentQuestion].userAnswer === choice}
                    onChange={handleChoiceChange}
                  />
                  {choice}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="previous-next-button">
        {/* <button onClick={handlePreviousQuestion}>Previous</button> */}
        
        {currentQuestion > 0 ? (
          <button onClick={handlePreviousQuestion}>Previous</button>
        ) : (
          <button>!</button>
        )}

        {currentQuestion < quiz.length - 1 ? (
          <button onClick={handleNextQuestion}>Next</button>
        ) : (
          <button onClick={handleFinish}>Finish Quiz</button>
        )}
      </div>
    </div>
  );
}
