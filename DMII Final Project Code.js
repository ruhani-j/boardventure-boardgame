const squareSize = 60; // square size

let numPlayers = 0; // num of players

let currentPlayer = 0; // current player index

let spinnerResult = 0; // spinner result

let playerPositions = [0, 0, 0, 0]; // player positions

let targetPositions = [0, 0, 0, 0]; // target positions for animation

let playerOffsets = [

{ x: 45, y: 45 },

{ x: 15, y: 15 },

{ x: 15, y: 45 },

{ x: 45, y: 15 },

]; // offsets for players

let actionCardVisible = false; // action card visibility

let spinnerDisplay = ""; // spinner display

let currentActionCard = ""; // current action card text

let actionCardIndex = -1; // keeps track of which action card is being
shown

let currentActionEffect = ""; // Store action card effect type for
further handling

let animating = false; // to track if animation is in progress

let animationStep = 0; // current animation step

let totalSteps = 0; // total steps to move based on spinner result

let lastMoveFrame = 0; // track last move frame

const animationSpeed = 15; // delay between moves (higher value = slower
movement)

// grid layout

const squares = [

{ x: 370, y: 50 },

{ x: 310, y: 50 },

{ x: 250, y: 50 },

{ x: 190, y: 50 },

{ x: 130, y: 50 },

{ x: 70, y: 50 },

{ x: 10, y: 50 },

{ x: 10, y: 110 },

{ x: 10, y: 170 },

{ x: 70, y: 170 },

{ x: 130, y: 170 },

{ x: 190, y: 170 },

{ x: 250, y: 170 },

{ x: 310, y: 170 },

{ x: 370, y: 170 },

{ x: 370, y: 230 },

{ x: 370, y: 290 },

{ x: 310, y: 290 },

{ x: 250, y: 290 },

{ x: 190, y: 290 },

{ x: 130, y: 290 },

{ x: 70, y: 290 },

{ x: 10, y: 290 },

];

// stop squares to trigger action card

const stopSquares = [6, 12, 18]; // These are positions where the action
card will pop up (index based)

// player colors

const playerColors = ["blue", "red", "yellow", "green"];

let playerScores = [0, 0, 0, 0]; // array to keep track of player scores

// action cards (corrected names)

const actionCards = [

"Move forward 2 spaces.",

"Skip your next turn.",

"Switch places with another player.",

"Go back to start.",

"Take another turn.",

"Move backward 1 space.",

];

let doneButton;

function setup() {

createCanvas(450, 400);

// Player selection buttons

let button1 = createButton("1 Player");

button1.mousePressed(() => setPlayers(1));

button1.position(20, 360);

let button2 = createButton("2 Players");

button2.mousePressed(() => setPlayers(2));

button2.position(90, 360);

let button3 = createButton("3 Players");

button3.mousePressed(() => setPlayers(3));

button3.position(170, 360);

let button4 = createButton("4 Players");

button4.mousePressed(() => setPlayers(4));

button4.position(250, 360);

window.playerButtons = [button1, button2, button3, button4];

// Spin button (initially hidden)

window.spinButton = createButton("Spin");

window.spinButton.mousePressed(spinSpinner);

window.spinButton.position(375, 360);

window.spinButton.hide(); // Hide until number of players is selected

// Scores button

let scoresButton = createButton("Scores"); // scores button

scoresButton.mousePressed(showScores); // function to show scores

scoresButton.position(375, 20); // move to top right

}

function draw() {

background("skyblue");

drawBoard();

// draw players with animation

for (let i = 0; i < numPlayers; i++) {

let pos = playerPositions[i];

if (animating && i === currentPlayer) {

let stepsLeft = totalSteps - animationStep;

if (stepsLeft > 0 && frameCount - lastMoveFrame >= animationSpeed) {

let nextPos = (pos + 1) % squares.length;

playerPositions[i] = nextPos;

animationStep++;

lastMoveFrame = frameCount; // Update last move frame

} else if (stepsLeft === 0) {

animating = false;

}

}

let x = squares[pos].x;

let y = squares[pos].y;

let offsetX = playerOffsets[i].x;

let offsetY = playerOffsets[i].y;

fill(playerColors[i]);

ellipse(x + offsetX, y + offsetY, 20, 20);

}

// show spinner number

if (spinnerDisplay !== "") {

fill("black");

textSize(32);

text(spinnerDisplay, width / 2 - 20, height / 2);

}

// show action card

if (actionCardVisible) {

fill(255);

rect(150, 100, 150, 150); // make card larger for instructions and
button

fill(0);

textSize(16);

text("Instructions", 180, 120); // Instructions header

// Wrap text to fit inside card

textSize(14);

text(currentActionCard, 160, 150, 130, 90); // make sure the text stays
inside the card

// Display done button

if (!doneButton) {

doneButton = createButton("Done");

doneButton.position(175, 210); // position of the done button

doneButton.mousePressed(() => {

actionCardVisible = false;

window.spinButton.show(); // show spin button again after action card is
done

handleActionEffect(); // Apply action effect after the card is closed

doneButton.remove(); // remove the button after it is clicked

doneButton = null; // Reset doneButton variable

});

}

}

noStroke();

fill("black");

text("START", 375, 85);

text("FINISH", 15, 325);

textSize(16);

text(`Player ${currentPlayer + 1} / ${playerColors[currentPlayer]}`, 20,
370);

}

function setPlayers(players) {

numPlayers = players;

playerPositions.fill(0, 0, numPlayers);

targetPositions.fill(0, 0, numPlayers);

playerScores.fill(0, 0, numPlayers); // initialize scores to 0

window.playerButtons.forEach((button) => button.hide());

window.spinButton.show(); // show the spin button for the first player

}

function spinSpinner() {

spinnerResult = Math.floor(random(1, 7));

spinnerDisplay = spinnerResult;

let newPos = playerPositions[currentPlayer] + spinnerResult;

if (newPos >= squares.length) {

newPos = squares.length - 1;

}

targetPositions[currentPlayer] = newPos;

totalSteps = spinnerResult;

animating = true;

animationStep = 0;

lastMoveFrame = frameCount; // Start animation timing

// check if player landed on or passed a stop square

if (stopSquares.includes(newPos)) {

// shuffle action cards to get a new card every time

actionCardIndex = Math.floor(random(actionCards.length));

currentActionCard = `${playerColors[currentPlayer - 1]}: ${

actionCards[actionCardIndex]

}`;

currentActionEffect = actionCards[actionCardIndex]; // Store the action
card effect

actionCardVisible = true;

// Hide spin button while action card is visible

window.spinButton.hide();

}

// If player reaches the last square, stop the game (no looping back)

if (newPos === squares.length - 1) {

currentPlayer = (currentPlayer + 1) % numPlayers; // move to the next
player

}

currentPlayer = (currentPlayer + 1) % numPlayers;

setTimeout(() => {

spinnerDisplay = "";

}, 1000);

}

function drawBoard() {

strokeWeight(2);

fill(246, 215, 176); // normal color for squares

stroke(62, 103, 214);

squares.forEach((square, index) => {

rect(square.x, square.y, squareSize, squareSize);

// Add "STOP" label to stop squares

if (stopSquares.includes(index)) {

textSize(16);

text("STOP", square.x + 10, square.y + 30); // position the text on the
square

}

});

}

function showScores() {

let scoresMessage = "Scores:\n";

for (let i = 0; i < numPlayers; i++) {

scoresMessage += `${playerColors[i]}: ${playerScores[i]} points\n`;

}

alert(scoresMessage); // Show scores in an alert box

}

function handleActionEffect() {

// Implement action effects based on currentActionEffect

if (currentActionEffect.includes("Move forward 2 spaces")) {

playerPositions[currentPlayer] += 2; // Move forward 2 spaces

} else if (currentActionEffect.includes("Skip your next turn")) {

currentPlayer = (currentPlayer + 1) % numPlayers; // Skip next turn

} else if (

currentActionEffect.includes("Switch places with another player")

) {

// Switch with next player (for simplicity)

let otherPlayer = (currentPlayer + 1) % numPlayers;

let temp = playerPositions[currentPlayer];

playerPositions[currentPlayer] = playerPositions[otherPlayer];

playerPositions[otherPlayer] = temp;

} else if (currentActionEffect.includes("Go back to start")) {

playerPositions[currentPlayer] = 0; // Go back to start

} else if (currentActionEffect.includes("Take another turn")) {

spinSpinner(); // Take another spin immediately

}

}
