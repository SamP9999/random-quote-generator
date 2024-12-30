import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 3000;

app.use(cors()); // Enable Cross-Origin Resource Sharing

use(express.static(path.join(path.resolve(), 'public')));

// Endpoint to serve the random quote
app.get('/quote', async (req, res) => {
  try {
    // Fetch data from ZenQuotes API
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();

    console.log("Quote data:", data); // Log the data to inspect it

    // Send the quote as a JSON response
    res.json({ quote: data[0].q });
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).send('Error fetching quote');
  }
});

// Serve the frontend HTML file at the root of your app
app.get('/', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'public', 'index.html'));
});

// Start the server on Render (will listen on a dynamic port provided by Render)
app.listen(process.env.PORT || port, () => {
  console.log(`Server running on port ${process.env.PORT || port}`);
});
