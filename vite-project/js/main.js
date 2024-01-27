
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
async function createCardlike(){
  createCard()
  
    const quoteContent = DOMselectors.quote.textContent;
    if (quoteContent) {
      likedQuotes.push(quoteContent);
      console.log(likedQuotes);
    }


}
async function createCardDislike(){
  createCard();
}

function showQuotes(){
  DOMselectors.quote.innerHTML = "";
  likedQuotes.forEach((quote, index) => {
    DOMselectors.insertAdjacentHTML("beforeend", 
    `<div class="boxy">
    <p>${index + 1}. ${quote}</p>
    </div>`)
  })
}  


DOMselectors.dislike.addEventListener("click", 
createCardDislike)

DOMselectors.like.addEventListener("click", 
  createCardlike)

DOMselectors.myQuotes.addEventListener("click", 
showQuotes)

