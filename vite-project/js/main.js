import './style.css'
import { DOMselectors } from './dom.js';

const url = "https://api.quotable.io/random";

async function createCard(){
  try {
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    DOMselectors.quote.insertAdjacentHTML("beforeend",  
    )
  }
  catch {

  }
}