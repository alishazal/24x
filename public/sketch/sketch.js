// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Demonstration of Craig Reynolds' "Flocking" behavior
// See: http://www.red3d.com/cwr/
// Rules: Cohesion, Separation, Alignment

// Click mouse to add boids into the system

let flock;
var canvas;
let text;
let m;

var a;
var startColor;
var newColor;


function setup() {



  canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("canvasID");

  colorMode(HSB);

  startColor = color(0, 8, 41);
  newColor = color(random(360), 8, 41);
  a = 0;
  background(startColor);

  flock = new Flock();  
  // Add an initial set of boids into the system
  for (let i = 0; i < 30; i++) {
    m = random(150);

    let b = new Boid(width / 2, height / 2, m);
    flock.addBoid(b);
  }

}

function draw() {
  background(lerpColor(startColor, newColor, a));
  a += 0.01;
  if(a >= 1){
    a = 0.0;
    startColor = newColor;
    newColor = color(random(360), 8, 41);
  }
  flock.run();
}
