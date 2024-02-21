document.addEventListener('DOMContentLoaded', function() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const reloadButton = document.getElementById('reload');
  
    function fetchQuote() {
      fetch('https://api.quotable.io/random')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch quote');
          }
          return response.json();
        })
        .then(data => {
          const quote = data.content;
          const author = data.author;
          quoteElement.textContent = `"${quote}"`;
          authorElement.textContent = `- ${author}`;
        })
        .catch(error => {
          console.error('Error fetching quote:', error);
          quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
        });
    }
  
    reloadButton.addEventListener('click', fetchQuote);

    fetchQuote();
  });