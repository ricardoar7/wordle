import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'

export const shareStatus = (guesses: string[]) => {

  /*if (navigator.share) {
    console.log("Congrats! Your browser supports Web Share API");
    navigator
      .share({
        text: `SPFC Wordle ${solutionIndex-23} ${guesses.length}/6\n\n` +
        generateEmojiGrid(guesses)
      })
      .then(() => {
        console.log("Sharing successfull");
      })
      .catch(() => {
        console.log("Sharing failed");
      });
  } else {
    navigator.clipboard.writeText(
      `SPFC Wordle ${solutionIndex-23} ${guesses.length}/6\n\n` +
      generateEmojiGrid(guesses)
    )
  }*/

  const text = `SPFC Wordle ${solutionIndex+1} ${guesses.length}/6%0a%0a` +
  generateEmojiGrid(guesses) + `%0a%0aricardoar.com/spfc`;

  window.open('https://twitter.com/intent/tweet?text=' + text, '_blank');

}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟥'
            case 'present':
              return '⬛'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('%0a')
}