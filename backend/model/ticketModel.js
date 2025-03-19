import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    userId: {
        type: String,
        required: false, // note
      },
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["open", "inprogress", "closed"],
      default: "open",
    },
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
