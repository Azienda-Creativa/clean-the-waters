// TO DO LIST

// add functionality to start and play-again buttons
// design a Simple and Fun UI - DONE
// implement google fonts - DONE
// able to drag the player by mouse with a slow-down effect - like swimming underwater - DONE BUT use class insted
// able to collect and count points won and lost
// add water sound
// add score sound
// increse handicap with time
// game over screen
// add sprites for player and obstacles

/**   @type {HTMLCanvasElement} */

const gameBoard = document.querySelector("#game-board")
const ctx = gameBoard.getContext("2d")

let start = document.querySelector("#start")
// add an event listner for start button to run the function startGame()

let reload = document.querySelector("#reload")
// add an event listner for reload button to run reload()

let currentPlayer = new Component(500, 340, 50, 50, "red")
let currentGame
let currentScore = 0
const fish = []
const bottles = []
class Bottles {
  constructor() {
    this.x = Math.random() * gameBoard.width
    this.y = Math.random() * gameBoard.height
    this.radius = 50
    this.speed = Math.random() * 5 + 1
    this.distance
  }

  update() {
    this.y -= this.speed
  }
  draw() {
    ctx.fillStyle = "red"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.closePath
  }
}

/* let bottle1 = {
  x: 50,
  y: 50,
  width: 50,
  height: 40,
}

for (let i = 0; i < 500; i++) {
  const element = bottles[i]
  bottles.push(element)
}

function animatePlastic() {
  ctx.clearRect(0, 0, gameBoard.width, gameBoard.height)
  bottle1.x++
  ctx.fillRect(bottle1.x, bottle1.y, bottle1.width, bottle1.height)
  requestAnimationFrame(animatePlastic)
}

animatePlastic()
 */
//console.log(bottle1)

// create new bottle img every 2sec.
/* setInterval((plastic) => {
  let newBottle = {
    x: 50,
    y: 50,
    width: 50,
    height: 40,
    color: "red",
  }
  ctx.fillRect
  bottles.push(bottle1)
}, 2000)
 */
console.log(bottles)

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
  dX = mouseX - currentPlayer.x
  dY = mouseY - currentPlayer.y

  currentPlayer.x += dX / 200
  currentPlayer.y += dY / 200

  ctx.clearRect(0, 0, gameBoard.width, gameBoard.height)

  ctx.fillStyle = "#00CCFF"
  ctx.fillRect(
    currentPlayer.x - currentPlayer.w / 2,
    currentPlayer.y - currentPlayer.w / 2,
    currentPlayer.w,
    currentPlayer.h
  )

  requestAnimationFrame(animate)
}
animate()

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

/* class Player {
  constructor() {}

  drawPlayer() {}
 
    let playerImg = new Image()
    playerImg.src = this.img
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height) 
}*/

/* class Obstacle {
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
} */

// event handler start button
/* document.getElementById("start").onclick = () => {
  startGame()
}

function startGame() {
  currentGame = new Game()
} */

// update canvas
/* let obstaclesFrequency = 0
function updateCanvas() {
  ctx.clearRect(0, 0, 500, 600)
  currentGame.player.drawPlayer()
  obstaclesFrequency++
}
 */
