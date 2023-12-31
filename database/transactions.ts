import { baseData } from "./seed";
import { DataTypes, Sequelize, Op } from "sequelize";
import { SearchTransaction } from "./types";

let TransactionTable;
const filepath = ".data/transactions.db";

export const dbConnection = new Sequelize("database", "", "", {
  dialect: "sqlite",
  storage: filepath,
  logging: true,
});

export const setupDb = async (): Promise<void> => {
  dbConnection.authenticate().then(async (err) => {
    console.log(`SQLite3 Connection has been established successfully.`);
  });

  TransactionTable = dbConnection.define("Transaction", {
    status: DataTypes.STRING,
    amountCents: DataTypes.NUMBER,
    merchantName: DataTypes.STRING,
    description: DataTypes.STRING,
    cardLast4Digits: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    direction: DataTypes.STRING,
  });

  await TransactionTable.sync();
  if (!(await TransactionTable.findOne())) {
    await setup();
  }
};

async function setup() {
  await TransactionTable.destroy({ where: {} });
  for (const transaction of baseData) {
    await TransactionTable.create(transaction);
  }
}

export type Transaction = {
  status: string;
  amountCents: number;
  merchantName: string;
  description: string;
  cardLast4Digits: string;
  createdAt: string;
  direction: string;
};

export const insertTransaction = async (transaction: Transaction) => {
  await TransactionTable.create(transaction);
};

export const selectTransactions = async () => {
  return await TransactionTable.findAll();
};

export const search = async ({
  status,
  minimumCents,
  maximumCents,
  merchant,
  cardNumber,
}: SearchTransaction) => {
  console.log("HERE", minimumCents, maximumCents);
  return await TransactionTable.findAll({
    where: {
      ...(status && {
        status: {
          [Op.eq]: status,
        },
      }),
      ...(cardNumber && { cardLast4Digits: { [Op.like]: cardNumber } }),
      ...(merchant && { merchantName: { [Op.like]: merchant } }),
      ...(minimumCents && {
        amountCents: {
          [Op.gt]: minimumCents,
        },
      }),
      ...(maximumCents && {
        amountCents: {
          [Op.lt]: maximumCents,
        },
      }),
    },
  });
};
