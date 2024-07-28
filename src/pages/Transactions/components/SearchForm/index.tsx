import { MagnifyingGlass } from "phosphor-react"
import { SearchFormContainer } from "./syle"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";

const searchFormShema = z.object({
  query: z.string(),
})

type SearchFormShemaInputs = z.infer<typeof searchFormShema>;

export function SearchForm(){

  const {fetchTransactions} = useContext(TransactionsContext)

  const {register, handleSubmit, formState: {isSubmitting} } = useForm<SearchFormShemaInputs>({
    resolver : zodResolver(searchFormShema),
  });

  async function handleSearchTransactions(data: SearchFormShemaInputs){
    await fetchTransactions(data.query)
    console.log(data)
  }


  return(
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Busque por transações" {...register('query')}/>
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </SearchFormContainer>
  )
}