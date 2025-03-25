**Digital Media II - 008**

**Boardventure: Spin, Play, Win**

**Game Title: BoardRush**

*BoardCraft Creations*

**Ruhani Jindal &** Jolomi Eddi

University of Winnipeg Collegiate

**1. Introduction and Motivation - R**

This project is inspired by the game of life and other board games we
enjoy playing. The motivation behind this game is to create a fun online
game for people who feel bored with traditional board games. Our game
aims to provide a fun experience that is accessible to everyone.
Additionally, the game will feature interactive pop-ups with mini games
that enhance the gameplay experience, adding excitement and
unpredictability.

**2. Background and Related Work - J**

**a. First Related Work:** Game of Life

The Game of Life serves as a strong inspiration for this project due to
its structured board game mechanics, player progression system, and
emphasis on chance-based movement combined with strategic
decision-making. Like *The Game of Life*, our game involves players
taking turns, spinning a wheel to determine movement, and encountering
spaces that impact their journey.

One key similarity is the presence of **event-based spaces**. In *The
Game of Life*, players land on spaces that trigger life events such as
career changes, financial gains or losses, and other milestone moments.
Similarly, our game will feature **action card spaces**, where players
will engage in mini-games before proceeding. These action spaces
introduce unpredictability and variation, making each playthrough
unique.

Another important parallel is the **currency or point-based progression
system**. In *The Game of Life*, financial success is a major factor in
determining the winner. Likewise, in our game, players will earn points
or in-game currency based on their performance in mini-games. Rather
than simply racing to the finish, success will depend on how well
players perform throughout the game.

Additionally, *The Game of Life* emphasizes **a blend of luck and player
choice**. While movement is determined by chance (via the spinner), the
outcomes of life events and financial decisions impact the final
standings. Our game adopts a similar structure, where luck influences
movement, but skill in mini-games determines overall success.

By drawing inspiration from *The Game of Life's* turn-based structure,
chance-based movement, and event-driven spaces, our game aims to provide
an engaging and interactive experience while introducing dynamic
mini-games and animations to set it apart.

**b. Second Related Work/Inspiration:** Monopoly

Monopoly serves as a key inspiration for this project due to its
structured board game mechanics, player progression system, and
strategic decision-making elements. Like Monopoly, our game involves
players taking turns, moving across a game board based on a randomized
movement mechanic (in our case, a spinning wheel rather than dice), and
encountering specific spaces that impact their progress.

One of the most significant similarities is the presence of **action
spaces**---in Monopoly, players may land on properties, Chance or
Community Chest cards, or other special tiles that require them to take
an action. Similarly, in our game, action cards will introduce unique
mini-games that players must complete, adding an element of
unpredictability and engagement.

Another parallel is the **currency system**. In Monopoly, players
accumulate and manage money throughout the game, which determines their
success. In our game, players will earn in-game currency or points based
on their performance in mini-games, influencing the final outcome. This
mechanic ensures that the winner is not simply the first player to reach
the final tile but rather the one who has earned the most through skill
and strategy.

Additionally, Monopoly's **balance of luck and strategy** is reflected
in our design. While movement is randomized, strategic decisions---such
as how well a player performs in mini-games---will significantly impact
their success. This blend of chance and skill makes for an engaging and
competitive gameplay experience.

By drawing inspiration from Monopoly's turn-based mechanics, action
spaces, and money-based scoring system, our game seeks to create an
exciting and interactive experience while introducing fresh elements
such as animated movement and mini-games to differentiate itself.

**3. Problem Statement - R**

Our goal is to design and develop a fun, engaging board game that
targets individuals aged 7-19. We aim to deliver a game that is simple
to understand yet filled with enjoyable surprises, challenges, and
interactive elements to keep players entertained during their free time.

**4. Proposed Solution Strategy and Implementation - J**

**a. Player Movement Animation**

To enhance the gameplay experience, an animation system will be
implemented to visually represent player movement across the board. When
a player spins the wheel, their game piece will move step-by-step across
the appropriate number of spaces, ensuring a smooth and immersive
transition.

**b. Action Cards & Mini-Games**

Certain spaces on the board will feature action cards that trigger
unique mini games. When a player lands on one of these spaces, they must
complete the associated mini-game before proceeding. These mini games
will serve as a core gameplay mechanic, adding variety and strategy to
the experience.

**c. Currency & Score Tracking System**

A point or currency system will be implemented to reward players based
on their mini-game performance. This system will allow players to
accumulate points, which will play a key role in determining the game's
winner.

**d. Game Conclusion & Winner Determination**

The game will conclude when all players reach the final tile on the
board. At this stage, the player with the highest accumulated score or
currency will be declared the winner. This scoring system ensures that
success is based on both progress and performance throughout the
game.le.

**5. Resource Requirements - J**

**a. Development Tools:**

- Programming Language: JavaScript

- Program: P5js, used as the website for us to make our code.

**b. Hardware:**

- A computer/laptop for each team member.

- Access to the internet for research and collaboration.

**c. Additional Learning Resources**

- We may need something like YouTube or some other learning resources as
  our current knowledge may not be sufficient for this project.

- Google or other such search engines may be needed to find additional
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
