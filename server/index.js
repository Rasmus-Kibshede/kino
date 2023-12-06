import express from 'express';
const app = express();

import cors from 'cors';
app.use(cors());

// const movies = [
//     {
//         id: 1,
//         title: "The Godfather",
//         director: "Francis Ford Coppola",
//         genre: "Crime"
//     },
//     {
//         id: 2,
//         title: "Star Wars",
//         director: "George Lucas",
//         genre: "Science Fiction"
//     },
//     {
//         id: 3,
//         title: "The Lord of the Rings",
//         director: "Peter Jackson",
//         genre: "Fantasy"
//     }
// ];

const cards = [
  {
    suit: 'Heart',
    rank: 'Ace',
    person: 'You',
    action: 'Guess',
    object: 'Card',
  },
  {
    suit: 'Spades',
    rank: 'King',
    person: 'Hitler',
    action: 'He jumps',
    object: 'Ball',
  },
];

app.get('/cards', (req, res) => {
  res.send(cards[Math.floor(Math.random() * cards.length)]);
});

const PORT = 8080;
app.listen(PORT, () => console.log('The server is running on port', PORT));
