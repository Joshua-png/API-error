# API ERROR

This project defines a solution to encountering an issue while trying to interact with the OpenAI API. The API call returns a 401 (Unauthorized) error.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
  ```bash
  git clone https://github.com/username/repo-name.git
  ```
2. Navigate to the project directory:
  ```bash
  cd repo-name
  ```
3. Install the required dependencies:
  ```bash
  npm install
  ```
4. Create a .env file in the root directory and add your environment variables:
  ```bash
  VITE_OPENAI_API_KEY=your_api_key_here
  PORT=3000
  ```
5. Usage
To start the application, run the following command:
```bash
npm start
```

For development mode, you can use:
```bash
npm run dev
```

The application will be running at http://localhost:3000.

API Endpoints
GET /api/v1/chat/completions

Description: Retrieve chat completions from the OpenAI API.
Authentication: Requires a valid API key.

Middleware  
checkApiKeyMiddleware: Validates the API key in the request headers.  
checkApiKeyPermissions: Checks the permissions of the API key.  

# Postman Link
[Postman Documentation](https://documenter.getpostman.com/view/34979432/2sAXxP9XqW)


