import express from "express";
import { bootDataHandler } from "../controllers/bootController.js";

const router = express.Router();

router.get("/bootdata", bootDataHandler);

export default router;
