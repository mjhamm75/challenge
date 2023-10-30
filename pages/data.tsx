import { gql, useQuery } from "@apollo/client";

const QUERY = gql(`
query allTransaction(
    $status: TransactionStatus
    $minimum: Int
    $maximum: Int
    $merchant: String
    $cardNumber: String
  ) {
    allTransactions(
      first: 10
      status: $status
      minimum: $minimum
      maximum: $maximum
      merchant: $merchant
      cardNumber: $cardNumber
    ) {
      totalCount
      edges {
        node {
          id        
          amountCents
          cardLast4Digits
          createdAt
          description
          direction
          merchantName
          status
          updatedAt
        }
      }
    }
}
`);

export const useGetTransactions = () => {
  const { data, loading, error } = useQuery(QUERY);

  return {
    transactions: data?.allTransactions.edges.map((t) => t.node) ?? [],
    loading,
    error,
  };
};
