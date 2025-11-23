class particula {
    constructor(_x, _y) {
        this.pos = createVector(_x, _y);

        this.vel = p5.Vector.random2D();
        this.vel.setMag(random(0.5, 2));

        this.tVida = int(random(100,200));
        this.estaMuerta = false;

    }

    update(){
        this.pos.add(this.vel);
        this.vel.rotate(0.01);
    }

    display(){
        fill(255);
        noStroke();
        circle (this.pos.x, this.pos.y, 20);

    }
    }