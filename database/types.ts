export interface SearchTransaction {
  status?: "pending" | "settled";
  minimumCents?: number;
  maximumCents?: number;
  merchant?: string;
  cardNumber?: string;
}
