// connectivity code server---> db

import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config();


const db = mysql.createPool({ // help to maintain multiple connection and defining connectivity string
    host: process.env.SQL_HOST,
    database: process.env.SQL_DB,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    port: process.env.SQL_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export const connectDB = async () => {
    try{
        const connection= await db.getConnection();// connecting express and mysql
        console.log("db connected successfully");
        connection.release();

    }catch (err){
        console.error("connection is not established",err);
        process.exit(1); // to stop the server if db connection is not established
    }
}
export default db;