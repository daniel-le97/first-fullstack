import BaseController from "../utils/BaseController.js";
import { EventsController } from "./EventsController.js";

export class EventsDetailsController extends EventsController {
  constructor() {
    super();
    this.router.get("");
  }
}
