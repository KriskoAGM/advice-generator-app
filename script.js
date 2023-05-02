const quote = document.getElementById('text');
const quoteId = document.getElementById('quote-id');
const generateBtn = document.getElementById('btn');
const url = 'https://api.adviceslip.com/advice';

generateBtn.addEventListener('click', handleGenerateQuote);
window.addEventListener('load', handleGenerateQuote);

function handleGenerateQuote() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const { id, advice } = data.slip;
            quote.textContent = advice;
            quoteId.textContent = id;
        })
};