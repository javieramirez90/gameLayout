let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d')

class Board{
  constructor(){
      this.x = 0;
      this.y = 0;
      this.width = canvas.width;
      this.height = canvas.height;
      this.image = new Image();
      this.image.onload = function(){
          this.draw();
      }.bind(this)
  }

  gameOver(){
      ctx.font = "80px Avenir";
      ctx.fillText("Game Over", 20,100);
      ctx.font = "20px Serif";
      ctx.fillStyle = 'peru';
      ctx.fillText("Ganó el jugador: " + x, 20,130);
      ctx.fillText("Press 'Esc' to reset", 20,160);
  }

  draw(){
      this.x -= this.x;
      if(this.x === -this.width) this.x = 0;
      ctx.drawImage(this.image, this.x,this.y,this.width,this.height);
      ctx.drawImage(this.image, this.x + this.width,this.y,this.width,this.height);
      ctx.fillStyle = "white";
      ctx.font = '50px Avenir';
      ctx.fillText(Math.floor(frames / 60), this.width -100, 50)
  }
}
