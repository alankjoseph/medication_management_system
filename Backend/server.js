const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const superAdminRoutes = require('./routes/superAdmin')
const adminRoutes = require('./routes/admin')
const doctorRoutes = require('./routes/doctor')
const nurseRoutes = require('./routes/nurse')
const app = express()
dotenv.config()


app.use(express.json())
app.use(morgan('dev'))
app.use(
    cors({
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST','PATCH','DELETE'],
        credentials: true
    })
)

app.use('/api/superAdmin', superAdminRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/doctor', doctorRoutes)
app.use('/api/nurse',nurseRoutes)

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(process.env.PORT, () => {
    console.log(`listening on the port ${process.env.PORT}`)
})
