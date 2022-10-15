import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors';
import connectDb  from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'
import quizRoutes from './routes/quizRoutes.js'
import idRoutes from './routes/incemenet.js'


const app = express()
const port = process.env.PORT || 8000
const DATABASE_URL = process.env.DATABASE_URL

// CORS Policy
app.use(cors()) 


// Database Connection
connectDb(DATABASE_URL)

// JSON
app.use(express.json())


// Load Routes
app.use('/api/user' , userRoutes)
app.use('/api/quiz', quizRoutes)
app.use('/api/id', idRoutes)


//  3 : step Heroku

if(process.env.NODE_ENV == "production")
{
    app.use(express.static("quiz-app/dist"));
}



app.listen(port , () =>{
    console.log(`Server Listening at http://localhost:${port}`)
})


