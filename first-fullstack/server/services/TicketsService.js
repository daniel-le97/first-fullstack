import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { eventsService } from "./EventsService.js";

class TicketsService {
  async removeTicket(ticketId, userId) {
    const ticket = await dbContext.Tickets.findById(ticketId);
    if (!ticket) {
      throw new BadRequest("invalid ticket id");
    }
    const event = await eventsService.getEventById(ticket.eventId);
    const loggedInUserIsOwner = userId == event.creatorId.toString();
    const loggedInUserHasTicket = ticket.accountId.toString() == userId;
    if (loggedInUserIsOwner && loggedInUserHasTicket) {
      throw new Forbidden(
        "you cannot remove yourself from an event you created, cancel it instead"
      );
    }
    if (!loggedInUserIsOwner && !loggedInUserHasTicket) {
      throw new Forbidden("you can only remove yourself from an event");
    }
    await ticket.remove();
    // return ticket;
  }
  async getEventTickets(eventId) {
    const tickets = await dbContext.Tickets.find({ eventId }).populate(
      "profile",
      "name picture"
    );
    return tickets;
    //   async getEventComments(eventId) {
    //   const comments = await dbContext.Comments.find({ eventId }).populate(
    //     "creator",
    //     "name picture"
    //   );
    //   return comments;
    // }
  }
  async getMyEventTickets(accountId) {
    const tickets = await dbContext.Tickets.find({ accountId }).populate(
      "event",
      "name coverImg"
    );
    return tickets;
  }
  async addTicketToEvent(eventId, accountId) {
    const event = await eventsService.getEventIfNotCanceled(eventId);
    const hasTicket = await this.getTicketForEvent(eventId, accountId);
    if (hasTicket) {
      return hasTicket;
    }
    if (event.capacity <=0 ) {
      throw new BadRequest('sorry we are out of tickets')
    }
    const ticket = await dbContext.Tickets.create({ eventId, accountId });
    event.capacity--;
    // ticket.capacity--;
    await ticket.populate("profile", "name picture");
    return ticket;
  }
  async getTicketForEvent(eventId, accountId) {
    const ticket = await dbContext.Tickets.findOne({ eventId, accountId })
      .populate("profile", "name picture")
      .populate("event", "");
    return ticket;
  }

  //
}
export const ticketsService = new TicketsService();
