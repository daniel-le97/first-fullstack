import { Account } from "./Account.js";

export class Attendee {
  constructor(data) {
    this.id = data.profile.id;
    this.name = data.profile.name;
    // this.picture = data.profile.picture;
    this.profile = new Account(data.profile);
    this.eventId = data.eventId;
    this.accountId = data.accountId;
    // this.profile = new Account(data.profile);
    //   this.createdAt = new Date(data.createdAt).toLocaleDateString("en-US", {
    //     year: "2-digit",
    //     month: "short",
    //     day: "2-digit",
    //     hour: "numeric",
    //   });
  }
}
