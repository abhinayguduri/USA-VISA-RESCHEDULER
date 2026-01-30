import type { Request, Response, NextFunction } from "express";
import { User } from "../models/User"; 
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function handleWebhook (req: Request, res: Response) {
  const sig = req.headers['stripe-signature'] as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    console.log('[Stripe Webhook] Event received:', event.type);
  } catch (err: any) {
    console.error('[Stripe Webhook] Signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      // 1. Listen for charge.succeeded instead
      case 'charge.succeeded':
        const charge = event.data.object as Stripe.Charge;
        await handleChargeSucceeded(charge);
        break;

      default:
        console.log(`[Stripe Webhook] Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('[Stripe Webhook] Error handling event:', error);
    res.status(500).json({ error: 'Webhook handler failed' });
  }
};

async function handleChargeSucceeded(charge: Stripe.Charge): Promise<void> {
  const email = charge.billing_details.email || charge.receipt_email;
  if (!email) {
    console.error('[Stripe Webhook] No email found in charge object');
    return;
  }

  try {
   
    const user = await User.findOneAndUpdate(
                        { email: email },
                        { $inc: { credits: 1000 } }, 
                        { new: true }
         );

    if (!user) {
      console.error('[Stripe Webhook] User not found with email:', email);
      return;
    }

    console.log(`[Stripe Webhook] ✅ Set credits to 1000 for user: ${email}`);
  } catch (error) {
    console.error('[Stripe Webhook] Error updating user by email:', error);
    throw error;
  }
}