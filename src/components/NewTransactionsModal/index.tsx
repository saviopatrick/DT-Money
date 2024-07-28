import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionsType,
  TransactionsTypeButton,
} from "./style";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});
type NewTransactionInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionsModal() {

  const {createTransaction} = useContext(TransactionsContext)

  const { control, register, handleSubmit, reset } = useForm<NewTransactionInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  async function handleCreateNewTransaction(data: NewTransactionInputs) {

    const {description, price, category, type} = data

    await createTransaction({
      description,
      price,
      category,
      type,
    })

    
    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content aria-describedby="dialog-description">
        <Dialog.Title>Nova Transação</Dialog.Title>
        <p id="dialog-description">
          Preencha os campos abaixo para adicionar uma nova transação.
        </p>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionsType
                  onValueChange={field.onChange}
                  value={field.value}>
                  <TransactionsTypeButton value="income" variant="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionsTypeButton>
                  <TransactionsTypeButton value="outcome" variant="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionsTypeButton>
                </TransactionsType>
              );
            }}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
