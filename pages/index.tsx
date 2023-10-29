import type { NextPage } from "next";
import { useEffect, useState } from "react";
import TransactionCard from "../components/TransactionCard";
import { Filters } from "../components/filters";
import { State } from "../components/filters/state";

const Home: NextPage = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [filters, setFilters] = useState<State>();
  const fetchTransactions = async () => {
    const response = await fetch("/api/transactions");
    const data = await response.json();
    setTransactions(data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="m-10">
        <h1 className="text-3xl font-semibold mb-6">Transactions</h1>
        <Filters onChange={(values: State) => setFilters(values)} />
        <div className="flex flex-col gap-8 mt-10">
          {transactions &&
            transactions.map((transaction: any, index: number) => (
              <TransactionCard key={index} transaction={transaction} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
