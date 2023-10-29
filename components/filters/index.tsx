import styled from "styled-components";
import { StatusSelect } from "./status-select";
import { DynamicSelect } from "./dyanmic-select";
import { State, useSearchTransactionReducer } from "./state";
import { useEffect } from "react";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (min-width: 932px) {
    flex-direction: row;
  }
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
  height: 2rem;
`;

export const Filters = ({
  onChange,
  cardNumbers,
  merchants,
}: {
  onChange: (values: State) => void;
  cardNumbers: string[];
  merchants: string[];
}) => {
  const [state, dispatch] = useSearchTransactionReducer();

  useEffect(() => {
    // @ts-ignore - type issues
    onChange(state);
  }, [state]);

  return (
    <Flex>
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
            value={state.maxAmount}
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
          values={cardNumbers}
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
          values={merchants}
          onChange={(value) => {
            dispatch({
              type: "MERCHANT_UPDATED",
              payload: value,
            });
          }}
        />
      </Column>
    </Flex>
  );
};
