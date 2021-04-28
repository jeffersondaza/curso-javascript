/*
Declaracion de variables con var, let y const
*/
let recipiente = "Papel";
const pi= 3.14;

/*
Mostrar una alerta en pantalla
*/
alert(recipiente);

/*
Mostrar una alerta en pantalla y pedir un valor/respuesta
*/
let nombre = prompt("Dime tu nombre");

/*
Concatenar con variables es recomendado con `
*/

let nombre2 = `Hola soy ${nombre}`

/*
Condicionales
*/
//IF
if (pi==3.23) {
    alert("Es true")
}else{
    alert("No es true")
}
//Array

let frutas= ["Banana", "Pera", "Manzana"];
document.write(frutas);

//Arrays asociativos

let pc = {
    nombre: "JefferPC",
    procesador: "Intel i7",
    ram: "16GB",
    espacio: "1TB"
};

document.write(`<br>`+pc["ram"]);

/*
Bucles o iteraciones
*/

//While

let num1=0;
while (num1<6) {
    num1++;
    document.write(num1);
}

//Do-while
num1=0;
do {
    num1++;
    document.write(num1);
} while (num1<6);

//For

for (let i = 0; i < 6; i++) {
    document.write(i+ "<br>");
}

//For in - Agregando la propiedad "edad" y recorriendolo me muestra el nombre de la propiedad

let animales = ["Gato", "Perro", "Pollo"];
animales.edad = 20;
for(animal in animales){
    document.write(animal + "<br>");
}


//For of - Agregando la propiedad "edad" y recorriendolo me muestra el valor de la propiedad

let animaless = ["Gato", "Perro", "Pollo"];
animaless.edad = 20;
for(animal of animaless){
    document.write(animal + "<br>");
}

/*
Funciones 
*/

(()=>{console.log("Funcion anonima")})();
(()=>{console.log("Funcion anonimaPro")})();