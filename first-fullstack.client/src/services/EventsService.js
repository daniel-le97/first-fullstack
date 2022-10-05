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
    // console.log(res.data)
    AppState.events = res.data.map((e) => new Event(e));
    console.log(AppState.events);
  }
}
export const eventsService = new EventsService();
