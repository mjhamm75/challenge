export interface SearchTransaction {
  status?: "pending" | "settled";
  minimum?: number;
  maximum?: number;
  merchant?: string;
  cardNumber?: string;
}
