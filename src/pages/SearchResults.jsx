import React, { useEffect } from "react";
import data from "../assets/data.json";
import { useParams } from "react-router-dom";
import "../pages/SearchResults.css";

export default function SearchResults() {
  const term = window.location.search.slice(6);

  function displayResults(word) {
    let allTerms = data.terms;
    let arr = allTerms.map((x) => {
      let allWords = x.description.split(" ");
      let descriptionWordFound = false;
      allWords.forEach((p) => {
        console.log(p);
        if (p.toLowerCase() === x.term.toLowerCase()) {
          descriptionWordFound = true;
        }
      });
      if (
        x.term.toLowerCase() !== word.toLowerCase() &&
        !descriptionWordFound
      ) {
        return "";
      }
      let difficulty;
      if (x.difficulty === 1) {
        difficulty = "Easy";
      } else if (x.difficulty === 2) {
        difficulty = "Intermediate";
      } else {
        difficulty = "Hard";
      }
      return (
        <div className="searchResults__card">
          <h1 className="searchResults__card__title"> {x.term}</h1>
          <p className="searchResults__card__environment">{x.environment}</p>
          <p className="searchResults__card__description">{x.description}</p>
          <p className="searchResults__card__difficulty">
            Difficulty: {difficulty}
          </p>
        </div>
      );
    });

    return arr;
  }

  return <div className="searchResults">{displayResults(term)}</div>;
}
