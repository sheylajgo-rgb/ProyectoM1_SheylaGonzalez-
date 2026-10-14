console.log ("hola mundo") // se comprueba que se entrelazoó el JS con el archivo index.html //
function generarcolor () {
    const tono= Math.floor (Math.random() * 360) // se agrega la función de generar colores aleatorios de 0 a 360 
return 'hsl (${tono}, 70%, 50%)';  
/* el return se encuentra con tres caracterítica de la variable hsl: 
h: el tono del color, que se va generar de forma aletoria con Math.random()
s: saturación, que esta asigando con un 70%
l: iluminosidad, que se le asigna el 50%
*/
}
console.log(generarcolor());
