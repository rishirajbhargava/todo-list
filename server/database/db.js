import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



const Connection = ()=>{
    mongoose.set('strictQuery', true);
    const MONGODB_URL = `mongodb://${USERNAME}:${PASSWORD}@ac-kqq7d3v-shard-00-00.imc1jqx.mongodb.net:27017,ac-kqq7d3v-shard-00-01.imc1jqx.mongodb.net:27017,ac-kqq7d3v-shard-00-02.imc1jqx.mongodb.net:27017/?ssl=true&replicaSet=atlas-cxn8dp-shard-0&authSource=admin&retryWrites=true&w=majority`
    mongoose.connect(MONGODB_URL);



    mongoose.connection.on('connected',()=>{
        console.log('MongoDB connected successfully');
    });

    mongoose.connection.on('disconnected' ,()=>{
        console.log('MongoDB Disconnected  !!!!');
    });

    mongoose.connection.on('error' ,()=>{
        console.log('Error while connecting to database', error.message);
    });

}

export default Connection;