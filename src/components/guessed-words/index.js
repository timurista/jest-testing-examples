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
  const { guessedWords: [] } = props;
  return  (
    <div />
  )
}

export default GuessedWords;