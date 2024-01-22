import { Router } from "express";
import {
    generateHaiku,
} from "../controllers/haikuController";

const router = Router();

router.get("/", generateHaiku);

export default router;