import { MongoClient } from "mongodb"

const connectionString=process.env.ATLAS_URI || "mongodb+srv://likney:<password>@mongopractice.rtxaerv.mongodb.net/?retryWrites=true&w=majority&appName=MongoPractice"

const client = new MongoClient(connectionString)

let conn;
try
{
    conn = await client.connect();
} catch(e) { console.error(e) }

let db = conn.db("sba-data")

export default db