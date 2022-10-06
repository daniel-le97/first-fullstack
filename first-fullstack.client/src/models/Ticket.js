import { Event } from "./Event.js";

export class Ticket {
  constructor(data) {
    this.id = data.id || data._id;
    this.event = new Event(data.event);
  }
}
