import express from "express";
const app=express();
import bookRouter from "./routes/book_routes.js"
import  orderRouter from "./routes/order_routes.js"
import custumerRouter from "./routes/custumer_routes.js"
import  mongoose from "mongoose";

import dotenv from "dotenv";
import cors from 'cors'
dotenv.config()
app.use(cors());
app.use(express.json());

app.use("/api/books",bookRouter);
app.use("/api/orders",orderRouter);
app.use("/api/custumers",custumerRouter);

app.get("/",(req,res)=>{
    res.send("<h1>LMa page home </h1>");
});
//établir la connexion avec la BD
// et démarrer le serveur après la connexion
mongoose.connect(process.env.DB_URL)
    .then((result)=>{
        app.listen(process.env.PORT,()=>console.log("server is running"));
    }).catch((err)=>{
        console.log(err);
    });
