// En inglés templates strings
nombre = 'Juan'
const apellido = 'Benito de Valle'; //comillas simples
const ciudad = "Sevilla";//comillas dobles

const saludo = "hola, " + nombre + apellido + ", ¿Cómo estás?";

const saludo2 = `hola, ${nombre} ${apellido}  , ¿cómo estás?`;

// console.log(saludo2);

//string interpolation: meter valores de una variable en un string con $
const nacimiento = 1978
let añoActual = 2023
let a = añoActual
let b = nacimiento
let edad (a,b) => a-b

descripcionPersonal =`${nombre} ${apellido} tiene ${edad} y es de ${ciudad}`

console.log(descripcionPersonal)