/* const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


//Obtienen las dimenciones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

//El canvas tiene las mismas dimenciones que la pantalla
canvas.height = window_height;
canvas.width = window_width;

//Crea un fondo para el canvas
canvas.style.background = '#ff8';

//Crea una clase
class Circle {
    constructor(x, y, radius, color, text) {
        //Propiedades
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;


    }

    //Metodos   
    draw(Context) {
        //Dibuja un circulo
        Context.beginPath();

        //Modificaciones del texto
        Context.textAlign = "center";
        Context.textBaseline = "middle";
        Context.font = "25px Arial";
        Context.fillText(this.text, this.posX, this.posY);

        //Estilo del circulo
        Context.strokeStyle = this.color;
        Context.lineWidth = "10";
        Context.fillText(this.text, this.posX, this.posY);

        Context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        Context.stroke();
        Context.closePath();

    }

}

let arrayCircle = [];
for (let i = 0; i < 10; i++) {

    let randomX = Math.random() * window_width;
    let randomY = Math.random() * window_height;

    let miCirculo = new Circle(randomX, randomY, 50, "Blue", i);

    //Agrega el objeto al array
    arrayCircle.push(miCirculo);
    //Dibuja el circulo
    arrayCircle[i].draw(ctx);

}

/* let miCirculo = new Circle(100,100,50,"Blue", "TECnM");

let miCirculo2 = new Circle(270,270,50,"Purple", "TECnM"); */

/* miCirculo.draw(ctx);
miCirculo2.draw(ctx); */


//  */
//Obtienen las dimensiones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

//Selecciona el canvas y obtiene su contexto
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.style.background = "Purple";

//El canvas tiene las mismas dimensiones que la pantalla
canvas.height = window_height;
canvas.width = window_width;

//Crea una clase para los círculos
class Circle {
    constructor(x, y, radius, text) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.text = text;
        this.colorOffset = Math.random() * 360; // Offset para variar el color RGB
    }

    // Actualiza el color del círculo basado en el tiempo
    updateColor() {
        const time = new Date().getTime();
        const frequency = 0.004; // Frecuencia de cambio de color

        // Calcula los componentes RGB basados en el tiempo y un offset
        const r = Math.sin(frequency * time + this.colorOffset) * 127 + 128;
        const g = Math.sin(frequency * time + this.colorOffset + 2) * 127 + 128;
        const b = Math.sin(frequency * time + this.colorOffset + 4) * 127 + 128;

        // Actualiza el color
        this.color = `rgb(${r}, ${g}, ${b})`;
    }

    // Dibuja el círculo en el canvas
    draw() {
        // Dibuja un círculo
        ctx.beginPath();

        // Modificaciones del texto
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "25px Arial";
        ctx.fillText(this.text, this.posX, this.posY);

        // Estilo del círculo
        ctx.strokeStyle = this.color;
        ctx.lineWidth = "10";

        ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();
    }
}

// Crea los círculos y los almacena en un array
let arrayCircle = [];
for (let i = 0; i < 20; i++) {
    let randomX = Math.random() * window_width;
    let randomY = Math.random() * window_height;
    let randomRadius = Math.floor(Math.random() * 100+30);


    let miCirculo = new Circle(randomX, randomY, randomRadius, i);
    arrayCircle.push(miCirculo);
}

// Función para actualizar y dibujar los círculos
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < arrayCircle.length; i++) {
        arrayCircle[i].updateColor();
        arrayCircle[i].draw();
    }
    requestAnimationFrame(update);
}

// Inicia la animación
update();
