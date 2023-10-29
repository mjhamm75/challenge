import type { NextPage } from "next";
import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import TransactionCard from "../components/TransactionCard";
import { Filters } from "../components/filters";
import { State } from "../components/filters/state";
import { useGetTransactions } from "./data";

const H1 = styled.h1`
  font-size: 1.5rem;
`;

const FilterWrapper = styled.div`
  margin: 1rem 0;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const Home: NextPage = () => {
  const { transactions, loading, error } = useGetTransactions();
  // const [transactions, setTransactions] = useState<any[]>([]);
  const [filters, setFilters] = useState<State>({});
  // const searchTransactions = async (searchFilters: State) => {
  //   const response = await fetch(
  //     `/api/search?status=${searchFilters.status ?? ""}&minAmount=${
  //       searchFilters.minAmount ?? ""
  //     }&maxAmount=${searchFilters.maxAmount ?? ""}&merchant=${
  //       searchFilters.merchant ?? ""
  //     }&cardNumber=${searchFilters.cardNumber ?? ""}`
  //   );
  //   const data = await response.json();
  //   setTransactions(data);
  // };

  // useEffect(() => {
  //   searchTransactions(filters);
  // }, [filters]);

  const cardNumbers = useMemo(() => {
    const result = transactions.map((t) => t.cardLast4Digits);
    const deduped = new Set(result);
    return [...deduped];
  }, [transactions]);

  const merchants = useMemo(() => {
    const result = transactions.map((t) => t.merchantName);
    const deduped = new Set(result);
    return [...deduped];
  }, [transactions]);

  return (
    <div>
      <H1>Transactions</H1>
      <FilterWrapper>
        <Filters
          onChange={(values: State) => setFilters(values)}
          cardNumbers={cardNumbers}
          merchants={merchants}
        />
      </FilterWrapper>
      <List>
        {transactions &&
          transactions.map((transaction: any, index: number) => (
            <TransactionCard key={index} transaction={transaction} />
          ))}
      </List>
    </div>
  );
};

export default Home;
