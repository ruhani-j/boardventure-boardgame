const squareSize = 60; // square size

let numPlayers = 0; // number of players

let currentPlayer = 0; // index of the current player

let spinnerResult = 0; // spinner result

let playerPositions = [0, 0, 0, 0]; // player positions

let playerOffsets = [

{ x: 45, y: 45 },

{ x: 15, y: 15 },

{ x: 15, y: 45 },

{ x: 45, y: 15 },

]; // offsets for players

let actionCardVisible = false; // card visibility (action or point)

let spinnerDisplay = ""; // spinner display

let currentActionCard = ""; // current card text (action or point)

let currentActionEffect = ""; // for action cards, store effect details

let currentCardType = ""; // "action" or "point"

let currentPointValue = 0; // holds the point value for point cards

let animating = false; // track if animation is in progress

let animationStep = 0; // current animation step

let totalSteps = 0; // total steps to move based on spinner result

let lastMoveFrame = 0; // track last move frame

const animationSpeed = 15; // delay between moves

let remainingSteps = 0; // steps remaining after landing on a stop tile

let switchButtons = []; // buttons for switch action

let gameOver = false; // flag for game over

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

const stopSquares = [6, 12, 18]; // positions that trigger a card

const playerColors = ["blue", "red", "yellow", "green"];

let playerScores = [100, 100, 100, 100]; // players start with 100
points

const actionCards = [

"Move forward 2 spaces.",

"Switch places with another player.",

"Go back to start.",

"Take another turn.",

"Move backward 1 space.",

];

let finishedPlayers = []; // Track indices of finished players

function setup() {

createCanvas(450, 400);

// Removed single player option.

let button2 = createButton("2 Players").mousePressed(() =>
setPlayers(2)).position(90, 360);

let button3 = createButton("3 Players").mousePressed(() =>
setPlayers(3)).position(170, 360);

let button4 = createButton("4 Players").mousePressed(() =>
setPlayers(4)).position(250, 360);

window.playerButtons = [button2, button3, button4];

window.spinButton =
createButton("Spin").mousePressed(spinSpinner).position(375, 360);

window.spinButton.hide();

let scoresButton =
createButton("Scores").mousePressed(showScores).position(375, 20);

}

function draw() {

if (gameOver) {

drawGameOverScreen();

return;

}

background("skyblue");

drawBoard();

// Animate players.

for (let i = 0; i < numPlayers; i++) {

let pos = playerPositions[i];

// Only animate the current player if not finished.

if (animating && i === currentPlayer) {

let stepsLeft = totalSteps - animationStep;

if (stepsLeft > 0 && frameCount - lastMoveFrame >= animationSpeed) {

playerPositions[i] = Math.min(pos + 1, squares.length - 1);

animationStep++;

lastMoveFrame = frameCount;

// If the player reaches the end, handle finish.

if (playerPositions[i] === squares.length - 1) {

handlePlayerFinish(i);

return;

}

// When landing on a STOP square, freeze movement and show a card.

if (stopSquares.includes(playerPositions[i])) {

animating = false;

remainingSteps = totalSteps - animationStep;

showCard();

return;

}

} else if (stepsLeft === 0) {

animating = false;

if (playerPositions[i] === squares.length - 1) {

handlePlayerFinish(i);

return;

}

if (stopSquares.includes(playerPositions[i])) {

remainingSteps = 0;

showCard();

return;

}

advanceTurn();

}

}

let { x, y } = squares[pos];

let { x: offsetX, y: offsetY } = playerOffsets[i];

fill(playerColors[i]);

ellipse(x + offsetX, y + offsetY, 20, 20);

}

// Display spinner result.

if (spinnerDisplay !== "") {

fill("black");

textSize(32);

text(spinnerDisplay, width / 2 - 20, height / 2);

}

// Display card (action or point) with a close "X" button.

if (actionCardVisible) {

fill(255);

rect(150, 100, 150, 150);

fill(0);

textSize(16);

text("Instructions", 180, 120);

textSize(14);

text(currentActionCard, 160, 150, 130, 90);

// Draw close "X" button.

fill(200);

rect(150 + 150 - 25, 100 + 5, 20, 20);

fill(0);

textSize(16);

text("X", 150 + 150 - 20, 100 + 20);

}

// Indicate current player's turn by color.

fill("black");

textSize(16);

text(`Turn: ${playerColors[currentPlayer]}`, 20, 370);

}

function drawGameOverScreen() {

background("lightgreen");

fill("black");

textSize(28);

textAlign(CENTER, CENTER);

text("Congratulations!", width / 2, 50);

textSize(20);

text("Leaderboard", width / 2, 90);

let leaderboard = [];

for (let i = 0; i < numPlayers; i++) {

leaderboard.push({ color: playerColors[i], score: playerScores[i] });

}

leaderboard.sort((a, b) => b.score - a.score);

textSize(18);

let startY = 130;

for (let i = 0; i < leaderboard.length; i++) {

let entry = leaderboard[i];

text(`${i + 1}. ${entry.color} - ${entry.score} points`, width / 2,
startY + i * 30);

}

textSize(16);

text("Press SPACE to restart", width / 2, height - 30);

}

function handlePlayerFinish(playerIndex) {

if (!finishedPlayers.includes(playerIndex)) {

finishedPlayers.push(playerIndex);

let finishOrder = finishedPlayers.length;

let finishPoints = [400, 300, 200, 100][finishOrder - 1] || 0;

playerScores[playerIndex] += finishPoints;

}

if (finishedPlayers.length === numPlayers) {

gameOver = true;

window.spinButton.hide();

} else {

advanceTurn();

}

}

function advanceTurn() {

actionCardVisible = false;

window.spinButton.show();

do {

currentPlayer = (currentPlayer + 1) % numPlayers;

} while (finishedPlayers.includes(currentPlayer));

if (finishedPlayers.length === numPlayers) {

window.spinButton.hide();

}

}

function setPlayers(players) {

numPlayers = players;

playerPositions.fill(0, 0, numPlayers);

playerScores = new Array(numPlayers).fill(100);

finishedPlayers = [];

gameOver = false;

window.playerButtons.forEach(button => button.hide());

window.spinButton.show();

}

function spinSpinner() {

spinnerResult = Math.floor(random(1, 7));

spinnerDisplay = spinnerResult;

totalSteps = spinnerResult;

animating = true;

animationStep = 0;

lastMoveFrame = frameCount;

setTimeout(() => spinnerDisplay = "", 1000);

}

function drawBoard() {

strokeWeight(2);

fill(246, 215, 176);

stroke(62, 103, 214);

squares.forEach((square) => {

rect(square.x, square.y, squareSize, squareSize);

});

fill("black");

textSize(16);

stopSquares.forEach(index => {

let square = squares[index];

text("STOP", square.x + 10, square.y + 30);

});

textSize(16);

text("START", 375, 85);

text("FINISH", 15, 325);

}

function showScores() {

let scoresMessage = "Scores:\n";

for (let i = 0; i < numPlayers; i++) {

scoresMessage += `${playerColors[i]}: ${playerScores[i]} points\n`;

}

alert(scoresMessage);

}

function showCard() {

if (random(1) < 0.5) {

showPointCard();

} else {

showActionCard();

}

}

function showActionCard() {

currentCardType = "action";

currentActionCard = actionCards[Math.floor(random(actionCards.length))];

currentActionEffect = currentActionCard;

actionCardVisible = true;

window.spinButton.hide();

if (currentActionEffect.includes("Switch places with another player")) {

createSwitchButtons();

}

}

function showPointCard() {

currentCardType = "point";

const pointCards = [50, 70, -30, -50, "double", "half"];

let card = pointCards[Math.floor(random(pointCards.length))];

if (card === "double") {

currentActionCard = "Point card: Double your points.";

} else if (card === "half") {

currentActionCard = "Point card: Halve your points.";

} else if (card >= 0) {

currentActionCard = "Point card: Gain " + card + " points.";

} else {

currentActionCard = "Point card: Lose " + Math.abs(card) + " points.";

}

currentPointValue = card;

actionCardVisible = true;

window.spinButton.hide();

}

function createSwitchButtons() {

switchButtons.forEach(button => button.remove());

switchButtons = [];

let buttonY = 220;

for (let i = 0; i < numPlayers; i++) {

if (i !== currentPlayer && !finishedPlayers.includes(i)) {

let button = createButton(`Switch with ${playerColors[i]}`);

button.position(160, buttonY);

button.mousePressed(() => {

[playerPositions[currentPlayer], playerPositions[i]] =

[playerPositions[i], playerPositions[currentPlayer]];

switchButtons.forEach(b => b.remove());

switchButtons = [];

if (remainingSteps > 0) {

resumeMovement();

} else {

advanceTurn();

}

});

switchButtons.push(button);

buttonY += 30;

}

}

let stayButton = createButton("Don't Switch");

stayButton.position(160, buttonY);

stayButton.mousePressed(() => {

switchButtons.forEach(b => b.remove());

switchButtons = [];

if (remainingSteps > 0) {

resumeMovement();

} else {

advanceTurn();

}

});

switchButtons.push(stayButton);

}

function handleActionEffect() {

if (currentActionEffect.includes("Move forward 2 spaces")) {

playerPositions[currentPlayer] =
Math.min(playerPositions[currentPlayer] + 2, squares.length - 1);

} else if (currentActionEffect.includes("Move backward 1 space")) {

playerPositions[currentPlayer] =
Math.max(playerPositions[currentPlayer] - 1, 0);

} else if (currentActionEffect.includes("Go back to start")) {

playerPositions[currentPlayer] = 0;

} else if (currentActionEffect.includes("Take another turn")) {

spinSpinner();

return;

}

if (remainingSteps > 0) {

resumeMovement();

} else {

advanceTurn();

}

}

function handlePointCard() {

if (currentPointValue === "double") {

playerScores[currentPlayer] *= 2;

} else if (currentPointValue === "half") {

playerScores[currentPlayer] = Math.floor(playerScores[currentPlayer] /
2);

} else {

playerScores[currentPlayer] += currentPointValue;

if (playerScores[currentPlayer] < 0) {

playerScores[currentPlayer] = 0;

}

}

if (remainingSteps > 0) {

resumeMovement();

} else {

advanceTurn();

}

}

function resumeMovement() {

animating = true;

totalSteps = remainingSteps;

animationStep = 0;

lastMoveFrame = frameCount;

remainingSteps = 0;

}

function mousePressed() {

if (actionCardVisible) {

let cardX = 150, cardY = 100, cardWidth = 150, cardHeight = 150;

let closeX = cardX + cardWidth - 25;

let closeY = cardY + 5;

let closeWidth = 20, closeHeight = 20;

if (mouseX >= closeX && mouseX <= closeX + closeWidth &&

mouseY >= closeY && mouseY <= closeY + closeHeight) {

dismissCard();

}

}

}

function dismissCard() {

actionCardVisible = false;

switchButtons.forEach(button => button.remove());

switchButtons = [];

if (currentCardType === "point") {

handlePointCard();

} else {

if (currentActionEffect.includes("Switch places with another player")) {

if (remainingSteps > 0) {

resumeMovement();

} else {

advanceTurn();

}

} else {

handleActionEffect();

}

}

}

// Restart the game when spacebar is pressed at game over.

function keyPressed() {

if (gameOver && key === ' ') {

restartGame();

}

}

function restartGame() {

// Reset game variables while keeping the same number of players.

textAlign(LEFT, CENTER);

playerPositions = new Array(numPlayers).fill(0);

playerScores = new Array(numPlayers).fill(100);

finishedPlayers = [];

currentPlayer = 0;

gameOver = false;

animating = false;

actionCardVisible = false;

remainingSteps = 0;

window.spinButton.show();

}
