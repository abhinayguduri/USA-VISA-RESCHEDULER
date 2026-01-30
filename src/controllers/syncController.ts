import type { Request, Response, NextFunction } from "express";
import { User } from "../models/User";

export async function syncUser(req: Request, res: Response, next: NextFunction) {
    try {
        const { 
            firstSync, 
            email,
            appointmentDate, 
            appointmentId, 
            extensionType, 
            locale, 
            version,
            credits,
            donated
        } = req.body;

        if (!appointmentId) {
            return res.status(400).json({ message: "appointmentId is required" });
        }

        let user = await User.findOne({ appointmentId });

        if (firstSync && !user) {

            user = await User.create({
                email: email?.toLowerCase(), 
                appointmentId,
                appointmentDate,
                extensionType,
                locale,
                version,
                credits: 1000,
                donated:  false,
            });
        } else if (user) {
            if (email) user.email = email.toLowerCase();
            if (typeof credits === 'number') {
                if (credits < user.credits) {
                    user.credits = credits;
                } else if (credits > user.credits) {
                    user.credits = Math.max(0, user.credits - 100);
                }
            }
            user.appointmentDate = appointmentDate || user.appointmentDate;
            user.extensionType = extensionType || user.extensionType;
            user.locale = locale || user.locale;
            user.version = version || user.version;
            await user.save();
        } else {
            return res.status(404).json({ message: "User not found with this appointmentId." });
        }

        // Return ONLY the requested static/dynamic mix
        return res.status(200).json({
            credits: user.credits,
            donated: user.donated,
            extId: user._id, 
            paymentLink: process.env.PAYMENT_LINK+user.email,
            emailTo: process.env.DEV_EMAIL?.split("@")[0]+"+"+user._id+"@"+process.env.DEV_EMAIL?.split("@")[1],
            host: process.env.HOST,
            syncTime: 5,
            resets: 1
        });

    } catch (error) {
        res.status(500)
        next(error);
    }
}