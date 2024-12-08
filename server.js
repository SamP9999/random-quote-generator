const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// Serve static files (your HTML, CSS, JS)
app.use(express.static('public'));

app.get('/quote', async (req, res) => {
  try {
    const response = await fetch('https://https://zenquotes.io/api/random');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
