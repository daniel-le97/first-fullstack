import { api } from "./AxiosService.js";

class EventsService {
  async getAllEvents(type = ' '){
    let res
    if (type) {
      res = await api.get('/api/events',{
        params:{
          type: type
        }
      })
    } else {
      res = await api.get('/api/events')
    }
    console.log(res.data);
  }
}
export const eventsService = new EventsService();
