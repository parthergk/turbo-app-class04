import { prismaClient } from "@repo/db/client";
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});

wss.on("connection", async (ws)=>{
    await prismaClient.user.create({
        data:{
            name : "Parther"
        }
    })
    ws.send("connection is created successfully");
})