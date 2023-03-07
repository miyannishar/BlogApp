import mongoose from "mongoose";
const uri = "mongodb://0.0.0.0:27017/blog-mern-projects";

const connectToMongo = async ()=>{
    const res = await mongoose.connect(uri)
    if(res){
        console.log("Connected successfully to the database")
    }
}

export default connectToMongo