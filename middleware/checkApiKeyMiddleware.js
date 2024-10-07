export const checkApiKeyMiddleware = (req, res, next) => {
    const apiKey = process.env.VITE_OPENAI_API_KEY;
  
    if (apiKey) {
      next();
    } else {
      res.status(403).json({
        success: false,
        message: 'API key is missing from environment variables.',
      });
    }
  };