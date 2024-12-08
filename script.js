

async function generateQuote() {
  try {
    const response = await fetch('http://localhost:3000/quote');
    const data = await response.json();
    const quote = data.quote; // Access the quote property
    document.querySelector('.quote').textContent = quote; // Display the quote in the HTML
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}

