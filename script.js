

async function generateQuote(){
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  const quote = data.cotent;
  document.querySelector('.quote').textContent = "${quote}";
}