![GA Logo](https://raw.githubusercontent.com/karinas98/MusicLibraryProject/main/469f976e-1432-11e5-8199-6ac91363302b.png) 

# Pac Man Project

https://karinas98.github.io/
## Project Overview

My first game concept that I have developed so far. It was built using HTML, CSS and Javascript. I have decided to do Pac Man because it would highlight well my skills and give me the opportunity to improve as I learn more. Users can control the game using their keyboard arrows and reset the game if they wish to start over.  

## Tech Used
HTML | CSS | Javascript


## Planning and Sketching

Before starting my Pac Man game, I wanted to plan how I was going to figure out each element. I wanted to visualize how the grid would look like, create a brainstorming section for ideas, add in what design elements I wanted to incorporate and then plan out a step by step list of what I needed to accomplish.


![](https://github.com/karinas98/karinas98.github.io/blob/main/Screenshot%202023-01-23%20at%2017.15.56.png)


## Roadmap

The first two days were dedicated to researching, developing, and designing the Pac-Man Grid. It was important for me to start strong with a good-looking starting point to then add in my elements and logic. I decided to create my grid by creating an array and giving each square a number from 0 to 4. By doing so, I am able to implement border limitations, power pellets and the ghost lair much easier. To display, I can then loop through the grid and add styling to differentiate empty squares and wall limitations. 

![](https://github.com/karinas98/pacman_project1/blob/228e5405da4a89a4364634bc6a7858f2a9e187d0/Screenshot%202023-05-15%20at%2018.39.58.png)

![](https://github.com/karinas98/pacman_project1/blob/ea27fb3e1a8921a263a2665022b7fd60f4dd5715/Screenshot%202023-05-15%20at%2018.40.13.png)

Once my grid was complete and I researched how to approach the project and logic, I started creating my Pac-Man and the standard functionalities. I created a function using if/else statements where I can specify the movement of Pac-Man when a keyboard arrow is pressed and added restrictions for the Pac-Man to differentiate wall and empty squares. 

![](https://github.com/karinas98/pacman_project1/blob/7b5702f20467c03086c7853f240992490c24ba6e/Screenshot%202023-05-16%20at%2014.18.23.png)

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

## Project Screenshots

![excalidraw](https://raw.githubusercontent.com/karinas98/karinas98.github.io/main/Screenshot%202023-01-23%20at%2018.10.07.png)





## Featured Code - Ghost Creating & Movement

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


//Ghost Movement
//Ghosts Movement
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


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)]()
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/karina-savoie-21b40621a/)



