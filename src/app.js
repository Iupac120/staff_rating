const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const errorHandler = require("./middleware/errorHandler");
const authRoutes = require("./routes/authRoutes")
const app = express()
app.use(helmet());
app.use(
    cors({
        origin:"*",
        credentials:true
    })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use("/api/v1/auth",authRoutes)
app.get("/",(req,res)=>{
    res.status(200).json({
        sucess:"true",
        message:"staff performance runnng"
    })
});

const authRoutes = require('./routes/authRoutes');

app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        sucess: 'true',
        uptime: process.uptime()
    });
});

app.use('/api/v1/auth', authRoutes);
app.use(errorHandler);
module.exports = app;