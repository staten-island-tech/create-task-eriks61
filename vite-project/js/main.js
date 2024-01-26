
import { DOMselectors } from './dom.js';

const url = "https://api.quotable.io/random";
let likedQuotes = [];

async function createCard(){
  DOMselectors.quote.innerHTML=""
  try {
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    DOMselectors.quote.insertAdjacentHTML("beforeend", 
    `<div id="bird"
    <h2 class="card-name">${data.content}</h2>
    </div>`
    )
  }
  catch (error){
  console.error("error", error);
  }
}


async function store(){
  try {
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

 
}
catch (error){
  console.error("error", error);
}
}

function addToArray(){
  let likedQuotes = [];
  const quoteContent = DOMselectors.quote.textContent;
  if (quoteContent) {
    likedQuotes.push(quoteContent);
    console.log(likedQuotes);
  }
  
}

DOMselectors.dislike.addEventListener("click", 
createCard)

DOMselectors.like.addEventListener("click", function () {
  console.log('clicked')
  createCard();
  addToArray();
}
)
createCard()
