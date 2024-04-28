import express from "express"
import dotenv from "dotenv"
dotenv.config() 

const PORT=process.env.PORT||3001
const app=express()

import sandwiches from "./routes/sandwiches.mjs"
import desserts from "./routes/desserts.mjs"
import comments from "./routes/comments.mjs"

app.use(express.json())

app.get("/", (req,res)=>
{
    res.send("Welcome to the API.")
})

app.use("/sandwiches",sandwiches)
app.use("/desserts",desserts)
app.use("/comments",comments)

//Error-handling
app.use((err,_req,res,next)=>
{
    res.status(500).send("Aw CRUD, looks like there was an error...")
})

//Server Starter
app.listen(PORT,()=>
{
    console.log(`Server is running on port: ${PORT}`)
})