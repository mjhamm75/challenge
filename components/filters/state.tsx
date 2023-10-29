import { useReducer } from "react";

export type TransactionStatus = "pending" | "settled";

export interface State {
  status?: TransactionStatus;
  merchant?: string;
  cardNumber?: string;
  minAmount?: number;
  maxAmount?: number;
}

interface StatusUpdated {
  type: "STATUS_UPDATED";
  payload: TransactionStatus;
}

interface MerchantUpdated {
  type: "MERCHANT_UPDATED";
  payload: string;
}

interface CardNumverUpdated {
  type: "CARD_NUMBER_UPDATED";
  payload: string;
}

interface MinimumUpdated {
  type: "MINIMUM_UPDATED";
  payload: number;
}

interface MaximumUpdated {
  type: "MAXIMUM_UPDATED";
  payload: number;
}

function reducer(
  state: State,
  action:
    | StatusUpdated
    | MerchantUpdated
    | CardNumverUpdated
    | MinimumUpdated
    | MaximumUpdated
): State {
  switch (action.type) {
    case "STATUS_UPDATED": {
      return { ...state, status: action.payload };
    }

    case "MERCHANT_UPDATED": {
      return { ...state, merchant: action.payload };
    }

    case "CARD_NUMBER_UPDATED": {
      return { ...state, cardNumber: action.payload };
    }

    case "MINIMUM_UPDATED": {
      return { ...state, minAmount: action.payload };
    }

    case "MAXIMUM_UPDATED": {
      return { ...state, maxAmount: action.payload };
    }

    default:
      return state;
  }
}

export function useSearchTransactionReducer() {
  return useReducer(reducer, {});
}
