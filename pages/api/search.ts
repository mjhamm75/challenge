// This is just used to test API
import type { NextApiRequest, NextApiResponse } from "next";
import { setupDb, search, Transaction } from "../../database/transactions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Transaction[]>
) {
  const database = await setupDb();
  const transactions = await search({});
  res.status(200).json(transactions);
}
