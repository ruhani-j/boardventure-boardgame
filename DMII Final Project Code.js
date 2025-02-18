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

let animating = false; // to track if animation is in progress

let animationStep = 0; // current animation step

let totalSteps = 0; // total steps to move based on spinner result

let lastMoveFrame = 0; // track last move frame

const animationSpeed = 15; // delay between moves (higher value = slower
movement)

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

{ x: 130, y: 290 }, { x: 70, y: 290 }, { x: 10, y: 290 },

];

// player colors

const playerColors = ["blue", "red", "yellow", "green"];

function setup() {

createCanvas(450, 400);

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

let spinButton = createButton("Spin");

spinButton.mousePressed(spinSpinner);

spinButton.position(375, 360);

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

rect(150, 100, 150, 100);

fill(0);

textSize(16);

text("Action Card", 180, 150);

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

window.playerButtons.forEach((button) => button.hide());

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

if (newPos % 6 === 0) {

actionCardVisible = true;

}

currentPlayer = (currentPlayer + 1) % numPlayers;

setTimeout(() => {

spinnerDisplay = "";

actionCardVisible = false;

}, 1000);

}

function drawBoard() {

strokeWeight(2);

fill(246, 215, 176);

stroke(62, 103, 214);

squares.forEach((square) => {

rect(square.x, square.y, squareSize, squareSize);

});

}
