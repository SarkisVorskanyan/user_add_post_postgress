import express from 'express'
import userRouter from './routes/user_routes.js'

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`Server started work on ${PORT} port`))
