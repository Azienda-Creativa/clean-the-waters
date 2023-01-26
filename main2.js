/**  @type {HTMLCanvasElement} */

// canvas set up
const canvas = document.querySelector("#game-board")
const ctx = canvas.getContext("2d")
canvas.width = 1080
canvas.height = 620

// background
const background = new Image()
background.src = "./img/4161657.jpg"

let placeBackground = () => {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
}

let score = 0
let gameFrame = 0
let isGameOver = false
ctx.font = "40px Arial"

// mouse interectivity
let canvasPosition = canvas.getBoundingClientRect()
const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false,
}
canvas.addEventListener("mousedown", function (event) {
  mouse.click = true
  mouse.x = event.x - canvasPosition.left
  mouse.y = event.y - canvasPosition.top
})
canvas.addEventListener("mouseup", function () {
  mouse.click = false
})

// Player

// const playerLeft = new Image()
// playerLeft.src = "/img/submarine-left.png"
// const playerRight = new Image()
// playerRight.src = "/img/submarine-right.png"

class Player {
  constructor() {
    this.x = canvas.width
    this.y = canvas.height / 2
    this.radius = 50
    this.angle = 0
    this.frameX = 0
    this.frameY = 0
    this.frame = 0
    this.spriteWidth
    this.spriteHeight
  }
  //  update player position to move towards the mouse
  update() {
    const dx = this.x - mouse.x // calculate distsance between player and mouse
    const dy = this.y - mouse.y
    if (mouse.x != this.x) {
      this.x -= dx / 30
    }
    if (mouse.y != this.y) {
      this.y -= dy / 30
    }
  }
  draw() {
    if (mouse.click) {
      ctx.moveTo(this.x, this.y)
    }
    ctx.fillStyle = "yellow"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()

    // add image here with drawImage()
  }
}

const player = new Player()

// Plastic points

const plasticPointSound = document.createElement("audio")
plasticPointSound.src = "./clean-the-waters/sound/Picked Coin Echo 2.wav"
const plasticArray = []
class Plastic {
  constructor() {
    this.x = Math.random() * canvas.width // random position
    this.y = Math.random()
    this.radius = 10
    this.speed = Math.random() * 3 + 1 // random speed
    this.distance
    this.counted = false
    this.sound = "sound1"
  }
  update() {
    this.y += this.speed
    let dx = this.x - player.x // calculate distance between plastic and player
    let dy = this.y - player.y
    this.distance = Math.sqrt(dx * dx + dy * dy)
  }
  draw() {
    ctx.fillStyle = "blue"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
    ctx.stroke()
  }
}

let handlePlastic = () => {
  if (gameFrame % 100 == 0) plasticArray.push(new Plastic()) // create plastic every 100 frames
  for (let i = 0; i < plasticArray.length; i++) {
    plasticArray[i].update()
    plasticArray[i].draw()
    if (plasticArray[i].y < 0 - plasticArray[i.radius * 2]) {
      plasticArray.splice(i, 1)
      i--
    }

    // check collision measuring distance between center of the circles
    else if (
      plasticArray[i].distance <
      plasticArray[i].radius + player.radius
    ) {
      if (!plasticArray[i].counted) {
        if (plasticArray[i].sound == "sound1") {
          // play souns not working ATM
          plasticPointSound.play()
        }
      }
      score++
      plasticArray[i].counted = true
      plasticArray.splice(i, 1)
      i--
    }
  }
}
// Fish Obstacles

const imgFish = new Image()
imgFish.src = "./img//submarine-left.png" // add image
let fishArray = []

class Fish {
  constructor() {
    this.x = canvas.width + 200
    this.y = Math.random() * (canvas.height - 150) + 90
    this.radius = 20
    this.speed = Math.random() * 2 + 2
  }
  draw() {
    ctx.fillStyle = "purple"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
  }
  update() {
    this.x -= this.speed

    if (this.x < 0 - this.radius * 2) {
      this.x = canvas.width + 200
      this.y = Math.random() * (canvas.height - 150) + 90
      this.speed = Math.random() * 2 + 2
    }
    // collision with player
    const dx = this.x - player.x
    const dy = this.y - player.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    if (distance < this.radius + player.radius) {
      gameOver()
    }
  }
}

const fish = new Fish()
let handleFish = () => {
  fish.draw()
  fish.update()
}

let gameOver = () => {
  ctx.fillStyle = "blue"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = "red"
  ctx.fillText(`GAME OVER!`, canvas.width / 2, canvas.height / 2)
  isGameOver = true
}
// animation loop

let animateGame = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  placeBackground()
  handlePlastic()
  player.update()
  player.draw()
  handleFish()
  ctx.fillStyle = "white"
  ctx.fillText(`${score}`, canvas.width / 2, canvas.height / 2) // score counter at the center of the canvas
  gameFrame++ // incred count frames by 1
  if requestAnimationFrame(animateGame) 
}

document.querySelector("#start").onclick = () => {
  animateGame()
}

window.addEventListener("resize", function () {
  canvasPosition = canvas.getBoundingClientRect()
})

const reloadButton = document.querySelector("#reload")

let refreshPage = () => {
  location.reload()
}
reloadButton.addEventListener("click", refreshPage)
