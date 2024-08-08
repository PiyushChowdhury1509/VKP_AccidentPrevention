import mongoose from "mongoose";

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        const connection=mongoose.connection;

        connection.on('connected',()=>{
            console.log('mongodb successfully connected');
        })
        connection.on('error',(error)=>{
            console.log('mongodb failed to connect');
        })
    }
    catch(error){
        console.log(`mongodb connection failed : ${error}`);
    }
}

export default connectDB;