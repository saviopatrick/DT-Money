import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLigth, TransactionsContainer, TransactionsTable } from "./style";

export function Transactions(){
  return(
    <div>
      <Header/>
      <Summary/>
      <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLigth variant="income">R$ 12.000,00</PriceHighLigth>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighLigth variant="outcome">- R$ 59,00</PriceHighLigth>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>         
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}