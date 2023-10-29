import styled from "styled-components";
import { StatusSelect } from "./status-select";

const Row = styled.div`
  display: flex;
  gap: 2rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const SymbolInput = styled.span`
  background-color: lightgrey;
  border: 1px #a4a4a4 solid;
  border-radius: 6px;
  padding-left: 8px;
`;

const Input = styled.input`
  border: 0;
  background-color: lightgrey;
  box-shadow: none;
  outline: none;
`;

export const Filters = () => {
  return (
    <Row>
      <Column>
        <label>MIN AMOUNT</label>
        <SymbolInput>
          $<Input aria-label="MIN AMOUNT" type="number" min={0} />
        </SymbolInput>
      </Column>
      <Column>
        <label>MAX AMOUNT</label>
        <SymbolInput>
          $<Input aria-label="MIN AMOUNT" type="number" min={0} />
        </SymbolInput>
      </Column>
      <Column>
        <label>STATUS</label>
        <StatusSelect
          onSelect={(value) => {
            debugger;
          }}
        />
      </Column>
      <Column>
        <label>CARD</label>
        <Input aria-label="CARD" />
      </Column>
      <Column>
        <label>MERCHANT</label>
        <Input aria-label="MERCHANT" />
      </Column>
    </Row>
  );
};
