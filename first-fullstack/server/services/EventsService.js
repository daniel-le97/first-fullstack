// import { application, query } from "express";
import { query } from "express";
import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class EventsService {
  async editEvent(body, eventId, userInfo) {
    const event = await this.getEventIfNotCanceled(eventId);
    if (userInfo.id != event.creatorId.toString()) {
      throw new BadRequest("invalid event id for edits");
    }
    if (!event) {
      throw new BadRequest('cannot edit an events status please cancel it instead')
    }
    event.name = body.name || event.name;
    event.description = body.description || event.description;

    await event.save();
    return event;
  }
  async cancelEvent(eventId, userInfo) {
    const event = await this.getEventIfNotCanceled(eventId);
    let eventCreatorId = event.creatorId.toString();
    if (eventCreatorId != userInfo.id) {
      throw new Forbidden("swiper no swiping, that event is not yours!");
    }
    event.isCanceled = true;
    await event.save();

    const activeEvent = await this.getEventById(eventId);
    return activeEvent;
  }

  async getEventById(id) {
    const event = await await dbContext.Events.findById(id).populate(
      "creator",
      "name picture"
    );
    if (!event) {
      throw new BadRequest("invalid or bad event id");
    }
    return event;
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

  async getEventIfNotCanceled(eventId) {
    const event = await this.getEventById(eventId);
    if (event.isCanceled) {
      throw new BadRequest("The Event is Canceled, sorry");
    }
    return event;
  }
  //
}
export const eventsService = new EventsService();
