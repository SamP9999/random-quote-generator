import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; // Import the cors package

const app = express();
const port = 3000;

app.use(cors()); // Use the CORS middleware

app.get('/quote', async (req, res) => {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();
    console.log("Quote data:", data); // Log the data to inspect it
    res.json({ quote: data[0].q }); // Send the quote as a JSON response
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).send('Error fetching quote');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


