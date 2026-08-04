const express = require("express");
const cors = require("cors");


const dashboardRoutes =
require("./routes/dashboardRoutes");



const app = express();



app.use(cors({
    origin: [
            "http://localhost:5173",
            "https://trader-risk-dashboard-prerna.onrender.com/",
        ],
    }));

app.use(express.json());



// API Routes

app.use(
    "/api",
    dashboardRoutes
);




// Health Check

app.get("/",(req,res)=>{


    res.json({

        success:true,

        message:
        "Trader Risk Dashboard API is running"

    });


});



module.exports = app;