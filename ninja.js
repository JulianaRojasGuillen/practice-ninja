class Ninja{
    constructor (nombre, salud){
        this.nombre=nombre;
        this.salud= salud;
        this.velocidad=3;
        this.fuerza=3;
    }

    sayName(){
        console.log(this.nombre);
    }

    showStats(){
        console.log(`nombre: ${this.nombre}, fuerza: ${this.fuerza}, velocidad: ${this.velocidad}, salud: ${this.salud}`);
    }
    drinkSake(){
        this.salud+=10;
    }
}


let juli = new Ninja ('Juli', 50);

juli.sayName();
juli.showStats();
juli.drinkSake();
juli.showStats();