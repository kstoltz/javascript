// Game values

let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random() * max + min);
    guessesLeft = 3;

// UI Elements

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.getElementById('guess-btn'),
      guessInput = document.getElementById('guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', (e) => {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
})

// Listen for guesses
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);

  // Validate the user's guess
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else {

    // Check if won
    if(guess === winningNum){
      // Game over, you won! :)
      gameOver(true, 'You guessed the number!');
    } else {
  
      // User loses a guess
      guessesLeft--;
    
      if (guessesLeft === 0) {
  
        // Game over, tell the user they lost, and show them the right answer. :(
        gameOver(false, `Sorry, the correct answer was ${winningNum}`);
  
      } else {
  
        // Tell the user they guessed wrong, and they have X guesses left
        guessInput.value = '';
        guessInput.style.borderColor = 'red';
        setMessage(`Wrong number, you have ${guessesLeft} guesses left`, 'red');
  
      }
  
    }

  }

});

function gameOver(won, msg) {
  
  let color;
  won === true ? color = 'green' : color = 'red';

  guessInput.disabled = true;
  guessInput.style.borderColor = color;

  this.setMessage(msg, color);

  guessBtn.value = "Play again";
  guessBtn.className += 'play-again'; 

}

 // Set Message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}