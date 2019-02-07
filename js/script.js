/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/
function Quote(text, author, source, year) {
  this.text = text;
  this.author = author;
  this.source = source;
  this.year = year;
}

var q1 = new Quote("Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.", "Einstein"),
    q2 = new Quote("Try not to become a man of success, but rather try to become a man of value.", "Einstein"),
    q3 = new Quote("Success is not final, failure is not fatal: it is the courage to continue that counts.", "Winston S. Churchill", "Journal", 1944),
    q4 = new Quote("Bad programmers worry about the code. Good programmers worry about data structures and their relationships.", "Linus Torvalds", "Twitter", 2001),
    q5 = new Quote("Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.", "Linus Torvalds", "Twitter", 2001);

var quotes = new Array(q1, q2, q3, q4, q5);

/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/
function getRandomQuote() {
  var index = Math.floor(Math.random() * (quotes.length));
  return quotes[index];
}




/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  var quote = getRandomQuote(),
      quoteElement = document.getElementsByClassName('quote')[0],
      authorElement = document.getElementsByClassName('source')[0];
    
  var source = authorElement.childNodes[1];
  var year = authorElement.childNodes[2];
    
  source.innerHTML = quote.source ? quote.source : "Unknown";
  year.innerHTML = quote.year ? quote.year : "Unknown";

  quoteElement.innerHTML = quote.text;
  authorElement.innerHTML = quote.author + source.outerHTML + year.outerHTML;
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.