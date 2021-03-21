// global constants
const nextClueWaitTime = 1000;  // how long to wait before starting playback of the clue sequence
const guessTime = 10;  // how many seconds you have to guess

// global variables
var pattern = [1, 1, 1, 1, 1, 1, 1, 1];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  // must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000;  // how long to hold each clue's light/sound
var cluePauseTime = 333;  // how long to pause in between clues
var numMistakes = 0;  // number of mistakes; a player loses on the 3rd mistake
var guessTimer; 
var seconds = guessTime;


function startGame() {
  // initialize game variables
  generatePattern();
  progress = 0;
  numMistakes = 0;
  document.getElementById("mistakes").innerHTML = "Mistakes: " + numMistakes;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  resetClock();
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


// Generates a random light pattern for the game
function generatePattern() {
  for(let i=0; i<=(pattern.length-1); i++) {
    pattern[i] = 1 + Math.floor(Math.random() * 4);
  }
}

// Updates the internal mistake counter and the one displayed on the screen.
// If the player reaches 3 mistakes, they lose.
function addMistake() {
  numMistakes++;
  document.getElementById("mistakes").innerHTML = "Mistakes: " + numMistakes;
  if(numMistakes == 3) {
      loseGame();
      return true;
  }
  return false;
}

function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  clueHoldTime = 1000;
  cluePauseTime = 333;
  let delay = nextClueWaitTime;  // set delay to initial wait time
  for(let i=0;i<=progress;i++){  // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]);  // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime *= 0.7;
    cluePauseTime *= 0.3
  }
  guessTimer = setInterval(startClock, 1000);
}


function startClock() {
  document.getElementById("timer").innerHTML = "Time remaining: " + seconds + "s";
  if(seconds == 0) {
    resetClock();
    addMistake();
  } else {
    seconds -= 1;
  }
}

function resetClock() {
  clearInterval(guessTimer);
  seconds = guessTime;
  document.getElementById("timer").innerHTML = "Time remaining: " + seconds + "s";
}


function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Congratulations! You won!");
}


function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying) {
    return;
  }
  
  if(pattern[guessCounter] == btn) {
    if(guessCounter == progress) {
      resetClock();
      if(progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    if (!addMistake()) {
      resetClock();
      playClueSequence();
    }
  }
}



// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
