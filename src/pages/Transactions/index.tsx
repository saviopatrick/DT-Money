import { useContext} from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLigth,
  TransactionsContainer,
  TransactionsTable,
} from "./style";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormater, priceFormater } from "../../utils/formatter";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLigth variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormater.format(transaction.price)}
                    </PriceHighLigth>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormater.format(new Date(transaction.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
