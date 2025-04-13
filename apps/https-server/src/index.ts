import  Express, { Request, Response }  from "express";
import {prismaClient} from "@repo/db/client";

const app = Express();

app.get('/', async(req:Request, res:Response)=>{
    await prismaClient.user.create({
        data:{
            name: "Parther"
        }
    })
    const name = await prismaClient.user.findFirst();
    res.json({message:"hello",name});
})

app.listen(5000, ()=>{
    console.log("http server is runing on port 5000");
})