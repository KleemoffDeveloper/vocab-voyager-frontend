import { useEffect, useState } from "react";
import "./quiz.css";
import DragAndDrop from "../components/DragAndDrop";
import MultipleChoice from "../components/MultipleChoice";

// this can either be multiple choice or drag and drop

const definitions = [
  "something something yeah",
  "another definition",
  "group youp",
  "drag onnnnnnnmeeeeee",
];

const words = ["Fish", "Gather", "Pronounce", "Loop"];

// Save the localStorage when you click the next question

export default function Quiz({ m_quiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionType, setQuestionType] = useState("drag-drop"); // 'multiple-choice' || 'drag-drop'
  const [dragChoice, setDragChoice] = useState(null);

  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    m_quiz();
  }, []);

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
        <MultipleChoice />
      ) : (
        <DragAndDrop />
      )}
    </div>
  );
}
