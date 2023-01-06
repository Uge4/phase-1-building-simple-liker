

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//invoke mimicServerCall() when user interacts, 
//need to handle response i.e. update heart if successful, display error if not
//don't need 2x .then(), and don't need to call .json() on response 

// document.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');


const hearts = document.querySelectorAll(".like-glyph")

for(const heart of hearts){
  heart.addEventListener(`click`, handleClick)
}



function handleClick(e){
  let heartState = e.target
  mimicServerCall(heartState)
  .then(() => {
      if (heartState.innerText === EMPTY_HEART){
        heartState.innerText = FULL_HEART;
        heartState.setAttribute("class", "activated-heart")
      }
      else {
        heartState.innerText = EMPTY_HEART
        heartState.classList.remove(".activated-heart")
      }
    }
  )
    .catch(() => {
      document.querySelector("div#modal").classList.remove('hidden')
      setTimeout(hideError, 3000)
    }
  )

}

function hideError(){
  document.querySelector("div#modal").classList.add('hidden')
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


// });