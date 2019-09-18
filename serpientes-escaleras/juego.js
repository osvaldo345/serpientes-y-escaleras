class Jugador {
    constructor() {
        this.cTotales = 100;
        this._nombre;
        this._puntos = 0;
    }

    get cTotales(){
        return this._cTotales;
    }

    set posicion(posicion = 0){
        this._posicion = posicion;

    }
    Moverse(){
        var Trampa = new Array();
        for (let i = 1; i <= 100; i++) {
            Trampa.push(0);
        }
        this._Trampa[12] = 1;
        this._Trampa[23] = 1;
        this._Trampa[36] = 1;
        this._Trampa[54] = 1;
        this._Trampa[69] = 1;
        this._Trampa[82] = 1;
        this._Trampa[93] = 1;
        this._Trampa[98] = 1;

        this._Trampa[2] = 2
        this._Trampa[7] = 2;
        this._Trampa[23] = 2;
        this._Trampa[39] = 2;
        this._Trampa[57] = 2;
        this._Trampa[74] = 2;
        this._Trampa[79] = 2;
        this._Trampa[84] = 2;

        var tiro = dado.lanzar();
        console.log('Dado=' + Number(tiro));
        this.puntos += tiro;
        if(Trampa[this.puntos] === 1) {
            console.log("Caiste en la casilla " + this.puntos + "Serpiente :(");
            return this._serpientes(this.puntos);
        } else if(Trampa[this.puntos] === 2) {
            console.log("Caiste en la casilla " + this.puntos + "Escalera :)");
            return this._serpientes(this.puntos);
        }else {
            return this.puntos;
        }
    }

    _serpientes(posicion) {
        if(posicion === 12) {
            this.puntos = 5;
        } else if (posicion === 23) {
            this.puntos = 15;
        } else if (posicion === 36) {
            this.puntos = 30;
        } else if (posicion === 54) {
            this.puntos = 42;
        } else if (posicion === 69) {
            this.puntos = 60;
        } else if (posicion === 82) {
            this.puntos = 73;
        } else if (posicion === 93) {
            this.puntos = 76;
        } else if (posicion === 98) {
            this.puntos = 52;
        }
    }

    _escaleras(posicion) {
        if(posicion === 2) {
            this.puntos = 16;
        } else if (posicion === 7) {
            this.puntos = 24;
        } else if (posicion === 23) {
            this.puntos = 45;
        } else if (posicion === 39) {
            this.puntos = 58;
        } else if (posicion === 57) {
            this.puntos = 70;
        } else if (posicion === 74) {
            this.puntos = 81;
        } else if (posicion === 79) {
            this.puntos = 91;
        } else if (posicion === 84) {
            this.puntos = 97;
        }
    }
}

class Dado{
    constructor() {
    }
    lanzar(){
        return Math.trunc(Math.random() * 6 + 1);
    }
}

class Carrera {
    constructor() {
        this._cTotales = 100;
        this._escaleras;
        this._serpientes;
    }

carrera() {
    var j1 = new Jugador();
    j1.nombre = "Osvaldo";
    var j2 = new Jugador();
    j1.nombre = "German";
    

while (j1.puntos < j1.cTotales && j2.puntos <j2.cTotales){
    j1.Moverse();
    console.log(j1.nombre + "Estas en la casilla " + j1.puntos);

    j1.Moverse();
    console.log(j2.nombre + "Estas en la casilla " + j2.puntos);
}

if (j1.puntos >= 100 && j2.puntos >= 100) {
    alert("Empate")
} else if (j1.puntos >= 100) {
    alert(j1.nombre + " Ganó")
    console.log(j1.nombre + " Ganó")
} else if (j2.puntos >= 100) {
    alert(j2.nombre + " Ganó")
    console.log(j2.nombre + " Ganó")

}
}
}
var correr = new Carrera;
console.log(correr.carrera());