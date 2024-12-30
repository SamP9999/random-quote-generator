import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors()); // Enable Cross-Origin Resource Sharing

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

// Start the server on Render (will listen on a dynamic port provided by Render)
app.listen(process.env.PORT || port, () => {
  console.log(`Server running on port ${process.env.PORT || port}`);
});
