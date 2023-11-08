import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

const movies = [
    {
        id: 1,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        genre: "Crime"
    },
    {
        id: 2,
        title: "Star Wars",
        director: "George Lucas",
        genre: "Science Fiction"
    },
    {
        id: 3,
        title: "The Lord of the Rings",
        director: "Peter Jackson",
        genre: "Fantasy"
    }
];


app.get("/movies", (req, res) => {
    res.send(movies);
});

const PORT = 8080;
app.listen(PORT, () => console.log("The server is running on port", PORT));