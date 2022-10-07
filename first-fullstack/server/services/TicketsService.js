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
    // if (loggedInUserIsOwner && loggedInUserHasTicket) {
    //   throw new Forbidden(
    //     "you cannot remove yourself from an event you created, cancel it instead"
    //   );
    // }
    if (!loggedInUserIsOwner && !loggedInUserHasTicket) {
      throw new Forbidden("you can only remove yourself from an event");
    }
    await ticket.remove();
    await event.capacity++;
    await event.save();
    // await ticket.save();
    return ticket;
  }
  async getEventTickets(eventId) {
    const tickets = await dbContext.Tickets.find({ eventId })
      .populate("profile", "name picture")
      .populate("event");
    return tickets;
  }
  async getMyEventTickets(accountId) {
    const tickets = await dbContext.Tickets.find({ accountId })
      .populate("event")
      .populate("profile", "name picture");

    return tickets;
  }
  async addTicketToEvent(ticketData) {
    const event = await eventsService.getEventIfNotCanceled(ticketData.eventId);
    const hasTicket = await this.getTicketForEvent(
      ticketData.eventId,
      ticketData.accountId
    );
    if (hasTicket) {
      // throw new BadRequest("you already have a ticket");
      return hasTicket;
    }
    if (event.capacity <= 0) {
      throw new BadRequest("sorry we are out of tickets");
    }
    const ticket = await dbContext.Tickets.create(ticketData);
    if (ticket) {
      event.capacity--;
    }
    await event.save();
    // ticket.capacity--;
    await ticket.populate("profile", "name picture");
    return ticket;
  }
  async getTicketForEvent(eventId, accountId) {
    const ticket = await dbContext.Tickets.findOne({ eventId, accountId })
      .populate("profile", "name picture")
      .populate("event");
    return ticket;
  }

  //
}
export const ticketsService = new TicketsService();
