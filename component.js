class Component {
  constructor(x, y, w, h, color) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = "red"
    this.img = new Image()
    this.img.src = "./img/submarine-svgrepo-com.svg"
    if (color) this.color = color
  }

  render() {
    const ctx = gameBoard.context

    if (this.img) {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    } else if (this.color) {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.w, this.h)
    }
  }

  checkCollision(otherComponent) {
    if (
      this.x < otherComponent.x + otherComponent.w &&
      this.x + this.w > otherComponent.x &&
      this.y < otherComponent.y + otherComponent.h &&
      this.y + this.h > otherComponent.y
    ) {
      return true
    } else {
      return false
    }
  }
}
