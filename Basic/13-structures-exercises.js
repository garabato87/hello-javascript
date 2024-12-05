/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales
let animales = ["leon", "tigre", "perro", "gato", "caballo"]
// 2. Añade dos más. Uno al principio y otro al final
animales.push("Puma") //agrego al final
animales.unshift("Jirafa") //agrego al inicio
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2,1) //empiezo a eliminar desde[2] y elimino uno, el [3 ]
console.log(animales);

// 4. Crea un set que almacene cinco libros

let mySet = new Set(["libro1", "libro2", "libro3", "libro4", "libro5"])
console.log(mySet);

// 5. Añade dos más. Uno de ellos repetido

mySet.add("libro6")
mySet.add("libro1")
console.log(mySet);

// 6. Elimina uno concreto a tu elección

console.log(mySet.delete("libro1"));
console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre
let mesesMap = new Map([
    [1 , "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"]
])
console.log(mesesMap);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (mesesMap.has(5)) {
    console.log(mesesMap.get(5));
}else {
    console.log(mesesMap.has(5))
}


// 9. Añade al mapa una clave con un array que almacene los meses de verano
mesesMap.set(["meses de verano", ["enero", "febrero", "diciembre"] ])
console.log(mesesMap);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let arrayTest = [1, 2, 3, 4, 5]

let arraySet = new Set(arrayTest)

let mapTest = new Map()

arraySet.forEach((value)=>{
    mapTest.set(value, `Value: ${value}`)
})

console.log(mapTest);
