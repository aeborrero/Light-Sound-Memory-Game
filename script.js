//Global Variables
//var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;

// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

function setDifficultyEasy() {
  
  document.getElementById("easyBtn").classList.add("hidden");
  document.getElementById("medBtn").classList.add("hidden");
  document.getElementById("hardBtn").classList.add("hidden");
  document.getElementById("easyBtn2").classList.remove("hidden");
  document.getElementById("startBtnEasy").classList.remove("hidden");
  document.getElementById("changeDiff").classList.remove("hidden");
}

function setDifficultyMed() {
  
  document.getElementById("easyBtn").classList.add("hidden");
  document.getElementById("medBtn").classList.add("hidden");
  document.getElementById("hardBtn").classList.add("hidden");
  document.getElementById("medBtn2").classList.remove("hidden");
  document.getElementById("startBtnMed").classList.remove("hidden");
  document.getElementById("changeDiff").classList.remove("hidden");
  document.getElementById("button5").classList.remove("hidden");
  document.getElementById("button6").classList.remove("hidden");
}

function setDifficultyHard() {
  
  document.getElementById("easyBtn").classList.add("hidden");
  document.getElementById("medBtn").classList.add("hidden");
  document.getElementById("hardBtn").classList.add("hidden");
  document.getElementById("hardBtn2").classList.remove("hidden");
  document.getElementById("startBtnHard").classList.remove("hidden");
  document.getElementById("changeDiff").classList.remove("hidden");
  document.getElementById("button5").classList.remove("hidden");
  document.getElementById("button6").classList.remove("hidden");
  document.getElementById("button7").classList.remove("hidden");
  document.getElementById("button8").classList.remove("hidden");
  
}

function changeDifficulty() {
  
  stopGame();
  document.getElementById("startBtnEasy").classList.add("hidden");
  document.getElementById("startBtnMed").classList.add("hidden");
  document.getElementById("startBtnHard").classList.add("hidden");
  document.getElementById("changeDiff").classList.add("hidden");
  document.getElementById("easyBtn").classList.remove("hidden");
  

  document.getElementById("medBtn").classList.remove("hidden");
  document.getElementById("hardBtn").classList.remove("hidden");
  document.getElementById("easyBtn2").classList.add("hidden");
  document.getElementById("medBtn2").classList.add("hidden");
  document.getElementById("hardBtn2").classList.add("hidden");
  document.getElementById("button5").classList.add("hidden");
  document.getElementById("button6").classList.add("hidden");
  document.getElementById("button7").classList.add("hidden");
  document.getElementById("button8").classList.add("hidden");
}


function startGameEasy(){
    //initialize game variables
    progress = 0;
    randomizePatternEasy();
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtnEasy").classList.add("hidden");
    document.getElementById("startBtnMed").classList.add("hidden");
    document.getElementById("startBtnHard").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function startGameMed(){
    //initialize game variables
    progress = 0;
    randomizePatternMed();
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtnEasy").classList.add("hidden");
    document.getElementById("startBtnMed").classList.add("hidden");
    document.getElementById("startBtnHard").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function startGameHard(){
    //initialize game variables
    progress = 0;
    randomizePatternHard();
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtnEasy").classList.add("hidden");
    document.getElementById("startBtnMed").classList.add("hidden");
    document.getElementById("startBtnHard").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtnEasy").classList.add("hidden");
    document.getElementById("startBtnMed").classList.add("hidden");
    document.getElementById("startBtnHard").classList.add("hidden");
    document.getElementById("changeDiff").classList.add("hidden");
    document.getElementById("easyBtn").classList.remove("hidden");
    document.getElementById("medBtn").classList.remove("hidden");
    document.getElementById("hardBtn").classList.remove("hidden");
    document.getElementById("easyBtn2").classList.add("hidden");
    document.getElementById("medBtn2").classList.add("hidden");
    document.getElementById("hardBtn2").classList.add("hidden");
    document.getElementById("button5").classList.add("hidden");
    document.getElementById("button6").classList.add("hidden");
    document.getElementById("button7").classList.add("hidden");
    document.getElementById("button8").classList.add("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function randomizePatternEasy(){
  pattern = []
  for (var i=0, t=4, j = 8; i < j; i++) {
    pattern.push(Math.floor(Math.random() * t) + 1);
  }
}

function randomizePatternMed(){
  pattern = []
  for (var i=0, t=6, j = 8; i < j; i++) {
    pattern.push(Math.floor(Math.random() * t) + 1);
  }
}

function randomizePatternHard(){
  pattern = []
  for (var i=0, t=8, j = 8; i < j; i++) {
    pattern.push(Math.floor(Math.random() * t) + 1);
  }
}
  

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 525.2,
  6: 593.3,
  7: 634.6,
  8: 700
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function winGame(){
  stopGame();
  alert("Game Over. You Won!");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
 if(pattern[guessCounter] == btn) {
    //Guess was correct!
    if(guessCounter == progress) {
      if(progress == pattern.length - 1) { 
        //GAME OVER: WIN!
        winGame();
      }else {
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else {
      //so far so good... check the next guess
      guessCounter++;
    }
  }else {
    //Guess was incorrect
    //GAME OVER: LOSE!
    loseGame();
  }
}


