import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState({quote: "", author: ""});
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // State for background color
  const quotes=[
      {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
        author: "Nelson Mandela"
      },
      {
        quote: "The way to get started is to quit talking and begin doing.",  
        author: "Walt Disney"
      },
      {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
  }];

  const colors = ["#f39c12", "#8e44ad", "#16a085", "#d35400", "#c0392b", "#2980b9"];

  function getRandomQuote(){
    //theres 20 diferent quotes, get a random number between 1 and 20
    let randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]); // Correctly update state with the selected quote

    // Get a random color
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor); // Update state with the selected color
    document.body.style.backgroundColor = randomColor; // Change the background color of the body 
  }

  
  // useEffect hook to run on component mount
  useEffect(() => {
    getRandomQuote(); // Set a random quote on initial load
  }, []); // Empty dependency array ensures this runs only once on mount
    
   // Generate Twitter Intent URL
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.quote}" - ${quote.author}`
  )}`;

  return (  
    <div className='container-fluid'>
      <div id="quote-box" className="center text-center">
        <div id="quote-text">
          <span id="text" style={{ color: backgroundColor }}>{quote.quote}</span>
        </div>
        <div id="quote-author">
          <span id="author" style={{ color: backgroundColor }}>-{quote.author}</span>
        </div>
        <div className='row d-flex justify-content-center mt-4'>

          <div className='col-auto'>
        <button id="new-quote" className="btn btn-primary" style={{ backgroundColor: backgroundColor, color: 'white' }} onClick={getRandomQuote}>
          New Quote
        </button>
        </div>
        <div className='col-auto'>
       <a
          id="tweet-quote"
          href={tweetURL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
          style={{ backgroundColor: backgroundColor, color: 'white' }}
        >
          Tweet Quote
        </a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
