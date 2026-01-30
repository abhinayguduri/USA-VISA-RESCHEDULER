import mongoose, { Schema, type Document } from "mongoose";

export interface IUser extends Document {
    email: string;
    appointmentDate: string; 
    appointmentId: string;  
    extensionType: string;
    locale: string;
    version: string;
    credits: number;
    donated: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
    
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, 
        trim: true 
    }, 
    appointmentDate: { type: String, default: "" },
    appointmentId:   { type: String, default: "" },
    extensionType:   { type: String, default: "chrome" },
    locale:          { type: String, default: "en" },
    version:         { type: String, default: "1.0.0" },
    credits:         { type: Number, default: 1000 },
    donated:         { type: Boolean, default: false },
}, { 
    timestamps: true 
});

export const User = mongoose.model("User", UserSchema)