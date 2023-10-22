import React from 'react'
import data from '../assets/data.json'

export default function SearchResults() {
    
    function displayResults(){
        let allTerms = data.terms
        return allTerms.map((x) => {
            let difficulty
            if(x.difficulty === 1){
                difficulty = 'Easy'
            }else if(x.difficulty === 2){
                difficulty = 'Intermediate'
            }else{
                difficulty = 'Hard'
            }
            return(
                <div className='searchResults__card'>
                    <h1 className='searchResults__card__title'> {x.term}</h1>
                    <p className='searchResults__card__environment'>{x.environment}</p>
                    <p className='searchResults__card__description'>{x.description}</p>
                    <p className='searchResults__card__difficulty'>Difficulty: {difficulty}</p>
                </div>
            )
        })
    }

  return (
    <div className='searchResults'>
        {displayResults()}
    </div>
  )
}
