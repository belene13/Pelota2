let trail = []; //linea
let branches = []; // lineas secundarias
let particles = []; // pelotitas de colores
let stars = []; // estrellas de fondo

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#360042ff");
  noCursor();
}

function draw() {

  fill(0);
  rect(0, 0, width, height);

  trail.push({ x: mouseX, y: mouseY });
  if (trail.length > 170) trail.shift();

  drawMainLine();
  updateBranches();
  updateParticles();
  drawGlow(mouseX, mouseY);

  // líneas delgadas desde la principal
  if (frameCount % 3 === 0) {
    for (let i = 0; i < 7; i++) spawnBranch();
  }
}

//linea principal
function drawMainLine() {
  stroke(255);
  strokeWeight(3);
  noFill();
  beginShape();
  for (let p of trail) vertex(p.x, p.y);
  endShape();

}

// lineas secundarias

function spawnBranch() {
  if (trail.length < 3) return;

  let p = random(trail); 

  branches.push({
    x: p.x,
    y: p.y,
    angle: random(-PI, PI),
    length: 0,
    maxLength: random(40, 150),
    alpha: 255
  });
}

function updateBranches() {
  for (let b of branches) {
    // crecimiento
    b.length += 3;
    b.alpha -= 3;

    let endX = b.x + cos(b.angle) * b.length;
    let endY = b.y + sin(b.angle) * b.length;

    stroke(255, b.alpha);
    strokeWeight(1);
    line(b.x, b.y, endX, endY);

    // partícula de color
    if (b.length >= b.maxLength && b.alpha > 0) {
      spawnParticle(endX, endY);
      b.alpha = 0;
    }
  }

  // eliminar líneas secundarias
  branches = branches.filter(b => b.alpha > 0);
}


// particula de color

function spawnParticle(x, y) {
  particles.push({
    x,
    y,
    size: random(3, 12),
    vx: random(-0.5, 0.5),
    vy: random(-0.5, -1),
    alpha: 255,
    color: color(random(200,255), random(100,255), random(100,255))
  });
}


function updateParticles() {
  noStroke();
  for (let p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 4;

    fill(red(p.color), green(p.color), blue(p.color), p.alpha);
    ellipse(p.x, p.y, p.size);
  }

  particles = particles.filter(p => p.alpha > 0);
}

// Bolita principal brillante
function drawGlow(x, y) {

  for (let i = 30; i > 0; i--) {
    let transparencia = map(i, 30, 0, 0, 150);
    fill(255, transparencia);
    circle(x, y, i);
  }
}


