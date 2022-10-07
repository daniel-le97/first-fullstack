import { Account } from "./Account.js";
import { Event } from "./Event.js";

export class Ticket {
  constructor(data) {
    this.id = data.id || data._id;
    this.event = new Event(data.event)
    // this.event = new Event(data.event)
    this.profile = new Account(data.profile);
    // this.eventName = data.event.name
    // this.eventId = data.eventId
  }
}
