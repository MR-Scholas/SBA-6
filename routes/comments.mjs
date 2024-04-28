import express from "express"
import db from "../db/conn.mjs"
import {ObjectId} from "mongodb"

const router=express.Router()

router
    .route("/")
    .get(async (req,res)=>
    {
        let collection=await db.collection("comments")
        let result=await collection.find().toArray()

        if (!result) res.send("Not found").status(404)
        else res.send(result).status(200)
    })
    .post(async (req,res)=>
    {
        let collection=await db.collection("comments")
        let newDocument=req.body

        let result=await collection.insertOne(newDocument)
        res.send(result).status(204)
    })

router
    .route("/:id")
    .get(async (req,res)=>
    {
        let collection=await db.collection("comments")
        let query={_id: new ObjectId(req.params.id)}
        let result=await collection.findOne(query)
        
        if (!result) res.send("Not found").status(404)
        else res.send(result).status(200)
    })
    .patch(async (req,res)=>
    {
        let collection=await db.collection("comments")
        let query={_id: new ObjectId(req.params.id)}
        
        let result=await collection.updateOne
        (query, {$set:{content:String(req.body.content)}})

        if (!result) res.send("Not found").status(404)
        else res.send(result).status(200)
    })
    .delete(async (req,res)=>
    {
        let collection=await db.collection("comments")
        let query={_id: new ObjectId(req.params.id)}
        let result=await collection.deleteOne(query)

        if(!result) res.send("Not found").status(404)
        else res.send(result).status(200)
    })

    export default router