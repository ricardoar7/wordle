import { Cell } from './Cell'

type Props = {
  guess: string
  wordSize: number
}

export const CurrentRow = ({ guess, wordSize }: Props) => {
  const splitGuess = guess.split('')
  const emptyCells = Array.from(Array(wordSize - splitGuess.length))

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
