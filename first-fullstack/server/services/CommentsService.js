import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { eventsService } from "./EventsService.js";

class CommentsService {
  async getCommentById(id) {
    const comment = await dbContext.Comments.findById(id).populate(
      "creator",
      "name picture"
    );
    if (!comment) {
      throw new BadRequest("bad comment id");
    }
    return comment;
  }
  async deleteComment(commentId, userId) {
    const comment = await this.getCommentById(commentId);
    if (userId != comment.creatorId.toString()) {
      throw new Forbidden("not your comment");
    }
    comment.remove();
    return comment;
  }

  async getEventComments(eventId) {
    const comments = await dbContext.Comments.find({ eventId }).populate(
      "creator",
      "name picture"
    );
    return comments;
  }

  async addCommentToEvent(commentData) {
    await eventsService.getEventIfNotCanceled(commentData.eventId);
    const comment = await dbContext.Comments.create(commentData);
    await comment.populate("creator", "name picture");
    return comment;
  }
  //
}
export const commentsService = new CommentsService();
