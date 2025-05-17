import express from "express";
import { demo1Handler } from "../controllers/demoController.js";
import { bootDataHandler } from "../controllers/bootController.js";

const router = express.Router();

router.get("/demo1", demo1Handler);
router.get("/bootdata", bootDataHandler);

export default router;
