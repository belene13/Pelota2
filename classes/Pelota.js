class Pelota{
    
  constructor(x, y) {
    this.posx = mouseX;
    this.posy = mouseY;
    this.estaViva = true;
    this.tamano = 1;
    this.opacidad = 90;
    this.color = color("#25344F");
  }
  update() {

    if (this.posy < this.tamano / 2) {
      this.estaViva = false;
      return;
    }
    
    this.opacidad -= 0.7;
    this.tamano += 0.7;
  }

  display() {
    noStroke();

    // capa suave
    fill(255, this.opacidad * 0.25);
    circle(this.posx, this.posy, this.tamano);

    // reflejo interno
    fill(255, this.opacidad * 0.9);
    circle(
      this.posx - this.tamano * 0.25,
      this.posy - this.tamano * 0.25,
      this.tamano * 0.35
    );

    // borde
    stroke(255, this.opacidad);
    strokeWeight(2);
    noFill();
    circle(this.posx, this.posy, this.tamano);
  }
}