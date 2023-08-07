import express from 'express'
import db from './models/index'
import cors from 'cors'
import ApiRouter from './controllers/api.routes'

const app = express();

app.use(express.json())
app.use(cors())

app.use('/api',ApiRouter)

db.sequelize.sync().then(()=>{
    app.listen(process.env.port,()=>{
        console.log(`server runnig on ${process.env.port}`)
    })
})

