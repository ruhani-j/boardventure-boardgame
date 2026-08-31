# Boardventure: Spin, Play, Win

A multiplayer browser-based board game built with [p5.js](https://p5js.org). Players take turns spinning a wheel, moving across the board, and drawing action or point cards that shake up the standings. The player with the most points when everyone reaches the finish wins.

## Gameplay

- **2–4 players**, each represented by a coloured piece
- Everyone starts with **100 points**
- On your turn, spin the spinner — your piece animates across the board step by step
- Land on a **STOP** square to draw a card:
  - **Action Cards** — move forward or backward, switch places with another player, go back to start, or take another turn
  - **Point Cards** — gain or lose points, double your score, or halve it (score never drops below zero)
- Reaching the **FINISH** square earns bonus points based on finish order: 400 / 300 / 200 / 100
- Once all players finish, a **leaderboard** shows the final standings
- Press **Space** to restart with the same players

## Tech

- [p5.js](https://p5js.org) — rendering, animation, and input
- Vanilla JavaScript — all game logic

## How to Run

Open `sketch.js` in the [p5.js web editor](https://editor.p5js.org) or run it with a local server.

## Made By

Ruhani Jindal & Jolomi Eddi

Built as our Digital Media II final project for the 2024–2025 school year.
