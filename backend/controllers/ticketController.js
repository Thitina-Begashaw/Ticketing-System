import Ticket from "../model/ticketModel.js";
import mongoose from "mongoose";
const createTicket = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "Title and Description is required" });
    }

    const ticket = await Ticket.create({ title, description });
    await ticket.save();
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.find().sort({ createdAt: -1 });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Failed to get" });
  }
};

const updateTicket = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No Ticker with that id" });
  }
  try {
    const ticket = await Ticket.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (!ticket) {
      return res.status(404).json({ message: "No To Do List with that id" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

const deleteTicket = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No Ticker with that id" });
  }
  try {
    const ticket = await Ticket.findByIdAndDelete(id);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { createTicket, getTicket, updateTicket, deleteTicket };
