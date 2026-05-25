import { Router } from "express";
import { FootballController } from "../controllers/football.controller.js";

const router = Router();

router.get("/live", FootballController.live);
router.get("/matches", FootballController.byDate);
router.get("/match/:id", FootballController.matchDetail);
router.get("/match/:id/stats", FootballController.stats);
router.get("/leagues", FootballController.leagues);
router.get("/news", FootballController.news);
router.get("/transfers", FootballController.transfers);

export default router;