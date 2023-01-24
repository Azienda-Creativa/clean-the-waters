class Player {
  constructor() {
    this.x
    this.y
    this.width
    this.height
    this.img = "./img/submarine-svgrepo-com.svg"
  }

  drawPlayer() {
    ctx.fillStyle = "blue"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  /*  let playerImg = new Image()
    playerImg.src = this.img
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height) */
}
