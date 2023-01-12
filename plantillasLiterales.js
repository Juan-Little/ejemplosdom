// Plantillas literales o en inglés templates strings

//Formas de declarar un string:

//comillas simples

const nombre = 'Juan'
const apellido = 'Benito de Valle'; 

//comillas dobles

const ciudad = "Sevilla";

const saludo = "hola, " + nombre + apellido + ", ¿Cómo estás?";

//console.log(saludo);

//con backtick o acento grave ` (backquote, grave, or grave accent)

const saludo2 = `hola, ${nombre} ${apellido}  , ¿cómo estás?`; //usar una variable en un string se llama string interpolation

// console.log(saludo2);



descripcionPersonal =`${nombre} ${apellido} es de ${ciudad}.`

//  console.log(descripcionPersonal)

const datosPersonalesEnTresLineas = ` Me llamo ${nombre},
 mi primer apellido es ${apellido},
 y soy de ${ciudad}`

//console.log(datosPersonalesEnTresLineas)