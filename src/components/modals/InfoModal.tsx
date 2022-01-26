import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jogar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Adivinhe o jogador em 6 tentativas. Após cada tentativa, a cor de cada letra
        irá mudar para mostrar o quão perto você esteve do jogador correto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" status="correct" />
        <Cell value="O" />
        <Cell value="U" />
        <Cell value="Z" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500">
        A Letra S está no lugar correto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="A" />
        <Cell value="U" status="present" />
        <Cell value="R" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500">
        A letra U existe mas está no local errado.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="R" />
        <Cell value="A" />
        <Cell value="D" status="absent" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500">
        A letra D não existe no nome deste jogador.
      </p>
      <br></br>
      <p className="text-sm text-gray-500">
        Obs: Neste jogo podem haver jogadores com nome composto. Exemplo: Rogério Ceni.
      </p>
    </BaseModal>
  )
}
