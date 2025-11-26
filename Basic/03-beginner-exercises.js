/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Escribe un comentario en una línea
//Este es mi primer comentario
// 2. Escribe un comentario en varias líneas
/*Este es un comentario
en varias lineas*/
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myName = "Braian Alvarez"
let myAge = 27
let myHeight = 1.71
let imStudent = true
let undefinedValue
let nullValue = null
let mySymbol = Symbol("??")
const fechaNacimiento = "02/02/1997"
// 4. Imprime por consola el valor de todas las variables
console.log (myName)
console.log (myAge)
console.log (myHeight)
console.log (imStudent)
console.log (undefinedValue)
console.log (nullValue)
console.log (mySymbol)
console.log (fechaNacimiento)
// 5. Imprime por consola el tipo de todas las variables
console.log (typeof(myName))
console.log (typeof(myAge))
console.log (typeof(myHeight))
console.log (typeof(imStudent))
console.log (typeof(undefinedValue))
console.log (typeof(nullValue))
console.log (typeof(fechaNacimiento))
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myName = "Braian Orlando Alvarez"
myAge = 28
myHeight = 1.72
imStudent = false

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myName = 40289333
myAge = "veintisiete"
myHeight = "un metro setenta y uno"
imStudent = "si, soy estudiante"
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myName2 = "Braian Alvarez"
const myAgeConst = 27
const myHeightConst = 1.71
const imStudentConst = true
// 9. A continuación, modifica los valores de las constantes ------- Dan error, las constantes no se pueden modificar
/*
const myName2 = "Braian Orlando Alvarez" 
const myAgeConst = 28
const myHeiheightConst = 1.72
const imStudentConst = false
*/
/*10. Comenta las líneas que produzcan algún tipo de error al ejecutarse */
console.log (myName2)
console.log (myAgeConst) 
console.log (myHeightConst)
console.log (imStudentConst) 