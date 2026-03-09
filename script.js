const scientists = [
{
name: "SCHWANN",
clue: "Scientist who helped develop the Cell Theory."
},
{
name: "SCHLEIDEN",
clue: "Botanist who concluded that plants are made of cells."
},
{
name: "EINSTEIN",
clue: "Developed the Theory of Relativity."
},
{
name: "TESLA",
clue: "Inventor known for alternating current electricity."
},
{
name: "GALILEO",
clue: "Astronomer who supported heliocentrism."
},
{
name: "HAYTHAM",
clue: "Father of modern optics."
}
];

let word = "";
let guessed = [];
let attempts = 0;
const maxAttempts = 6;

const hangmanStages = [
"",
"O",
"O\n|",
"O\n/|",
"O\n/|\\",
"O\n/|\\\n/",
"O\n/|\\\n/ \\"
];

function startGame(){

const random = scientists[Math.floor(Math.random() * scientists.length)];

word = random.name;
guessed = [];
attempts = 0;

document.getElementById("clue").textContent = random.clue;
document.getElementById("message").textContent = "";
document.getElementById("hangman").textContent = "";

displayWord();
}

function displayWord(){

let display = "";

for(let letter of word){

if(guessed.includes(letter)){
display += letter + " ";
}else{
display += "_ ";
}

}

document.getElementById("word").textContent = display;
}

function guessLetter(){

const input = document.getElementById("letter");
const letter = input.value.toUpperCase();

input.value = "";

if(letter === "" || guessed.includes(letter)) return;

guessed.push(letter);

if(!word.includes(letter)){
attempts++;
}

document.getElementById("hangman").textContent = hangmanStages[attempts];

displayWord();
checkGame();
}

function checkGame(){

let won = true;

for(let letter of word){
if(!guessed.includes(letter)){
won = false;
}
}

if(won){
document.getElementById("message").textContent = "🎉 You guessed the scientist!";
}

if(attempts >= maxAttempts){
document.getElementById("message").textContent = "💀 Game Over! The word was " + word;
}
}

document.getElementById("guessBtn").addEventListener("click", guessLetter);
document.getElementById("newGame").addEventListener("click", startGame);

startGame();