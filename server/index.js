import express from 'express'
import postRouter from './routes/post_routes.js'
import userRouter from './routes/user_routes.js'
import path from 'path'
import cors from 'cors'
// import file from '../client/public'

const app = express()
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use('/api', userRouter)
app.use('/api', postRouter)


app.listen(PORT, () => console.log(`Server started work on ${PORT} port`))
