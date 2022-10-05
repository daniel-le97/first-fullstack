import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export const TicketSchema = new Schema(
  {
    eventId: { type: ObjectId, ref: "Event", required: true },
    accountId: { type: ObjectId, ref: "Account", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

TicketSchema.index({ eventId: 1, accountId: 1 }, { unique: true });

TicketSchema.virtual("profile", {
  localField: "accountId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});
TicketSchema.virtual("event", {
  localField: "eventId",
  foreignField: "_id",
  justOne: true,
  ref: "Event",
});

// TODO add this to dbContext
