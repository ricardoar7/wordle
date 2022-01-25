import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  guesses: string[]
  currentGuess: string
  wordSize: number
}

export const Grid = ({ guesses, currentGuess, wordSize }: Props) => {
  const empties =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : []

  return (
    <div className="pb-6">
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} />
      ))}
      {guesses.length < 6 && <CurrentRow guess={currentGuess} wordSize={wordSize} />}
      {empties.map((_, i) => (
        <EmptyRow key={i} wordSize={wordSize} />
      ))}
    </div>
  )
}
