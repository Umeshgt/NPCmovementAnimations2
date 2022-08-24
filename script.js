/**  @type {HTMLCanvasElement}   */
const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
const CANVAS_WIDTH = canvas.width = 500
const CANVAS_HEIGHT = canvas.height = 1000
let gameFrame = 0
const numberOfEnemies = 100
const enemyArray = []


class Enemy{
    constructor(){
        this.image = new Image()
        this.image.src = "enemy2.png"
        this.spriteWidth = 280
        this.spriteHeight = 155
        this.width = this.spriteWidth / 2.5
        this.height = this.spriteHeight / 2.5
        this.x = Math.random() * (CANVAS_WIDTH - this.spriteWidth)
        this.y = Math.random() * (CANVAS_HEIGHT - this.spriteHeight)
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
        this.frame = 0
        
    }
    update(){
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++
        }
    }
    draw(){
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < numberOfEnemies; i++){
    enemyArray.push(new Enemy())
}




function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enemyArray.forEach(enemy => {
        enemy.update()
        enemy.draw()
    })


    gameFrame++

    requestAnimationFrame(animate)
}

animate()