function showQuotes(){
    DOMselectors.quote.innerHTML = "";
    likedQuotes.forEach((quote, index) => {
      DOMselectors.insertAdjacentHTML("beforeend", 
      `<div class="boxy">
      <p>${index + 1}. ${quote}</p>
      </div>`)
    })
  }  
  