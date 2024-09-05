const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to the Random Image API! Use /api/image/random to get a random nature image.");
});

app.get("/api/image/random", async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.unsplash.com/search/photos?page=1&query=nature&client_id=${process.env.UNSPLASH_API_KEY}`
        );

        const randomImage = response.data.results[
            Math.floor(Math.random() * response.data.results.length)
        ];
        const imageUrl = {
            id: randomImage.id,
            url: randomImage.urls.regular,
        };
        res.json(imageUrl);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({
            error: "An error occurred while fetching images",
        });
    }
});

app.listen(port, () => {
    console.log("Server started at " + port);
});
