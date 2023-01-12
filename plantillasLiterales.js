// Plantillas literales o en inglés templates strings

//Formas de declarar un string:

let nombre = 'Juan'
let apellido = 'Benito de Valle'; //comillas simples

const ciudad = "Sevilla";//comillas dobles

const saludo = "hola, " + nombre + apellido + ", ¿Cómo estás?";

console.log(saludo)

const saludo2 = `hola, ${nombre} ${apellido} , ¿cómo estás?`; //usar una variable en un string se llama string interpolation

console.log(saludo2);


descripcionPersonal =`${nombre} ${apellido} es de ${ciudad}.`

// console.log(descripcionPersonal)

const datosPersonalesEnTresLineas = `Me llamo ${nombre},
 mi primer apellido es ${apellido},
 y soy de ${ciudad}`

console.log(datosPersonalesEnTresLineas)