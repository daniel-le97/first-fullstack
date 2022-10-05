import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import { eventsService } from "../services/EventsService.js";
import BaseController from "../utils/BaseController.js";

export class EventsController extends BaseController {
  constructor() {
    super("/api/events");
    this.router
      .get("", this.getEvents)
      .get("/:eventId", this.getEventById)
      .get("/:eventId/comments", this.getEventComments)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createEvent)
      .put("/:eventId", this.editEvent)
      .delete("/:eventId,", this.cancelEvent);
  }
  async getEvents(req, res, next) {
    try {
      const events = await eventsService.getEvents(req.query);
      res.send(events);
    } catch (error) {
      next(error);
    }
  }
  async createEvent(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id;
      const event = await eventsService.createEvent(req.body);
      res.send(event);
    } catch (error) {
      next(error);
    }
  }
  async getEventById(req, res, next) {
    try {
      const event = await eventsService.getEventById(req.params.eventId);
      res.send(event);
    } catch (error) {
      next(error);
    }
  }
  async editEvent(req, res, next) {
    try {
      const event = await eventsService.editEvent(
        req.body,
        req.params.eventId,
        req.userInfo
      );
      res.send(event);
    } catch (error) {
      next(error);
    }
  }
  async cancelEvent(req, res, next) {
    try {
      const event = await eventsService.cancelEvent(
        req.params.eventId,
        req.userInfo
      );
      res.send(event);
    } catch (error) {
      next(error);
    }
  }
  async getEventComments(req, res, next) {
    try {
      const comments = await commentsService.getEventComments(req.params.id);
      res.send(comments);
    } catch (error) {
      next(error);
    }
  }
}
