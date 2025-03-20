import express from "express";
import authMiddleware from "../middleware/Authmiddleware.js";

import {
  createTicket,
  getTicket,
  updateTicket,
  deleteTicket,
  getPrivateTicket,
} from "../controllers/ticketController.js";
const router = express.Router();

router.post("/", authMiddleware, createTicket);
router.get("/", authMiddleware, getTicket);
router.get("/:id", authMiddleware, getPrivateTicket);
router.patch("/:id", authMiddleware, updateTicket);
router.delete("/:id", authMiddleware, deleteTicket);

export default router;
