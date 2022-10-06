import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export const CommentSchema = new Schema(
  {
    body: { type: String, required: true, min: 1, max: 500 },
    eventId: { type: ObjectId, ref: "Event", required: true },
    creatorId: { type: ObjectId, ref: "Account", required: true },
    // isAttending:{type: Boolean, default: false}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

CommentSchema.virtual("creator", {
  localField: "creatorId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});
