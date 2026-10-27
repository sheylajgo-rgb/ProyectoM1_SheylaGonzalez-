console.log ("hola mundo") // se comprueba que se entrelazoó el JS con el archivo index.html //
function generarcolor () {
    const tono= Math.floor (Math.random() * 360) // se agrega la función de generar colores aleatorios de 0 a 360 // 
return `hsl(${tono}, 70%, 50%)`;  
/* el return se encuentra con tres caracterítica de la variable hsl: 
h: el tono del color, que se va generar de forma aletoria con Math.random()
s: saturación, que esta asigando con un 70%
l: iluminosidad, que se le asigna el 50%
*/
}
//Ahora se crea una función para generar la paleta de colores//

function generarpaleta(cantidad, formato) {
    const colores= [] // se agrega un array vacía para guardar los arreglos allí
    for (let i = 0; i < cantidad; i++) { // se hace antes del for para que haya una sola caja de colores 
        let color;
        if (formato === "hex"){
            color=generarHEX();
        } else {
            color=generarcolor();
        }
        colores.push(color); // el push agrega los colores adentro de la caja (se agrega al final del arreglo)
        }
    return colores; // el return va a fuera del for para que entregar la caja cuando se haya guadado todos los colores
}
/* nuestra función (generarpaleta) cuenta con 3 instrucciones: 
1 let i = 0 esta variable comienza de 0
2 i< cantidad se le dice a JS que i sea menor que la cantidad solicitada, si son 6 colores el contador tendrá 
estos valores 0 al 5, si son 6 repeticiones 
3 i ++ esto indica que cada repetición aumenta el contador uno más */

function generarHEX(){
    const numero= Math.floor (Math.random()* 16777216);
    return "#" + numero.toString(16).padStart(6,"0");
}

/* Math.floor genera nro aleatorios 
Math.random elimina decimales 
toString(16) convierte el nro. a formato hexadecimal
padStart (6, "0") garantiza se tenga 6 caracteres 
return devuelve el color generado */
const resultado= document.getElementById("resultado"); // espacio en donde apareceran los colores
console.log(resultado);
/* const resultado; se crea una variable llamada resultado
document representa el documento index.html del proyecto 
getELementById("resultado"), le dice JS que busque dentro deL html un elemento denominado como resultado
este caso seria (div class="paletas" id="resultado) que esta dentro del contenedor-paletas */

const botongenerar= document.getElementById("generar");  // botón para generar las paletas
console.log(botongenerar);
/* se crea una otra variable con Const botongenerar, así JS lo podrá identificar en el html
document; busca dentro del html
getElementById("generar"); busca el elemento con el id: generar" */

/* addEventListener; le dice a JS que este atento a lo que usuario hacen ela pag a través deñ click;
aqui se combina un método JS (addEventLitener), una función () anonima porque no tiene nomnre 
y una variable (boton.generar) */

const mensaje=document.getElementById("mensaje"); // esta variable busca el párr asignado para el msj

function crearTarjeta(color){
    const tarjeta= document.createElement("div");
    tarjeta.classList.add("tarjeta-color");

    const muestra= document.createElement("div");
    muestra.classList.add("muestra-color");
    muestra.style.backgroundColor= color;

    const codigo= document.createElement("span");
    codigo.textContent= color;
    codigo.classList.add("codigo-color");
    tarjeta.appendChild(muestra);
    tarjeta.appendChild(codigo);

    const botonAnclar= document.createElement("button");
    botonAnclar.type= "button";
    botonAnclar.textContent= "Anclar";
    botonAnclar.classList.add("boton-anclar");

    botonAnclar.setAttribute("aria-pressed", "false"); // cuando esta libre de anclar va a marcar fase
    botonAnclar.addEventListener("click", () => {
        const anclada= tarjeta.classList.toggle("anclada"); // toggle agg esa clase a la tarjeta, al pusar de nuevo se desactiva
        botonAnclar.textContent= anclada? "Desanclar": "anclar"; // ? elige el texto según el estado
        botonAnclar.setAttribute("aria-pressed", String(anclada)); // aria-pressed comunica el estado a los lectores de pantalla 
    })
    tarjeta.appendChild(botonAnclar);
    return tarjeta;
}

function mostrarPaletaInicialOGenerar() { 
    const cantidad= Number(document.getElementById("cantidad").value); 
    const formato= document.getElementById("formato").value; 
    const tarjetasAnteriores= Array.from(resultado.children);
    const ancladaFuera= tarjetasAnteriores.some ((tarjeta, indice) =>{
        return indice >= cantidad && 
        tarjeta.classList.contains("anclada");
    });
    if (ancladaFuera){
        mensaje.textContent= 
        "Desancla las útltimas tarjetas antes de reducir la cantidad.";
        return;
    }
    const colores= generarpaleta(cantidad, formato);
    mensaje.textContent= `¡Paleta de ${cantidad} colores generada correctamente!`; // ese será el msj microfeedback
    resultado.innerHTML=""; 
    colores.forEach((color, indice) => { // la función flecha el mismo codigo crea cada tarjeta
       const anterior= tarjetasAnteriores[indice];
       if (anterior && anterior.classList.contains("anclada")){
        resultado.appendChild(anterior);
       } else {
       const tarjeta= crearTarjeta(color);
       resultado.appendChild(tarjeta);
       }        
    });
}
// Ejecuta la función cuando haces clic en el botón.
botongenerar.addEventListener("click", mostrarPaletaInicialOGenerar);

// Ejecuta la función una vez al cargar la página.
mostrarPaletaInicialOGenerar();

/* resultado. innerHTML es para limpiar nuestro resultado (pizarra de colores), 
para que no se vaya acomulando los colores que se vayan generando en el click anterior,
por lo tanto el innerHTML, permite consultar o modificar el contenido del HTML,
 dejamos ese contenero vacío, como en el caso del array, para que no se desborde */  
/*tarjeta, muestra y colores  es el elemento div que se creó; 
classlist; permite trabajar con la clase CSS;
.add agrega la clase 
tajeta-color es el nombre  de la clase que se está asignando;
este tipo de clase se puede usar ahora en CSS para agregarle estilos, bordes, tamaño, etc. */