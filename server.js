require("dotenv").config()
console.log("1")
const app = require("./src/app.js");
const sequelize = require("./src/config/database")
console.log("2")
const port = process.env.PORT || 5000
const startServer = async (params) => {
    try {
        await sequelize.authenticate()
        console.log('database conected successfully')
        await sequelize.sync({
            alter:false
        })
        console.log("database synchronized");
        app.listen(port,()=>{
            console.log(`server is connected to port:${port}`)
        })
    } catch (error) {
        console.error("startup failed");
        console.error(error);
        process.exit(1)
    }
}

startServer()