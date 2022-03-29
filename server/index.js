import express from 'express'
import postRouter from './routes/post_routes.js'
import userRouter from './routes/user_routes.js'

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => console.log(`Server started work on ${PORT} port`))
