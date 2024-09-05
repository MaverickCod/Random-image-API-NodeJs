# Random Image API

This project provides a simple Express.js server that fetches random nature images from the Unsplash API and serves them through an API.

## Features

- **Welcome Route**: A basic welcome message at the root endpoint (`/`).
- **Random Image Route**: Get a random nature image from Unsplash at `/api/image/random`.

## Technologies Used

- Express.js
- Axios (for making HTTP requests)
- Unsplash API
- dotenv (for environment variables)

## Setup

### Prerequisites

1. Node.js installed
2. Unsplash API key

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/MaverickCod/Random-image-API-NodeJs
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file at the root of the project and add your Unsplash API key:

    ```env
    
    UNSPLASH_API_KEY=your_unsplash_api_key
    ```

4. Start the server:

    ```bash
    node index.js
    
    ```

5. Access the welcome message at:

    ```
    http://localhost:3000/
    
    ```

6. Get a random image at:

    ```
    http://localhost:3000/api/image/random
    
    ```

## License

This project is licensed under the MIT License.
