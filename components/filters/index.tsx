import styled from "styled-components";
import { StatusSelect } from "./status-select";
import { DynamicSelect } from "./dyanmic-select";
import { State, useSearchTransactionReducer } from "./state";
import { useEffect } from "react";

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

export const Filters = ({
  onChange,
}: {
  onChange: (values: State) => void;
}) => {
  const [state, dispatch] = useSearchTransactionReducer();

  useEffect(() => {
    // @ts-ignore - type issues
    onChange(state);
  }, [state]);

  return (
    <Row>
      <Column>
        <label>MIN AMOUNT</label>
        <SymbolInput>
          $
          <Input
            aria-label="MIN AMOUNT"
            type="number"
            min={0}
            value={state.minAmount}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (typeof value === "number") {
                dispatch({
                  type: "MINIMUM_UPDATED",
                  payload: value,
                });
              }
            }}
          />
        </SymbolInput>
      </Column>
      <Column>
        <label>MAX AMOUNT</label>
        <SymbolInput>
          $
          <Input
            aria-label="MIN AMOUNT"
            type="number"
            min={0}
            value={state.minAmount}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (typeof value === "number") {
                dispatch({
                  type: "MAXIMUM_UPDATED",
                  payload: value,
                });
              }
            }}
          />
        </SymbolInput>
      </Column>
      <Column>
        <label>STATUS</label>
        <StatusSelect
          onSelect={(value) => {
            dispatch({
              type: "STATUS_UPDATED",
              payload: value,
            });
          }}
        />
      </Column>
      <Column>
        <label>CARD</label>
        <DynamicSelect
          values={[]}
          onChange={(value) => {
            dispatch({
              type: "CARD_NUMBER_UPDATED",
              payload: value,
            });
          }}
        />
      </Column>
      <Column>
        <label>MERCHANT</label>
        <DynamicSelect
          values={[]}
          onChange={(value) => {
            dispatch({
              type: "MERCHANT_UPDATED",
              payload: value,
            });
          }}
        />
      </Column>
    </Row>
  );
};
