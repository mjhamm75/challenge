import { IncomingMessage, ServerResponse } from "http";

import { TransactionService } from "../services/transactions";

export class HttpContext {
  _req: IncomingMessage;
  _res: ServerResponse;

  _transactionService?: TransactionService;

  static async init(req: IncomingMessage, res: ServerResponse) {
    return new HttpContext(req, res);
  }

  private constructor(req: IncomingMessage, res: ServerResponse) {
    this._req = req;
    this._res = res;
  }

  transactionService() {
    if (!this._transactionService) {
      this._transactionService = new TransactionService();
    }

    return this._transactionService;
  }
}
