function Hero(x, y, speed){
    this.x = x;
    this.y = y;
    this.dx = speed;
    this.dy = speed;
    this.getHeroElement = function(){
      var img = document.getElementById("img")
      ctx.drawImage(img, this.x, this.y);
      }
      this.moveX = function () {
        this.x += this.dx;
        if(this.x <= -this.x/2 || this.x >= c.offsetWidth - this.x/3.5) {
          this.dx = -this.dx;
        }  
      };
      this.moveY = function () {
        this.y += this.dy;
        if(this.y <= -this.y/2 || this.y >= c.offsetHeight - this.y/1.3) {
          this.dy = -this.dy;
        }
      };
      this.move = function () {
        this.moveX();
        this.moveY();
      }
}
let hero =new Hero(0, 0, 20);
let hero2 = new Hero(400,100,20)
let hero3 = new Hero(700,100,20)
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.offsetWidth;
c.offsetHeight;
setInterval(function() {
  hero.move();
  hero.getHeroElement();
  hero2.move();
  hero2.getHeroElement();
  hero3.move();
  hero3.getHeroElement();
},20);

