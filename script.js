let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =  [
    {
      quote: "I do the very best I know how - the very best I can; and I mean to keep on doing so until the end.",
      person: "Abraham Lincoln"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      person: "Albert Einstein"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      person: "Chinese Proverb"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      person: "Franklin D. Roosevelt"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    }
  ];
  
btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
  console.log('a');
});
