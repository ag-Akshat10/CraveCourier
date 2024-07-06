import express,{Request,Response} from "express"
import cors from "cors"
import "dotenv/config";
import * as mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>{
    console.log("Connected to Database")
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req:Request, res:Response) => {
    res.json({message: "test"});
});

app.listen(7000,()=>{
    console.log("server started");
});
