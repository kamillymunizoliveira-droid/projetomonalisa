function setup() {
  createCanvas(800, 800);
}

let olhoX;
let olhoY;

function draw() {
  background("#E91E63");
 
  fill("#9C27B0");
  circle(400, 400, 600);

  fill("white");
  circle(320, 350, 80); // olho esquerdo
  circle(480, 350, 80); // olho direito

  line(300, 550, 500, 550);

  fill("#2196F3");
  triangle(400, 420, 370, 480, 430, 480);

  line(280, 290, 360, 280); // esquerda
  line(440, 280, 520, 290); // direita

  olhoX = map(mouseX, 0, width, -15, 15);
  olhoY = map(mouseY, 0, height, -15, 15);

  fill(0); // Pupilas pretas
  circle(320 + olhoX, 350 + olhoY, 15); // pupila esquerda
  circle(480 + olhoX, 350 + olhoY, 15); // pupila direita

  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
