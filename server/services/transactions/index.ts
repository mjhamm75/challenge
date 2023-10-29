import { search } from "../../../database/transactions";
import { TransactionSearchRequest } from "./types";

export class TransactionService {
  search(args: TransactionSearchRequest) {
    return search({
      // @ts-ignore - TODO - Fix before check in
      status: args.status && args.status.toLowerCase(),
      minimum: args.minimum,
      maximum: args.maximum,
      merchant: args.merchant,
      cardNumber: args.cardNumber,
    });
  }
}
