import { Account } from "./Account.js";

export class Comment {
  constructor(data) {
    this.id = data.id;
    this.body = data.body;
    this.createdAt = new Date(data.createdAt).toLocaleDateString("en-US", {
      year: "2-digit",
      month: "short",
      day: "2-digit",
      hour: "numeric",
    });
    this.creator = new Account(data.creator)
  }
}
