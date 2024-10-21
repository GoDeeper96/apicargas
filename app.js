import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cron from 'node-cron'
import { addMasters } from './jobs.js'
const app = express();
// addMasters()
// addMasters()
cron.schedule('0 5 * * *',()=>{
    console.log('ejemplo')
    addMasters()
    
})
app.use(cors());
app.options('*', cors())
// EliminarDatos()
app.set('serverTimeout',6000000)
app.use(bodyParser.urlencoded({extended: true,limit:'200000mb'}));
app.use(bodyParser.json({limit:'200000mb'}));

export default app