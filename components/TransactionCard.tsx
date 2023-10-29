import styled from "styled-components";
import { formatRelative, addDays } from "date-fns";
import { Card } from "./icons/card";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  background-color: #ffecda;
  padding: 2rem;
`;

const H1 = styled.h1`
  font-size: 1.5rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Pending = styled.div`
  background-color: #fff8ab;
  border-radius: 8px;
  padding: 6px;
  border: 1px solid lightgrey;
`;

const RelativeDate = styled.h4``;

const CardContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 6rem;
  font-size: 1.5rem;
  font-weight: bold;
  align-items: center;
  gap: 1rem;
`;

const Amount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  flex-basis: 8rem;
  display: flex;
  align-items: center;
`;

const TransactionCard = ({ transaction }) => {
  return (
    <Container>
      <Column>
        <H1>{transaction.description}</H1>
        <RelativeDate>
          {formatRelative(new Date(transaction.createdAt), new Date())}
        </RelativeDate>
      </Column>
      {transaction.status === "pending" && (
        <div>
          <Pending>pending</Pending>
        </div>
      )}
      <CardContainer>
        <Card />
        {`x${transaction.cardLast4Digits}`}
      </CardContainer>
      <Amount>
        {(transaction.amountCents / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </Amount>
    </Container>
  );
};

export default TransactionCard;
