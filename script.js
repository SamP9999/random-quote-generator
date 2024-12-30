

async function generateQuote() {
  try {
    const response = await fetch('https://random-quote-generator-97lw.onrender.com/quote');
    const data = await response.json();
    const quote = data.quote; // Access the quote property
    document.querySelector('.quote').textContent = quote; // Display the quote in the HTML
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}

