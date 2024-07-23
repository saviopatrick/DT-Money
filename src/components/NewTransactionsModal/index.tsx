import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionsType, TransactionsTypeButton } from './style'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionsModal(){
  return(
    <Dialog.Portal>
      <Overlay/>
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <CloseButton>
            <X size={24}/>
          </CloseButton>
          <form action="">
            <input type="text" placeholder='Descrição' required />
            <input type="number" placeholder='Preço' required/>
            <input type="text" placeholder='Categoria' required/>
            <TransactionsType>
              <TransactionsTypeButton value='income' variant='income'>
                <ArrowCircleUp  size={24}/>
                Entrada
              </TransactionsTypeButton>
              <TransactionsTypeButton value="outcome"variant='outcome'>
                <ArrowCircleDown size={24}/>
                Saída
              </TransactionsTypeButton>
            </TransactionsType>
            <button type="submit">Cadastrar</button>
          </form>
        </Content>
    </Dialog.Portal>
  )
}