Digital Media II -- 008

Final Project

**Boardventure: Spin, Play, Win**

**Game Title: BoardRush**

*BoardCraft Creations*

**Jolomi Eddi**

**and**

**Ruhani Jindal**

University of Winnipeg Collegiate

Final Project Report

1.  **Introduction and Motivation**

Change future tense to past tense throughout report

This project is inspired by the game of life and other board games we
enjoy playing. The motivation behind this game was to create a fun
online game for people who feel bored with traditional board games. Our
game aims to provide a fun experience that is accessible to everyone.
The game is at a good level for us in terms of the coding and is
aesthetically pleasing along with being functional.

2.  **Background and Related Works**

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

3.  **Problem Statement**

Our goal was to design and develop a fun, engaging board game that
targets individuals aged 7-19. We aim to deliver a game that is simple
to understand yet filled with enjoyable surprises, challenges, and
interactive elements to keep players entertained during their free time.

4.  **Solution Strategy and Implementation**

Remove the whole thing with minigames everywhere

Add how we implemented it like what steps we took

**a. Player Movement Animation**

To enhance the gameplay experience, an animation system has been
implemented to visually represent player movement across the board. When
a player spins the wheel, their game piece moves step-by-step across the
appropriate number of spaces, ensuring a smooth and immersive
transition.

**b. Action Cards**

Certain spaces on the board will feature action cards with unique
actions. When a player lands on one of these spaces, they must complete
the associated mini game before proceeding. These mini games will serve
as a core gameplay mechanic, adding variety and strategy to the
experience.

**c. Currency & Score Tracking System**

A point or currency system will be implemented to reward players based
on their mini-game performance. This system will allow players to
accumulate points, which will play a key role in determining the game's
winner.

**d. Game Conclusion & Winner Determination**

The game will conclude when all players reach the final tile on the
board. At this stage, the player with the highest accumulated score or
currency will be declared the winner. This scoring system ensures that
success is based on both progress and performance throughout the game.

add more stuff but I think these can be good subsections

these are the main components of what we did \^

5.  **Experimental Framework**

How did we approach the problem

How did we try to split up tasks vs how we ended up doing it

Debugging took a lot of our time

6.  **Timeline of Activities**

Change this to make it more accurate to what we did

+-----------------------------------------+----------------+------------+
| **Activity**                            | **Programmer** | **Start    |
|                                         |                | Time**     |
+:=======================================:+================+============+
| Create the game board and background    | Jolomi         | January 16 |
| elements (sandy-colored board, light    |                |            |
| blue background)                        |                |            |
+-----------------------------------------+----------------+------------+
| Design and implement players and their  | Ruhani         | January 16 |
| starting positions                      |                |            |
+-----------------------------------------+----------------+------------+
| Develop the spinner mechanics and link  | Ruhani         | January 16 |
| them to player movement                 |                |            |
+-----------------------------------------+----------------+------------+
| Implement player animations for         | Jolomi         | January 21 |
| movement on the board                   |                |            |
+-----------------------------------------+----------------+------------+
| Set up stop signs on the board where    | Jolomi         | January 21 |
| players will land and stop              |                |            |
+-----------------------------------------+----------------+------------+
| Integrate background music and sound    | Jolomi         | January 21 |
| effects for better immersion            |                |            |
+-----------------------------------------+----------------+------------+
| Design and implement the instructions   | Ruhani         | January 23 |
| screen that appears at the beginning of |                |            |
| the game                                |                |            |
+-----------------------------------------+----------------+------------+
| Make an animation/display for the end   | Jolomi         | January 28 |
| of the game                             |                |            |
+-----------------------------------------+----------------+------------+
| Develop the animation for action cards, | Ruhani         | January 30 |
| ensuring they are randomized and do not |                |            |
| repeat                                  |                |            |
+-----------------------------------------+----------------+------------+
| Design visually appealing action cards  | Jolomi         | January 30 |
| and their mechanics                     |                |            |
+-----------------------------------------+----------------+------------+
| Make action cards, with good design,    | Both           | February 6 |
| and fun activities                      |                |            |
+-----------------------------------------+----------------+------------+
| Design and integrate mini-games that    | Both of us     | February   |
| will appear within the action cards     | will make 1-2  | 13         |
|                                         | each           |            |
+-----------------------------------------+----------------+------------+
| User testing and debugging (playtesting |   ------       |   -------  |
| to ensure smooth gameplay and fix       |   Both         |   March    |
| issues)                                 |   ------       |   11       |
|                                         |                |   -------  |
|                                         |   ------       |            |
|                                         |                |   -------  |
|                                         |                |            |
|                                         |                |   --       |
|                                         |                |            |
|                                         |                |   --       |
+-----------------------------------------+----------------+------------+
| Final polish of game design, UI, and UX | Both           | March 18   |
| improvements                            |                |            |
+-----------------------------------------+----------------+------------+
| Game launch and presentation            | Both           | March 18   |
| preparation                             |                |            |
+-----------------------------------------+----------------+------------+
| **Activity**                            | **Programmer** | **Start    |
|                                         |                | Time**     |
+-----------------------------------------+----------------+------------+
| Create the game board and background    | Jolomi         | January 16 |
| elements (sandy-colored board, light    |                |            |
| blue background)                        |                |            |
+-----------------------------------------+----------------+------------+

7.  **Results**

We have made a fully functional board game where:

- **The Game Logic is Functional:** The players should be able to play a
  full game against each other. They will spin the spinner and work
  through the action cards to gain points. The player with most points
  at the end will win.

- **Advancement through Action Cards:** Every time an action card pops
  up, there will be a fun activity the players can play and earn points
  from.

- **Valid Gameplay and Win Condition**: The game will ensure that the
  game ends when all players reach the end of the board. Then, the
  statistics will be shown and there will be a celebratory page once the
  game is complete with an option to restart.

- **User Interface**: A simple and good-looking game experience

By implementing this project, we have demonstrated our understanding of
what we have learned in our DMII class.

8.  **Conclusions and Future Work**

Options for our future work are more games

We achieved a functioning board game

The introduction, what we wanted to achieve vs what we did achieve

9.  **External Materials (optional; if you use any)**

**a. Development Tools:**

- Programming Language: JavaScript

- Program: P5js, used as the website for us to make our code.

**b. Hardware:**

- A computer/laptop for each team member with Python installed.

- Access to the internet for research and collaboration.

**c. Additional Learning Resources**

- We used learning resources like YouTube as our current knowledge may
  not be sufficient for this project.

**10. Appendix (Provide the code developed for the project)**

**Insert code here:**
