import express from "express";
import sales from "../controllers/salesController.js";

const router = express.Router();

router.post('/create', sales.createSale);
router.get('/leaderboard', sales.getLeaderboard);


export default router;