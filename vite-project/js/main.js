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
createCard()
async function createCardlike(){
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
    const quoteContent = DOMselectors.quote.textContent;
if (quoteContent) {
  likedQuotes.push(quoteContent);
  console.log(likedQuotes);
}
  }
  catch (error){
  console.error("error", error);
  }
}

async function createCardDislike(){
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


function showQuotes(){
  DOMselectors.quote.innerHTML = "";
  const copies = likedQuotes.slice();
  for (let i = 0; i < copies.length-1; i++){
    for (let j = 0; j< copies.length - 1 - i; j++){
      if(copies[j].length > copies[j + 1].length){
       
        const temp = copies[j];
        copies[j] = copies[j+1];
        copies[j+1] = temp;
      }
    }
  }
  copies.forEach((quote, index) => {
    DOMselectors.quote.insertAdjacentHTML("beforeend", 
    `<div>
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

