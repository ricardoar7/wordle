import { Dialog } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import { MiniGrid } from '../mini-grid/MiniGrid'
import { shareStatus } from '../../lib/share'
import { BaseModal } from './BaseModal'
import { REFERENCES } from '../../constants/references'

type Props = {
  isOpen: boolean
  handleClose: () => void
  index: number
  guesses: string[]
  handleShare: () => void
}

export const WinModal = ({
  isOpen,
  handleClose,
  index,
  guesses,
  handleShare,
}: Props) => {
  return (
    <BaseModal title="A Moeda caiu em pé!" isOpen={isOpen} handleClose={handleClose}>
      <div>
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-600">
          <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <Dialog.Title
            as="h3"
            className="text-lg leading-6 font-medium text-gray-900"
          >
          </Dialog.Title>
          <div className="mt-2">
            <MiniGrid guesses={guesses} />
            <p className="mt-3"><img src={REFERENCES[index][1]} className="border-2 border-red-600" alt={REFERENCES[index][0]}></img></p>
            <br></br>
            <p className="text-sm text-gray-500">Era o {REFERENCES[index][0]}! <a href={REFERENCES[index][2]} className="underline" target="_blank" rel="noreferrer">Clique para conhecer</a></p>

          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm"
          onClick={() => {
            shareStatus(guesses)
            handleShare()
          }}
        >
          Compartilhar
        </button>
      </div>
    </BaseModal>
  )
}
