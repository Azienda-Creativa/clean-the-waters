// TO DO LIST

// add functionality to start and play-again buttons
// design a Simple and Fun UI
// implement google fonts
// able to drag the player by mouse with a slow-down effect - like swimming underwater
// able to collect and count points won and lost
// add water sound
// add score sound
// increse handicap with time
// game over screen

const gameBoard = document.querySelector("#game-board")
const ctx = gameBoard.getContext("2d")

let currentGame
let currentPlayer
let score

let canvasPos = getPosition(gameBoard)
let mouseX = 0
let mouseY = 0
let sqSize = 100
let xPos = 0
let yPos = 0
let dX = 0
let dY = 0

window.addEventListener("mousemove", setMousePosition, false)

function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x
  mouseY = e.clientY - canvasPos.y
}

function animate() {
  dX = mouseX - xPos
  dY = mouseY - yPos

  xPos += dX / 500
  yPos += dY / 500

  ctx.clearRect(0, 0, gameBoard.width, gameBoard.height)

  ctx.fillStyle = "#00CCFF"
  ctx.fillRect(xPos - sqSize / 2, yPos - sqSize / 2, sqSize, sqSize)

  requestAnimationFrame(animate)
}
animate()

// deal with the page getting resized or scrolled
window.addEventListener("scroll", updatePosition, false)
window.addEventListener("resize", updatePosition, false)

function updatePosition() {
  canvasPos = getPosition(gameBoard)
}

// Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0
  var yPos = 0

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft
      var yScroll = el.scrollTop || document.documentElement.scrollTop

      xPos += el.offsetLeft - xScroll + el.clientLeft
      yPos += el.offsetTop - yScroll + el.clientTop
    } else {
      // for all other non-BODY elements
      xPos += el.offsetLeft - el.scrollLeft + el.clientLeft
      yPos += el.offsetTop - el.scrollTop + el.clientTop
    }

    el = el.offsetParent
  }
  return {
    x: xPos,
    y: yPos,
  }
}

class Game {
  constructor() {
    this.player = {}
    this.obstacles = []
    this.score = 0
  }
}

class Player {
  constructor() {
    this.x = 30
    this.y
    this.width = 30
    this.height = 30
    this.img = "/img/submarine-svgrepo-com.svg"
  }

  drawPlayer() {
    ctx.fillStyle = "blue"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  /*  let playerImg = new Image()
    playerImg.src = this.img
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height) */
}

class Obstacle {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  drawObstacle() {
    ctx.fillStyle = "orange"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

// event handler start button
document.getElementById("start").onclick = () => {
  startGame()
}

function startGame() {
  currentGame = new Game()
  currentPlayer = new Player()
  currentGame.player = currentPlayer
  currentGame.player.drawPlayer()

  placeBackground()
}
// update canvas
/* let obstaclesFrequency = 0
function updateCanvas() {
  ctx.clearRect(0, 0, 500, 600)
  currentGame.player.drawPlayer()
  obstaclesFrequency++
}
 */
