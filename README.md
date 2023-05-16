![GA Logo](https://raw.githubusercontent.com/karinas98/MusicLibraryProject/main/469f976e-1432-11e5-8199-6ac91363302b.png) 

### Pac Man Project

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

![](https://github.com/karinas98/karinas98.github.io/blob/main/Screenshot%202023-01-23%20at%2017.15.56.png)

## Project Screenshots

![excalidraw](https://raw.githubusercontent.com/karinas98/karinas98.github.io/main/Screenshot%202023-01-23%20at%2017.15.56.png)

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



