import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Info" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Este jogo foi criado a partir de um código Open Source -{' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          confira o código aqui
        </a>{' '}
        e{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          jogue o Wordle original aqui
        </a>
      </p>
    </BaseModal>
  )
}
