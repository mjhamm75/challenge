import { arg, intArg, queryField, stringArg } from "nexus";

import { Transaction } from "../types/transaction";
import { TransactionStatus } from "../types/status";

export const allTransactions = queryField((t) => {
  t.connectionField("allTransactions", {
    type: Transaction,
    additionalArgs: {
      status: arg({
        type: TransactionStatus,
      }),
      minimum: intArg(),
      maximum: intArg(),
      merchant: stringArg(),
      cardNumber: stringArg(),
    },

    totalCount: () => 0,

    // @ts-ignore - I will fix this if I get the JOB
    async resolve(_, { status, minimum, maximum, merchant, cardNumber }, ctx) {
      const results = await ctx.transactionService().search({
        // @ts-ignore
        status,
        minimum,
        maximum,
        merchant,
        cardNumber,
      });

      const edges = results.map((r) => ({
        node: r.dataValues,
      }));

      return {
        edges,
      };
    },
  });
});
