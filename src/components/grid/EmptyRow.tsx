import { Cell } from './Cell'

type Props = {
  wordSize: number
}

export const EmptyRow = ({wordSize}: Props) => {
  const emptyCells = Array.from(Array(wordSize))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
