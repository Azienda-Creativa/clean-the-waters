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

const canvas = document.querySelector("#game-board")
const ctx = canvas.getContext("2d")

let player
let enemy
let allies
let groupOfEnemies
let finalScore

class Player {
  constructor() {}
}

player = new Player()

class PlasticBottle {}

enemy = new PlasticBottle()

class Fish {}

allies = new Fish()

function start() {
  preload()
  setup()
}
