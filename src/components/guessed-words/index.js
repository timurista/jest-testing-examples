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
  }
  return  (
    <div data-test-id="component-guessed-words">
    {contents}
    </div>
  )
}

export default GuessedWords;