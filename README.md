![GA Logo](https://raw.githubusercontent.com/karinas98/MusicLibraryProject/main/469f976e-1432-11e5-8199-6ac91363302b.png) 

# Pac Man Project
Pac Man is a classic arcade game from the 80s. The player aims to eat all the food in a maze whilst being hunted by ghosts. If the player eats special flashing food the ghosts start to flash and can now be captured by the player, sending them back to their holding pen, from where they can once again start to hunt the player. The aim is to achieve the highest score possible before being killed by the ghosts.

## Brief Requirements 
The player should be able to clear at least one board.
The player's score should be displayed at the end of the game

## Deployment Link 
pacman-project1.netlify.app

## Project Overview
My first game concept that I have developed so far. It was built using HTML, CSS and JavaScript. I have decided to do Pac-Man because it would highlight my skills well and allow me to improve as I learn more. Users can control the game using their keyboard arrows and reset the game if they wish to start over. 


## Tech Used
HTML | CSS | Javascript

## Timeline
1 Week - Solo

## Planning and Sketching

Before starting my Pac-Man game, I wanted to plan how I was going to figure out each element. I wanted to visualize how the grid would look, create a brainstorming section for ideas, add in what design elements I wanted to incorporate, and then plan out a step-by-step list of what I needed to accomplish.

![](https://github.com/karinas98/karinas98.github.io/blob/main/Screenshot%202023-01-23%20at%2017.15.56.png)


## Roadmap

The first two days were dedicated to researching, developing, and designing the Pac-Man Grid. It was important for me to start strong with a good-looking starting point to then add in my elements and logic. I decided to create my grid by creating an array and giving each square a number from 0 to 4. By doing so, I am able to implement border limitations, power pellets and the ghost lair much easier. To display, I can then loop through the grid and add styling to differentiate empty squares and wall limitations. 
```javascript
//Array of Number for Meaning of each squares
//0 - PacDots
//1 - Wall
//2 - Ghost Lair
//3 - Empty
//4 Power Pellets

const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 4, 0, 0,
  0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1,
  0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0,
  0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 4, 0, 1, 3, 3, 1, 1,
  1, 1, 1, 3, 3, 1, 4, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 3, 1, 1, 2, 2, 2, 1, 1,
  3, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 2, 2, 2, 2, 2, 1, 0, 1,
  0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
  1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
  0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1,
  1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0,
  1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0,
  0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];
```
```javascript
function createGrid() {
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement("div");
    document.querySelector(".grid").appendChild(square);
    squares.push(square);

    if (layout[i] === 0) {
      squares[i].classList.add("pac-dot");
    } else if (layout[i] === 1) {
      squares[i].classList.add("wall");
    } else if (layout[i] === 2) {
      squares[i].classList.add("ghost-lair");
    } else if (layout[i] === 4) {
      squares[i].classList.add("power-pellet");
    }
  }
}
createGrid();
```


Once my grid was complete and I researched how to approach the project and logic, I started creating my Pac-Man and the standard functionalities. I created a function using if/else statements where I can specify the movement of Pac-Man when a keyboard arrow is pressed and added restrictions for the Pac-Man to differentiate wall and empty squares. 

```javascript
function movePacman(event) {
  squares[pacmanCurrentIndex].classList.remove("pacman");
  squares[pacmanCurrentIndex].innerHTML = "";
  const x = pacmanCurrentIndex % width;

  if (event.code === "ArrowLeft") {
    if (
      x !== 0 &&
      !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
      !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
    ) {
      pacmanCurrentIndex -= 1;
    }
  } else if (event.code === "ArrowRight") {
    if (
      x < width - 1 &&
      !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
      !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
    ) {
      pacmanCurrentIndex += 1;
    }
  } else if (event.code === "ArrowUp") {
    if (
      pacmanCurrentIndex - height >= 0 &&
      !squares[pacmanCurrentIndex - height].classList.contains("wall") &&
      !squares[pacmanCurrentIndex - height].classList.contains("ghost-lair")
    ) {
      pacmanCurrentIndex -= height;
    }
  } else if (event.code === "ArrowDown") {
    if (
      pacmanCurrentIndex + height < squareNum &&
      !squares[pacmanCurrentIndex + height].classList.contains("wall") &&
      !squares[pacmanCurrentIndex + height].classList.contains("ghost-lair")
    ) {
      pacmanCurrentIndex += height;
    }
  }

```

Once that was done and the user had a working keyboard movement, I started working on the ghosts. I decided to attempt working based on a constructor template to then create all 4 ghosts with the forEach loop and integrate color to identify each one. 

Once all the main elements were there, that is when I started working on other functionalities such as the Power Pellets, Scared Ghosts, Eating, increasing Points and winning/losing logic. Because I had used numbers identifying each square of the grid, I could easily identify the position of the Pac-Man and the Ghosts using the “.contains” functionality and implement them with if statements whenever they’ve touched one another or reached a power pellet. 
```javascript
function pacDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
    score++;
    dotsToCatch.length -= 1;
    scoreDisplay.innerHTML = score;
  }
}
```
```javascript
function eatPowerPellet() {
  if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
    score += 50;
    scoreDisplay.innerHTML = score;
    squares[pacmanCurrentIndex].classList.remove("power-pellet");
    ghosts.forEach((ghost) => {
      ghost.isScared = true;
      squares[ghost.currentIndex].classList.add("scared-ghost");
    });
    setTimeout(unScaredGhosts, 10000);
  }
}
```
The last four days were about adding elements to make the game a little better. I've added a reset button, audio for the intro of the game, and animation for the Pacman.


## Project Screenshots

![excalidraw](https://raw.githubusercontent.com/karinas98/karinas98.github.io/main/Screenshot%202023-01-23%20at%2018.10.07.png)



## Featured Code - Ghost Creating & Movement
The Ghosts Template and Construction was something that I am proud of and where I have the chance to learn something new. By using this constructor, I am drying up my code a lot more than if I had created each ghost individually. And so, by creating the ghosts in this way I can use the forEach loop to create each one using the same class and array. 

```javascript
//create Ghost
class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.timerId = NaN;
    this.isScared = false;
  }
}
ghosts = [
  new Ghost("inky", 227, 250),
  new Ghost("blinky", 226, 400),
  new Ghost("pinky", 229, 300),
  new Ghost("clyde", 228, 500),
];

```

The ghost movement was challenging but it got me out of my comfort zone and gave me a better understanding of JavaScript. I decided to use the Math.random function to have them move around randomly around the grid while using if statements to establish the limitations. My next challenge would be to create specific functionalities to have each of them chase Pac-Man.

```javascript
function moveGhost(ghost) {
  const directions = [-1, +1, height, -height];
  let direction = directions[Math.floor(Math.random() * directions.length)];

  ghost.timerId = setInterval(function () {
    if (
      !squares[ghost.currentIndex + direction].classList.contains("wall") &&
      !squares[ghost.currentIndex + direction].classList.contains("ghost")
    ) {
      squares[ghost.currentIndex].classList.remove(
        ghost.className,
        "ghost",
        "scared-ghost"
      );
      ghost.currentIndex += direction;
      squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add("scared-ghost");
      }
    } else {
      direction = directions[Math.floor(Math.random() * directions.length)];
    }

    checkwin();
    checkGameOver();
  }, 1000);
}
```
## Key Learnings
This project is where I learn the concept of JavaScript. It was my first experience testing out the code and putting into practice what I had learned. It made me aware of what coding is about and what it is capable of. It made me think of all the opportunities that one may have to improve their skills in programming. Project management and Time Management were also key to presenting a final game within the timeline that was had. 

## Bugs
One of the bugs that needs fixing is that since the ghosts do not have specific patterns of movement, sometimes they get stuck in the ghost lair and it can take some time before they get into the board.

## Future Improvements
I would like to add in more styling for the ghost to make them seem more realistic. 
I would also add a feature for the PacMan to pass from one side to the other through the limits of the board. Also, I would program each Ghost to follow a path to chase the PacMan instead of doing a random route.
 

## 🔗 Links
[![[portfolio](http://karinasavoie.com/)](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)]()

[![linkedin](https://www.linkedin.com/in/karina-savoie/)



