const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const doctorRoutes= require('./routes/doctor')
const app = express()
dotenv.config()


app.use(express.json())
app.use(morgan('dev'))
app.use(
    cors({
        origin:['http://localhost:3000'],
        methods:['GET','POST'],
        credentials:true
    })
)

app.use('/api/doctor', doctorRoutes)

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(process.env.PORT,()=>{
    console.log(`listening on the port ${process.env.PORT}`)
})
