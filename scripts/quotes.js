let quoteElement = document.querySelector("#quote");
let authorElement = document.querySelector("#author");
let newQuoteButton = document.querySelector('#newQuote')

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    quoteElement.innerText = data.content;
    authorElement.innerText = `-${data.author}`;
}
randomQuote()

newQuoteButton.addEventListener('click', randomQuote);