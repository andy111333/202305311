let bears = [];一隻有眼睛和耳朵的狗熊程式，讓狗熊產生移動，產生20個相同的狗熊，狗熊的大小，狗熊可以上下左右移動，狗熊速度不一，滑鼠按下之後，狗熊消失不見

class Bear {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.visible = true;
  }

  display() {
    if (this.visible) {
      // 狗熊的身體
      fill(139, 69, 19); // 咖啡色
      ellipse(this.x, this.y, this.size);

      // 狗熊的眼睛
      fill(255); // 白色
      let eyeSize = this.size / 8;
      let eyeOffset = this.size / 6;
      ellipse(this.x - eyeOffset, this.y - eyeOffset, eyeSize);
      ellipse(this.x + eyeOffset, this.y - eyeOffset, eyeSize);

      // 狗熊的耳朵
      fill(139, 69, 19); // 咖啡色
      let earSize = this.size / 4;
      let earOffset = this.size / 3;
      triangle(
        this.x - earOffset, this.y - earOffset,
        this.x + earOffset, this.y - earOffset,
        this.x, this.y - earOffset - earSize
      );
    }
  }

  move() {
    if (this.visible) {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x > width + this.size / 2) {
        this.x = -this.size / 2;
      } else if (this.x < -this.size / 2) {
        this.x = width + this.size / 2;
      }
      if (this.y > height + this.size / 2) {
        this.y = -this.size / 2;
      } else if (this.y < -this.size / 2) {
        this.y = height + this.size / 2;
      }
    }
  }

  checkMouseClick() {
    if (mouseIsPressed && dist(mouseX, mouseY, this.x, this.y) < this.size / 2) {
      this.visible = false;
    }
  }
}

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(80, 120);
    let speedX = random(-2, 2);
    let speedY = random(-2, 2);
    let bear = new Bear(x, y, size, speedX, speedY);
    bears.push(bear);
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < bears.length; i++) {
    bears[i].move();
    bears[i].display();
    bears[i].checkMouseClick();
  }
}
