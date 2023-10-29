enum TransactionSearchStatus {
  PENDING = "PENDING",
  COMPLETE = "COMPLETE",
}

export interface TransactionSearchRequest {
  status: TransactionSearchStatus;
  minimum: number;
  maximum: number;
  merchant: string;
  cardNumber: string;
}
