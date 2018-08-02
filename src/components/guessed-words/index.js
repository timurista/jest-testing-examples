// @flow
import React from 'react'

export type GuessedWord = {
  guessedWord: string,
  letterMatchCount: number,
}

export type Props = {
  guessedWords: GuessedWord[]
};

const GuessedWords = (props: Props ) => {
  const { guessedWords = [] } = props;
  let contents;
  if (!guessedWords.length) {
    contents = (
      <span data-test-id="guess-instructions">
        Try to guess the secret word!
      </span>
    )
  } else {
    const guessedWordsRows = guessedWords.map( ({ guessedWord, letterMatchCount}, idx) => (
      <tr data-test-id="guessed-word" key={`${guessedWord}-${idx}`}>
        <td data-test-id="guess-number">{idx+1}</td>
        <td>{guessedWord}</td>
        <td>{letterMatchCount}</td>
      </tr>
    ))
    contents = (
      <div data-test-id="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr><th>#</th><th>Guess</th><th>Matching Letters</th></tr>
          </thead>
          <tbody>
            { guessedWordsRows }
          </tbody>
        </table>
        <h2>Total Guesses: {' '} 
          <span data-test-id="total-guessed">{guessedWords.length}</span>
        </h2>
      </div>
    );
  }
  return  (
    <div data-test-id="component-guessed-words">
    {contents}
    </div>
  )
}

export default GuessedWords;