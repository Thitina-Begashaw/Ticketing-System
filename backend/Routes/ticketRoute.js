import express from "express";
import {
  createTicket,
  getTicket,
  updateTicket,
  deleteTicket,
} from "../controllers/ticketController.js";
const router = express.Router();

router.post("/", createTicket);
router.get("/", getTicket);
// router.get('/id' , getPrivateTicket);
router.patch("/:id", updateTicket);
router.delete("/:id", deleteTicket);

export default router;
