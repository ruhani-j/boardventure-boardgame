function setup() {

createCanvas(450, 400);

}

function draw() {

background('skyblue');

// make grid lines - sky blueish background and grid lines darker blue

// sandy beige pathway with red stop signs

// Grid layout (for visualizing the board)

strokeWeight(2);

fill(246, 215, 176); // Sandy beige pathway color

stroke(62, 103, 214); // Darker blue for grid lines

// Draw grid squares (6x6 grid)

square(370, 50, 60);

square(310, 50, 60);

square(250, 50, 60);

square(190, 50, 60);

square(130, 50, 60);

square(70, 50, 60);

square(10, 50, 60);

square(10, 110, 60);

square(10, 170, 60);

square(70, 170, 60);

square(130, 170, 60);

square(190, 170, 60);

square(250, 170, 60);

square(310, 170, 60);

square(370, 170, 60);

square(370, 230, 60);

square(370, 290, 60);

square(310, 290, 60);

square(250, 290, 60);

square(190, 290, 60);

square(130, 290, 60);

square(70, 290, 60);

square(10, 290, 60);

// Add player markers, colors, and more gameplay elements here later.

// Text for "START" and "FINISH"

noStroke();

fill('black');

text('START', 380, 85);

text('FINISH', 20, 325);

// Additional game mechanics and player actions will be added here
later.

}

// The setup and draw functions currently handle the game board
rendering.

// We still need to implement:

// 1. Players and their movement

// 2. Random spinners

// 3. Action cards with logic (similar to Life game cards)

// 4. Money tracking for players

// 5. Game-ending conditions

// Jolomi:

// make players

// background music

// Ruhani:

// make logic for random spinners

// when they enter the game, prompt how many players with buttons

// when they spin make the player move that many spaces

// when they land on a space, make action cards pop up

// make action cards - approx 10 of them similar to game of life action
cards

// then those action cards need logic to work

// have the players current money total in a designated place

// repeat until game ends
