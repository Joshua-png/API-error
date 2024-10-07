import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.VITE_OPENAI_API_KEY, 
});

export async function getOpenAIResponse(req, res) {
    try {
        const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello!" }],
        });
        res.status(200).json({
            success: true,
            messageContent: response.choices[0].message.content
        })
        
    } catch (error) {
        res.status(429).json({
            success: false,
            message: `Error fetching completion:. ${error.response ? error.response.data : error.message}`,
        });
    }
}