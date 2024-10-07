import express from "express"
import dotenv from "dotenv";
import {getOpenAIResponse} from './controllers/AIResponseController.js'
import {checkApiKeyMiddleware} from './middleware/checkApiKeyMiddleware.js'
import {checkApiKeyPermissions} from './middleware/checkApiKeyPermissions.js'


dotenv.config();

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.status(200).send({message: "Hello"})
})

app.get('/chat/completions',checkApiKeyMiddleware, checkApiKeyPermissions, getOpenAIResponse )

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})