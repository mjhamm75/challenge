// This is just used to test API
import type { NextApiRequest, NextApiResponse } from "next";
import { search, setupDb, Transaction } from "../../database/transactions";
import { TransactionStatus } from "../../components/filters/state";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Transaction[]>
) {
  const database = await setupDb();
  const transactions = await search({
    status:
      req.query.status?.length > 0
        ? (req.query.status as TransactionStatus)
        : null,
    maximum: req.query.maximum?.length > 0 ? Number(req.query.maximum) : null,
    minimum: req.query.minimum?.length > 0 ? Number(req.query.minimum) : null,
    merchant:
      req.query.merchant?.length > 0 ? (req.query.merchant as string) : null,
    cardNumber:
      req.query.cardNumber?.length > 0
        ? (req.query.cardNumber as string)
        : null,
  });
  res.status(200).json(transactions);
}
