import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.VITE_OPENAI_API_KEY, 
});

export const checkApiKeyPermissions = async (req, res, next) => {
    try {
      const response = await openai.models.list();
      next()
    } catch (error) {
      console.log(error.status)
      if (error) {
        if (error.status == 401) {
            res.status(401).json({
                success: false,
                message: 'Unauthorized: Check if the API key is valid and has the correct permissions.',
            });
        } else {
            res.status(400).json({
                success: false,
                message: `Other API error. ${error.response.data}`,
            });
        }
      } else {
        res.status(500).json({
            success: false,
            message: `Error: ${error.message}`,
        });
      }
    }
}