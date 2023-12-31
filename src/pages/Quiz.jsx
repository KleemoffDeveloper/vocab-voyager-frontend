import { useEffect, useState } from "react";
import "./quiz.css";
import DragAndDrop from "../components/DragAndDrop";
import MultipleChoice from "../components/MultipleChoice";

// this can either be multiple choice or drag and drop

// Save the localStorage when you click the next question

export default function Quiz({ m_quiz, quiz, numberOfWord, questionType, userResponses, setUserResponses }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [dragChoice, setDragChoice] = useState(null);

  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    m_quiz();
  }, []);

  // function handleOnDrag(e, widgetType) {
  //   e.dataTransfer.setData("widgetType", widgetType);
  // }

  // function handleOnDrop(e) {
  //   const widgetType = e.dataTransfer.getData("widgetType");
  //   console.log(widgets);
  //   setWidgets([...widgets, widgetType]);
  // }

  // function handleDragOver(e) {
  //   e.preventDefault();
  // }

  return (
    <div className="quiz">
      {questionType === "multipleChoice" ? (
        <MultipleChoice quiz={quiz}
        userResponses = {userResponses}
        setUserResponses ={setUserResponses}
        />
      ) : (
        <DragAndDrop quiz={quiz}
        userResponses = {userResponses}
        setUserResponses ={setUserResponses}
        numberOfWord={numberOfWord}/>
      )}
    </div>
  );
}
