import { Account } from "./Account.js";

export class Event {
  constructor(data) {
    this.id = data.id
    this.coverImg = data.coverImg;
    this.createdAt = new Date(data.createdAt).toLocaleDateString("en-US", {
      year: "2-digit",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
    })
    this.location = data.location;
    this.type = data.type;
    this.name = data.name;
    this.creator = new Account(data.creator);
    this.startDate = new Date(data.startDate).toLocaleDateString("en-US", {
      year: "2-digit",
      month: "short",
      day: "2-digit",
    });
    this.time = new Date(data.startDate).toLocaleDateString("en-US", {
      hour: "numeric",
    });

    this.description = data.description;
    this.isCanceled = data.isCanceled || false
    this.capacity = data.capacity;
  }
}
