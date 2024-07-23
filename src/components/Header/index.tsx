import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/logo.svg'
import { NewTransactionsModal } from "../NewTransactionsModal";

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>       
          <NewTransactionsModal/>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}