const definitions = [
    "something something yeah",
    "another definition",
    "group youp",
    "drag onnnnnnnmeeeeee",
  ];
  
  const words = ["Fish", "Gather", "Pronounce", "Loop"];

export default function DragAndDrop({handleOnDrop, handleDragOver, handleOnDrag}) {
  return (
    <div className="drag-and-drop">
      <h1>Drag & drop the words to their matching definitions.</h1>
      <div className="layout">
        <div className="banner definitions">
          <h2>Definitions</h2>
          <div className="layout">
            {definitions.map((def, i) => (
              <div
                key={i}
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
            {words.map((word, i) => (
              <div
                key={i}
                className="option"
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
