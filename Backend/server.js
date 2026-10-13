const appointmentRoutes = require("./routes/appointmentRoutes");

const express = require("express")
const mongoose  = require("mongoose")
const cors = require("cors")
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Dental clinic backend is running")
});

app.use("/api/appointments", appointmentRoutes);

mongoose
.connect(process.env.MONGO_URL)
.then(() =>{
    console.log("mongodb connected");
    
    app.listen(5000, ()=>{
    console.log("server running on port 5000");
    
})
    
})
.catch((error)=>{
console.log("mongodb connection error:" , error);

})

