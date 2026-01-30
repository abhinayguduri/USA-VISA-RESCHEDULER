import express from "express"
import languageRoutes from "./routes/languageRoutes";

import syncRoutes from "./routes/syncRoutes";
import webhookRoutes from "./routes/webhookRoutes"
import { errorHandler } from "./middleware/errorHandler"
import cors from 'cors';
const app = express();

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'signature'],
}));
app.use(express.json()); 



app.get("/ping", (req,res)=>{
    res.send(true)
})
app.get("/get-locales", (req,res)=>{
    return res.status(200).json({"en":"English","de":"Deutsch","es":"Español","fa":"فارسی","fr":"Français","it":"Italiano","pa":"ਪੰਜਾਬੀ","pt":"Português","ru":"Русский","uk":"Yкраїнська","tr":"Türkçe","zh":"简体中文"})
})


app.use("/get-language", languageRoutes)
app.use("/sync-data", syncRoutes)
app.use("/webhook", webhookRoutes)


// Error Handling Middleware Must come at the end after all routes
app.use(errorHandler);

export default app;