import app from "./src/app";
import { connectDB } from "./src/config/database";
import {createServer} from "http";



const PORT  = process.env.PORT || 3000

const httpServer = createServer(app);


connectDB().then(()=>{
    httpServer.listen(process.env.PORT, ()=>{
        console.log("SERVER IS RUNNING ON PORT :", PORT)
    })
}).catch((error)=>{
    console.error("FAILED TO START SERVER", error);
    process.exit(1);
});
