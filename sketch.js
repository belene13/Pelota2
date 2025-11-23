let np;

function setup() {
  angleMode(DEGREES);
  createcanvas(windowwidth,windowheight);
  np = new particula(width / 2, height / 2);
  console.log("vector:" + np.vel);
  console.log("magnitud:" + np.vel.mag());

}


function draw() {
  background(120);
  np.update();
  np.display();

}






