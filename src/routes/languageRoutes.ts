import { Router } from "express";
import { getLanguage } from "../controllers/languageController";
const router = Router();

router.get("/:languageCode", getLanguage)

export default router;