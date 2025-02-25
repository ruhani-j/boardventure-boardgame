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

let actionCardText = ""; // text inside action card

let spinnerDisplay = ""; // spinner display

let animating = false; // to track if animation is in progress

let animationStep = 0; // current animation step

let totalSteps = 0; // total steps to move

let lastMoveFrame = 0; // frame count tracker

let frameDelay = 15; // delay between movements

// Action card messages

const actionCards = [

"Move forward 2 spaces!",

"Go back 1 space!",

"Skip your next turn!",

"Swap places with a player!",

"Spin again!",

];

// grid layout

const squares = [

{ x: 370, y: 50 }, { x: 310, y: 50 }, { x: 250, y: 50 }, { x: 190, y: 50
},

{ x: 130, y: 50 }, { x: 70, y: 50 }, { x: 10, y: 50 }, { x: 10, y: 110
},

{ x: 10, y: 170 }, { x: 70, y: 170 }, { x: 130, y: 170 }, { x: 190, y:
170 },

{ x: 250, y: 170 }, { x: 310, y: 170 }, { x: 370, y: 170 }, { x: 370, y:
230 },

{ x: 370, y: 290 }, { x: 310, y: 290 }, { x: 250, y: 290 }, { x: 190, y:
290 },

{ x: 130, y: 290 }, { x: 70, y: 290 }, { x: 10, y: 290 }

];

// player colors

const playerColors = ["blue", "red", "yellow", "green"];

function setup() {

createCanvas(450, 400);

// player selection buttons

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

// spin button

let spinButton = createButton("Spin");

spinButton.mousePressed(spinSpinner);

spinButton.position(375, 360);

}

function draw() {

background("skyblue");

// draw board

drawBoard();

// draw players with animation

for (let i = 0; i < numPlayers; i++) {

let pos = playerPositions[i];

// If animation is active and enough frames have passed, move the player

if (animating && i === currentPlayer && frameCount - lastMoveFrame >
frameDelay) {

if (animationStep < totalSteps) {

playerPositions[i] = (pos + 1) % squares.length;

animationStep++;

lastMoveFrame = frameCount; // Update frame count tracker

} else {

animating = false; // End animation when done

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

drawActionCard();

}

// show start/finish

noStroke();

fill("black");

text("START", 375, 85);

text("FINISH", 15, 325);

// show current player

textSize(16);

text(`Player ${currentPlayer + 1} / ${playerColors[currentPlayer]}`, 20,
370);

}

// draw the action card with better design

function drawActionCard() {

fill(255, 255, 200); // Light yellow background

stroke(0);

strokeWeight(3);

rect(125, 90, 200, 120, 15); // Rounded corners

fill(0);

textSize(20);

textAlign(CENTER, CENTER);

text("Action Card", 225, 110);

textSize(16);

text(actionCardText, 225, 150);

// Draw shadow effect

noStroke();

fill(0, 0, 0, 50);

rect(130, 95, 200, 120, 15);

}

// set number of players

function setPlayers(players) {

numPlayers = players;

playerPositions.fill(0, 0, numPlayers); // reset positions

targetPositions.fill(0, 0, numPlayers); // reset target positions

window.playerButtons.forEach((button) => button.hide());

}

// spin the spinner

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

lastMoveFrame = frameCount;

// Increase the chance of an action card appearing

if (newPos % 3 === 0 || Math.random() < 0.5) { // Every 3rd space or 50%
chance

actionCardVisible = true;

actionCardText = random(actionCards);

// Hide action card after 2.5 seconds

setTimeout(() => {

actionCardVisible = false;

}, 2500);

}

currentPlayer = (currentPlayer + 1) % numPlayers;

setTimeout(() => {

spinnerDisplay = "";

}, 1000);

}

// draw the grid

function drawBoard() {

strokeWeight(2);

fill(246, 215, 176);

stroke(62, 103, 214);

squares.forEach((square) => {

rect(square.x, square.y, squareSize, squareSize);

});

}
