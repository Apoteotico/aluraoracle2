let nombre;
nombre = prompt("Ingresa tu nombre");
alert("¡Bienvenid@ " + nombre + " a nuestro sitio web!");

let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

edad = prompt("Ingresa tu edad");


if (edad == "") {
  alert("¡Error! Completa todos los campos");
}else if (edad >= 18){
  alert("¡Hola, " + nombre + "! ¡Puedes obtener tu licencia de conducir!");
} else {
  alert("¡Hola, " + nombre + "! Lo siento, pero no cumples con la edad requerida para obtener la licencia de conducir.");
}





