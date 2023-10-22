import '../styles/quiz.scss'

const definitions = [
    "something something yeah",
    "another definition",
    "group youp",
    "drag onnnnnnnmeeeeee",
  ];
  
  const words = ["Fish", "Gather", "Pronounce", "Loop"];

export default function DragAndDrop({handleOnDrop, handleDragOver, handleOnDrag}) {
  return (
    <div className="quiz__drag-and-drop">
      <h1>Drag & drop the words to their matching definitions.</h1>
      <div className="quiz__drag-and-drop__layout">
        <div className="quiz__drag-and-drop__layout__banner">
          <h2>Definitions</h2>
          <div className="layout">
            {definitions.map((def, i) => (
              <div
                key={i}
                className="quiz__drag-and-drop__layout__option"
                onDrop={handleOnDrop}
                onDragOver={handleDragOver}
              >
                {def}
                <div className="quiz__drag-and-drop__layout__choice"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="quiz__drag-and-drop__layout__banner__words">
          <h2>Words</h2>
          <div className="quiz__drag-and-drop__layout__banner__words__layout">
            {words.map((word, i) => (
              <div
                key={i}
                className="quiz__drag-and-drop__layout__option"
                draggable
                onDragStart={(e) => handleOnDrag(e, "option")}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
