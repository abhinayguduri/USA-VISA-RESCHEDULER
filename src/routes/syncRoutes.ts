import { Router } from "express";
import { syncUser } from "../controllers/syncController.ts";


const router = Router();
router.post("/", syncUser)

export default router;