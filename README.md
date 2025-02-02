# Arcane Quiz Game 🎭🔥  

## Overview  
The **Arcane Quiz Game** is an interactive trivia game designed for fans of *Arcane*, the animated series set in the *League of Legends* universe. Players select a **character** (character-based category) and answer **20 challenging questions** about that nation’s lore, characters, and events. The game is immersive, featuring **dynamic UI effects**, **animated feedback**, and a **score tracking system**.

## Features  
◈ **Nine Characters to Choose From**:  
   - Arcane  
   - Viktor  
   - Jinx Nation  
   - Vi Nation  
   - Jayce Nation  
   - Mel Nation  
   - Ekko Nation  
   - Caitlyn Nation  
   - Ambessa Nation  

◈  **Immersive UI & Effects**  
   - Video background
   - Game Card Design 
   - Answer feedback: *correct answers glow blue, incorrect glow purple*  
   - Progress bar for quiz tracking  

◈ **No Skipping or Returning to Questions**  
   - Forces players to **answer carefully**  
   - Prevents cheating by **not revealing upcoming questions**  

◈ **Scoreboard with LocalStorage Tracking**  
   - Keeps a **record of scores** for each nation  
   - Accessible anytime via a **floating scoreboard button**  

◈ **Victory Messages Based on Performance**  
   - **Perfect Score (20/20)** → *"Congratulations, You Stand Among Legends!!!"*  
   - **15-19 Correct** → *"You know [character] better than anyone!"*  
   - **Below 15** → *"Do you even know [character]?"*  

◈ **Traitor Mechanic**  
   - If a player selects **"No"** to "Are you a true Arcane fan?"  
   - Card reveals *Maddie Nolen* and **"Traitor!!!"**  
   - Can restart via **Goodbye button** or browser reload

## How to Play  
1. Click **“Yes”** to start. If you click “No,” the game will expose your betrayal.  
2. Choose a **character** (Arcane character category).  
3. Read the **instructions**, take a moment of silence for Isha, and press **Start Quiz**.  
4. Answer **20 questions** without skipping or going back.  
5. View your **results and scoreboard** at the end.  

## Technologies Used  
- **HTML**: Structure of the game.  
- **CSS**: Custom styles, animations, and UI design.  
- **JavaScript**: Handles quiz logic, animations, and localStorage tracking.  

## Installation & Setup  
1. Clone the repository:  
```bash
git clone https://github.com/yourusername/arcane-quiz-game.git
```
2. Navigate to the project folder:  
```bash
cd arcane-quiz-game
```
3. Open `index.html` in your browser.  

## Customization  
◈ **Change Background Video:** Replace `your-video.mp4` inside the `<video>` tag in `index.html`.  

◈ **Update Questions:** Modify the `questions` object inside `script.js` to add or edit trivia.  

◈ **Adjust UI Effects:** Modify the animations inside `styles.css`.  

## Future Improvements  
◈ **More Characters & Questions**  
◈ **Multiplayer Mode**  
◈ **Leaderboard & Time-based Challenge Mode**  

## Credits  
- **Arcane by Riot Games** for inspiration.  
- **Nina Nkhwashu** – Developer.  

◈ *"Are you a true Arcane fan? Let's find out!"* ◈ 
