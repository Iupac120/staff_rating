require("dotenv").config()

const app = require("./src/app");
const sequelize = require("./src/config/database")

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