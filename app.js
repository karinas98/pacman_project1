const grid = document.querySelector(".grid");
const scoreDisplay = document.getElementById("score");
const gameOver = document.querySelector(".game-over");
const win = document.querySelector(".win");
let score = 0;
width = 24;
height = 24;
const squareNum = width * height;
const squares = [];
let dotsToCatch = [];

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

dotsToCatch = layout.filter(function (num) {
  return num === 0;
});

//Creation of the Grid
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

//

//Starting position of PacMan
let pacmanCurrentIndex = 401;

squares[pacmanCurrentIndex].classList.add("pacman");
const pacmanMouth = document.createElement("div");
squares[pacmanCurrentIndex].appendChild(pacmanMouth);
pacmanMouth.classList.add("pacman-mouth");

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

  eatPowerPellet();
  pacDotEaten();
  squares[pacmanCurrentIndex].classList.remove("pac-dot");
  squares[pacmanCurrentIndex].classList.add("pacman");
  squares[pacmanCurrentIndex].appendChild(pacmanMouth);

  ghosts.forEach(eatGhost);
}
eatPowerPellet();
checkGameOver();
checkwin();
document.addEventListener("keydown", movePacman);

//Score when eating food dots & power pellets
function pacDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
    score++;
    dotsToCatch.length -= 1;
    scoreDisplay.innerHTML = score;
  }
}

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
//Make Scared Ghost Stop
function unScaredGhosts() {
  ghosts.forEach((ghost) => (ghost.isScared = false));
  console.log("Interval Finished");
}

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

ghosts.forEach((ghost) => {
  squares[ghost.currentIndex].classList.add(ghost.className);
  squares[ghost.currentIndex].classList.add("ghost");
});

ghosts.forEach((ghost) => moveGhost(ghost));

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
//Eat Ghost
function eatGhost(ghost) {
  if (
    ghost.isScared &&
    squares[ghost.currentIndex].classList.contains("pacman")
  ) {
    console.log("Set ghost index to start index");
    squares[ghost.currentIndex].classList.remove(
      ghost.className,
      "ghost",
      "scared-ghost"
    );
    ghost.currentIndex = ghost.startIndex;
    score += 200;
    scoreDisplay.innerHTML = score;
    squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
  }
}
dotsToCatch.length = 198;
///
//Check for GameOver
function checkGameOver() {
  if (
    squares[pacmanCurrentIndex].classList.contains("ghost") &&
    !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
  ) {
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    document.removeEventListener("keydown", movePacman);
    gameOver.innerHTML = "GAME OVER!";
    document.querySelector(".game-over").style.display = "block";
  }
}
//Check for Win
function checkwin() {
  if (score >= 198 && dotsToCatch.length === 0) {
    win.innerHTML = "WINNER";
    document.querySelector(".win").style.display = "block";
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    document.removeEventListener("keydown", movePacman);
  }
}

// Reset Game
const resetGame = document.getElementById("reset");
function resetButton() {
  location.reload();
}
resetGame.addEventListener("click", resetButton);

//Audio Starter sound
const pacSound = document.querySelector("#audio");
pacSound.play();
