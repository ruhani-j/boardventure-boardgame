**Digital Media II - 008**

**Title of Project**

**Ruhani Jindal &** Jolomi Eddi

University of Winnipeg Collegiate

**1. Introduction and Motivation - R**

This project is inspired by the game of life and other board games. The
motivation behind this game is to create an engaging experience for
people who feel bored with traditional board games or don\'t have anyone
to play with. Our game aims to provide a fun, interactive experience
that can be played solo, making it accessible to everyone, whether they
have friends to play with or not. Additionally, the game will feature
interactive pop-ups that enhance the gameplay experience, adding
excitement and unpredictability to each turn.

**2. Background and Related Work - J**

**a. First Related Work:** Game of Life

**b. Second Related Work/Inspiration:** Monopoly

**3. Problem Statement - R**

Our goal is to design and develop a fun, engaging board game that
targets individuals aged 7-19. We aim to deliver a game that is simple
to understand yet filled with enjoyable surprises, challenges, and
interactive elements to keep players entertained during their free time.

**4. Proposed Solution Strategy and Implementation - J**

// The setup and draw functions will draw the game board and background.
We want a sandy colored game board and a light blue background.

// We still need to implement:

// 1. Player animation and refinement. We want the players, after
rolling the die/ spinning the spinner to actually have an animation of
moving the appropriate number of spaces in accordance with the number
they spun/rolled.

// 2. We want a

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

// make action cards - approx. 10 of them like game of life action cards

// then those action cards need logic to work

// have the players current money total in a designated place

// repeat until game ends

**5. Resource Requirements - J**

Reference materials

- Empty game board canvas found online.

**Add more stuff plz**

**a. Development Tools:**

- Programming Language: JavaScript

- Integrated Development Environment (IDE): We can use Visual Studio
  Code, PyCharm, Thonny, or any text editor that supports Python.

- Version Control: GitHub will be used for version control, allowing us
  to collaborate effectively and track changes made by each member.

- Program: P5js, used as the website for us to make our code.

**b. Hardware:**

- A computer/laptop for each team member with Python installed.

- Access to the internet for research and collaboration.

**c. Additional Learning Resources**

- We may need something like YouTube or some other learning resources as
  our current knowledge may not be sufficient for this project.

- The use of Google or other such browsers to find additional
  references.

**6. Timeline of Activities - R**

+------------------------------+----------------+------------+------------+
| **Activity**                 | **Programmer** | **Start    | **End      |
|                              |                | Time**     | Time**     |
+:============================:+================+============+============+
| Create the game board and    | Jolomi         | January 16 | January 21 |
| background elements          |                |            |            |
| (sandy-colored board, light  |                |            |            |
| blue background)             |                |            |            |
+------------------------------+----------------+------------+------------+
| Design and implement players | Ruhani         | January 16 | January 21 |
| and their starting positions |                |            |            |
+------------------------------+----------------+------------+------------+
| Develop the spinner          | Ruhani         | January 16 | January 21 |
| mechanics and link them to   |                |            |            |
| player movement              |                |            |            |
+------------------------------+----------------+------------+------------+
| Implement player animations  | Jolomi         | January 21 | January 30 |
| for movement on the board    |                |            |            |
+------------------------------+----------------+------------+------------+
| Set up stop signs on the     | Jolomi         | January 21 | January 30 |
| board where players will     |                |            |            |
| land and stop                |                |            |            |
+------------------------------+----------------+------------+------------+
| Integrate background music   | Jolomi         | January 21 | February 4 |
| and sound effects for better |                |            |            |
| immersion                    |                |            |            |
+------------------------------+----------------+------------+------------+
| Design and implement the     | Ruhani         | January 23 | February   |
| instructions screen that     |                |            | 11         |
| appears at the beginning of  |                |            |            |
| the game                     |                |            |            |
+------------------------------+----------------+------------+------------+
| Make an animation/display    | Jolomi         | January 28 | February   |
| for the end of the game      |                |            | 11         |
+------------------------------+----------------+------------+------------+
| Develop the animation for    | Ruhani         | January 30 | February   |
| action cards, ensuring they  |                |            | 18         |
| are randomized and do not    |                |            |            |
| repeat                       |                |            |            |
+------------------------------+----------------+------------+------------+
| Design visually appealing    | Jolomi         | January 30 | February   |
| action cards and their       |                |            | 25         |
| mechanics                    |                |            |            |
+------------------------------+----------------+------------+------------+
| Make action cards, with good | Both           | February 6 | March 4    |
| design, and fun activities   |                |            |            |
+------------------------------+----------------+------------+------------+
| Design and integrate         | Both of us     | February   | March 11   |
| mini-games that will appear  | will make 1-2  | 13         |            |
| within the action cards      | each           |            |            |
+------------------------------+----------------+------------+------------+
| User testing and debugging   |   ------       |   -------  | March 18   |
| (playtesting to ensure       |   Both         |   March    |            |
| smooth gameplay and fix      |   ------       |   11       |            |
| issues)                      |                |   -------  |            |
|                              |   ------       |            |            |
|                              |                |   -------  |            |
|                              |                |            |            |
|                              |                |   --       |            |
|                              |                |            |            |
|                              |                |   --       |            |
+------------------------------+----------------+------------+------------+
| Final polish of game design, | Both           | March 18   | March 25   |
| UI, and UX improvements      |                |            |            |
+------------------------------+----------------+------------+------------+
| Game launch and presentation | Both           | March 18   | March 25   |
| preparation                  |                |            |            |
+------------------------------+----------------+------------+------------+

**7. Expected Outcome - R**

We expect the result of our project to be a fun multiplayer game.

By the end of the project, we expect to have a fully functional board
game where:

- **The Game Logic is Functional:** The players should be able to play a
  full game against each other. They will spin the spinner and work
  through the action cards to gain points. The player with most points
  at the end will win.

- **Fun Minigames through Action Cards:** Every time an action card pops
  up, there will be a fun activity the players can play and earn points
  from.

- **Valid Gameplay and Win Condition**: The game will ensure that the
  game ends when all players reach the end of the board. Then, the
  statistics will be shown and there will be a celebratory page once the
  game is complete with an option to restart.

- **User Interface**: A simple and good-looking game experience

By implementing this project, we aim to demonstrate our understanding of
what we have learned in our DMII class.

**External Materials - J**

Adobe Photoshop

Extra mini games like snake
