let frog1;
let frog2;
let frog3;

function setup() {
  createCanvas(400, 400);
  frameRate(1.5);

  frog1 = new frog(color(random(255), random(255), random(255)), 100, 330);
  frog2 = new frog(color(random(255), random(255), random(255)), 200, 330);
  frog3 = new frog(color(random(255), random(255), random(255)), 300, 330);
}

function draw() {
  background(220);
  frog1.display();
  frog2.display();
  frog3.display();
}

function frog(frogColor, frogXposition, frogYposition) {
  this.frogColor = frogColor;
  this.frogXposition = frogXposition;
  this.frogYposition = frogYposition;
  this.frogWidth = 50;
  this.frogHeight = 70;

  this.display = function() {
    this.frogYposition = this.frogYposition + random(-60, 0);
    //noStroke();
    //body
    fill(this.frogColor);
    ellipse(this.frogXposition, this.frogYposition, this.frogWidth, this.frogHeight);

    //eyes
    circle(this.frogXposition - 15, this.frogYposition - 25, 20);
    circle(this.frogXposition + 15, this.frogYposition - 25, 20);

    //pupils
    fill(0);
    circle(this.frogXposition - 15, this.frogYposition - 25, 10);
    circle(this.frogXposition + 15, this.frogYposition - 25, 10);

    fill(this.frogColor);

    //left back leg
    push();
    translate(this.frogXposition - 20, this.frogYposition + 30);
    rotate(radians(70));
    ellipse(0, 0, 15, 30);
    translate(10, 20);
    rotate(radians(-80));
    ellipse(10, -3, 15, 30);
    pop();

    //right back leg
    push();
    translate(this.frogXposition + 20, this.frogYposition + 30);
    rotate(radians(-70));
    ellipse(0, 0, 15, 30);
    translate(-10, 20);
    rotate(radians(80));
    ellipse(-10, -3, 15, 30);
    pop();

    fill(this.frogColor);

    //left front leg
    push();
    translate(this.frogXposition - 20, this.frogYposition - 20);
    rotate(radians(45));
    ellipse(-11, 9, 10, 20);
    translate(0, 15);
    rotate(radians(80));
    ellipse(0, 0, 10, 30);
    pop();

    //right front leg
    push();
    translate(this.frogXposition + 20, this.frogYposition - 20);
    rotate(radians(-45));
    ellipse(11, 9, 10, 20);
    translate(0, 15);
    rotate(radians(-80));
    ellipse(0, 0, 10, 30);
    pop();
  }
}
