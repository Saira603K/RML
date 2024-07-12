let currentQuoteIndex = 0;
const quotes = document.querySelectorAll('.quote');

function showNextQuote() {
    quotes[currentQuoteIndex].style.display = 'none';
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quotes[currentQuoteIndex].style.display = 'block';
}

setInterval(showNextQuote, 5000);
quotes[currentQuoteIndex].style.display = 'block';

function showContent(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.style.display = 'none');

    document.getElementById(tabId).style.display = 'block';
}
