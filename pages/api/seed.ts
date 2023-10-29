import type { NextApiRequest, NextApiResponse } from "next";
import { setupDb, Transaction } from "../../database/transactions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ complete: boolean }>
) {
  const database = await setupDb();
  res.status(200).json({ complete: true });
}
