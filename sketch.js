const NP = 100;
let pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#617891");
  let nuevaPelota = new Pelota(mouseX, mouseY);
  pelotas.push(nuevaPelota);

  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].update();
    pelotas[i].display();
  }




  
  

}


