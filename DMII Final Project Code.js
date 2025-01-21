const squareSize = 60; // square size

let numPlayers = 0; // num of players

let currentPlayer = 0; // current player index

let spinnerResult = 0; // spinner result

let playerPositions = [0, 0, 0, 0]; // player positions

let actionCardVisible = false; // action card visibility

let spinnerDisplay = ""; // spinner display

// grid layout

const squares = [

{ x: 370, y: 50 }, { x: 310, y: 50 }, { x: 250, y: 50 }, { x: 190, y: 50
}, { x: 130, y: 50 }, { x: 70, y: 50 }, { x: 10, y: 50 },

{ x: 10, y: 110 }, { x: 10, y: 170 }, { x: 70, y: 170 }, { x: 130, y:
170 }, { x: 190, y: 170 }, { x: 250, y: 170 }, { x: 310, y: 170 }, { x:
370, y: 170 },

{ x: 370, y: 230 }, { x: 370, y: 290 }, { x: 310, y: 290 }, { x: 250, y:
290 }, { x: 190, y: 290 }, { x: 130, y: 290 }, { x: 70, y: 290 }, { x:
10, y: 290 }

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

// draw players

for (let i = 0; i < numPlayers; i++) {

let pos = playerPositions[i];

let x = squares[pos].x;

let y = squares[pos].y;

let offsetX = 0, offsetY = 0;

// player offset positions

if (i === 0) { offsetX = 45; offsetY = 45; }

if (i === 1) { offsetX = 15; offsetY = 15; }

if (i === 2) { offsetX = 15; offsetY = 45; }

if (i === 3) { offsetX = 45; offsetY = 15; }

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

// show start/finish

noStroke();

fill("black");

text("START", 380, 85);

text("FINISH", 20, 325);

// show current player

textSize(16);

text(`Player ${currentPlayer + 1} / ${playerColors[currentPlayer]}`, 20,
370);

}

// set number of players

function setPlayers(players) {

numPlayers = players;

playerPositions.fill(0, 0, numPlayers); // reset positions

window.playerButtons.forEach(button => button.hide());

}

// spin the spinner

function spinSpinner() {

spinnerResult = Math.floor(random(1, 7));

spinnerDisplay = spinnerResult;

// move player

playerPositions[currentPlayer] += spinnerResult;

// keep players within bounds

if (playerPositions[currentPlayer] >= squares.length) {

playerPositions[currentPlayer] = squares.length - 1;

}

// action card on special squares

if (playerPositions[currentPlayer] % 6 === 0) {

actionCardVisible = true;

}

// move to next player

currentPlayer = (currentPlayer + 1) % numPlayers;

setTimeout(() => (spinnerDisplay = ""), 1000); // clear spinner

actionCardVisible = false; // hide action card

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
