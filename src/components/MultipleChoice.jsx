export default function MultipleChoice() {
  return (
    <div className="banner">
      <h1>Multiple Choice</h1>
      <h2>1. What is the definition of "word"?</h2>
      <div className="choices">
        {[1, 2, 3, 4].map((choice, i) => {
          return (
            <div key={i}>
              Answer Choice <input type="checkbox" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
