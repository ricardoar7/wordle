import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordSize = () => {
  return solution.length;
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch - 1641006000000
  // May 10, 2024          - 1715310000000
  const epochMs = 1715310000000
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)

  console.log(index);

  return {
    solution: WORDS[index].toUpperCase(),
    solutionIndex: index,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
