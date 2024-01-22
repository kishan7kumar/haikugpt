import { Router } from "express";
import {
    generateHaiku,
    generateReview,
} from "../controllers/haikuController";

const router = Router();

router.get("/", generateHaiku);
router.post("/", generateReview);

export default router;