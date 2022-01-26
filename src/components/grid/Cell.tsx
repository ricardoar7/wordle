import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'

type Props = {
  value?: string
  status?: CharStatus
}

export const Cell = ({ value, status }: Props) => {
  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded',
    {
      'bg-white border-slate-200': !status,
      'border-black': value && !status,
      'bg-slate-100 text-slate-400 border-slate-100': status === 'absent',
      'bg-white text-red-600 border-t-red-600 border-b-black border-t-8 border-b-8 border-x-0 border-y-0': status === 'correct',
      'bg-gray-500 text-white border-gray-500': status === 'present',
      'cell-animation': !!value,
    }
  )

  return <div className={classes}>{value}</div>
}
