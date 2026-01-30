import { Router } from "express";
const express = require('express');
import { handleWebhook } from "../controllers/webhookController";


const router = Router();
router.post('/donate', express.raw({ type: 'application/json' }), handleWebhook);

export default router;