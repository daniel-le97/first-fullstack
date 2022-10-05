import { AppState } from "../AppState.js";
import { Event } from "../models/Event.js";
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
    console.log(res.data);
    AppState.events = res.data.map((e) => new Event(e));
    console.log(AppState.events);
  }
  async getEventById(eventId) {
    const res = await api.get(`/api/events/${eventId}`);
    AppState.activeEvent = new Event(res.data);
  }
  async getEventTickets(eventId) {
    const res = await api.get(`/api/events/${eventId}/tickets`);
    console.log(res.data);
  }
  async getEventComments(eventId) {
    const res = await api.get(`/api/events/${eventId}/comments`);
    console.log(res.data);
  }
  async searchEvents(editable) {
    AppState.events = AppState.events.filter((event) =>
      event.name.toUpperCase().includes(editable.value.toUpperCase())
    );
  }
  async getMyTickets() {
    const res = await api.get("/account/tickets");
    console.log(res.data);
    AppState.myTickets = res.data
  }
}
export const eventsService = new EventsService();
