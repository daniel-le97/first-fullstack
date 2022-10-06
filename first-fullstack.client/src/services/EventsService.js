import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { Attendee } from "../models/Attendee.js";
import { Comment } from "../models/Comment.js";
import { Event } from "../models/Event.js";
import { Ticket } from "../models/Ticket.js";
import { api } from "./AxiosService.js";

class EventsService {
  async getAllEvents(type = "") {
    let res;
    if (type) {
      res = await api.get("/api/events", {
        params: {
          type: type,
        },
      });
    } else {
      res = await api.get("/api/events");
    }
    // console.log(res.data);
    AppState.events = res.data.map((e) => new Event(e));
    // console.log(AppState.events);
  }
  async getEventById(eventId) {
    const res = await api.get(`/api/events/${eventId}`);
    AppState.activeEvent = new Event(res.data);
  }
  async getEventTickets(eventId) {
    const res = await api.get(`/api/events/${eventId}/tickets`);
    // console.log(res.data);
    AppState.attendees = res.data.map((e) => new Attendee(e));
    console.log(AppState.attendees);
  }
  async getEventComments(eventId) {
    const res = await api.get(`/api/events/${eventId}/comments`);
    // console.log(res.data);
    AppState.comments = res.data.map((c) => new Comment(c));
    console.log(AppState.comments);
  }
  async searchEvents(editable) {
    AppState.events = AppState.events.filter((event) =>
      event.name.toUpperCase().includes(editable.value.toUpperCase())
    );
  }
  async getMyTickets() {
    const res = await api.get("/account/tickets");
    // console.log(res.data);
    // let tickets = res.data.map((t) => new Ticket(t));
    // console.log(tickets);
    AppState.myTickets = res.data;

    // console.log(AppState.myTickets);
  }
  async createTicket(ticketData){
    console.log(ticketData);
    const res = await api.post('/api/tickets', ticketData)
    console.log(res.data);
  }

  async createComment(commentData) {
    // console.log(commentData);
    const res = await api.post("/api/comments", commentData);
    // console.log(res.data);
    AppState.comments = [...AppState.comments, new Comment(res.data)];
  }
  async createEvent(eventData) {
    // console.log(eventData);
    const res = await api.post("/api/events", eventData);
    // console.log(res.data);
    AppState.events = [new Event(res.data), ...AppState.events];
  }
}
export const eventsService = new EventsService();
