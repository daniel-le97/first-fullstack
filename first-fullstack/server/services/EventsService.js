// import { application, query } from "express";
import { query } from "express";
import { dbContext } from "../db/DbContext.js";

class EventsService {
  async getEventById(id) {
    const event = await await dbContext.Events.findById(id).populate(
      "creator",
      "name picture"
    );
    if (!event) {
      
    }
  }
  async createEvent(eventData) {
    const event = await dbContext.Events.create(eventData);
    await event.populate("creator", "name picture");
    return event;
  }
  async getEvents(query) {
    const events = await dbContext.Events.find({
      isCanceled: false,
      ...query,
    }).populate("creator", "name picture");
    return events;
  }
  //
}
export const eventsService = new EventsService();
