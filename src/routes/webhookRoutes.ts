import { Router } from "express";
import { handleWebhook } from "../controllers/webhookController";


const router = Router();
router.post('/donate', handleWebhook);

export default router;