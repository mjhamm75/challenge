import { arg, nonNull, objectType } from "nexus";
import { TransactionStatus } from "./status";

export const Transaction = objectType({
  name: "Transaction",
  //   sourceType: {
  //     module: fsPathJoin("server", "protos", "aeonai-political-entity.ts"),
  //     export: "City",
  //   },

  definition(t) {
    t.nonNull.id("id");
    t.nonNull.field("status", {
      type: TransactionStatus,
      resolve: (root) => {
        // @ts-ignore - Fix if get the job ... or never
        if (root.status === "settled") return "SETTLED";
        return "PENDING";
      },
    });
    t.nonNull.int("amountCents");
    t.nonNull.string("merchantName");
    t.nonNull.string("description");
    t.nonNull.string("cardLast4Digits");
    t.nonNull.string("createdAt");
    t.nonNull.string("direction");
    t.nonNull.string("updatedAt");
  },
});
