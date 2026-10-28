console.log ("hola mundo") // se comprueba que se entrelazoó el JS con el archivo index.html //
let paletaActual=[]; // Este arreglo será donde conservaremos los colores y su estado de anclaje
function crearDatosColor(){ // se obtiene un objeto: un conjunto de datos que describe un color
    return{
        tono: Math.floor(Math.random() * 360),
        saturación: 70,
        luminosidad: 50,
        anclado: false
    }
}
function obtenerHSL(color){
    return `hsl(${color.tono}, ${color.saturación}%, ${color.luminosidad}%)`; 
}
/* color.tono significa: “lee la propiedad tono del objeto color”. Lo mismo ocurre con la saturación y la luminosidad.*/

function obtenerHEX(color){ // se prepara los valores, expresando en grados,
    const h= color.tono; // se divide los porcentajes entre 100 porque la fórmula trabaja con valores de 0 a 1
    const s= color.saturación/100;
    const l= color.luminosidad/100;

    const a= s* Math.min(l, 1 - l); // Math.min() elige el menor de los valores. 
    function convertirCanal(n){ //a determina cuánto pueden alejarse los componentes rojo, verde y azul de la luminosidad base.
        const k= (n + h/ 30)%12;
        const canal= l - a * Math.max( // Un canal es la cantidad de rojo, verde o azul que compone el color
            -1,                       // Math.max Calcular la intensidad de ese canal
            Math.min(k- 3,9 -k,1)
        ); 
        return Math.round(canal * 255)
        .toString(16)
        .padStart(2, "0");
    }
        return "#" + convertirCanal(0)
        + convertirCanal(8)
        + convertirCanal(4);
    } 
    // contiene la fórmula matemática de conversión. No genera otro color aleatorio: calcula el HEX correspondiente al HSL guardado

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

/* const resultado; se crea una variable llamada resultado
document representa el documento index.html del proyecto 
getELementById("resultado"), le dice JS que busque dentro deL html un elemento denominado como resultado
este caso seria (div class="paletas" id="resultado) que esta dentro del contenedor-paletas */

const botongenerar= document.getElementById("generar");  // botón para generar las paletas
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
    tarjeta.classList.toggle("anclada", color.anclado);

    const muestra = document.createElement("div");
    muestra.classList.add("muestra-color");
    muestra.style.backgroundColor= obtenerHSL(color);

    const codigo= document.createElement("span");
    codigo.classList.add("codigo-color");

    const formato= document.getElementById("formato").value;
    codigo.textContent= formato === "hex" ? obtenerHEX(color) : obtenerHSL(color);

    const botonAnclar = document.createElement("button");
    botonAnclar.type = "button";
    botonAnclar.classList.add("boton-anclar");
    botonAnclar.textContent = color.anclado ? "Desanclar" : "Anclar";
    botonAnclar.setAttribute("aria-pressed", String(color.anclado));

    botonAnclar.addEventListener("click", function() {
        color.anclado = !color.anclado;

        tarjeta.classList.toggle("anclada", color.anclado);
        botonAnclar.textContent = color.anclado ? "Desanclar" : "Anclar";
        botonAnclar.setAttribute("aria-pressed", String(color.anclado));
    });

    tarjeta.appendChild(muestra);
    tarjeta.appendChild(codigo);
    tarjeta.appendChild(botonAnclar);

    return tarjeta;
}

const selectorCantidad = document.getElementById("cantidad");
const selectorFormato = document.getElementById("formato");

function mostrarPaleta() {
    resultado.innerHTML = "";

    paletaActual.forEach(color => {
        resultado.appendChild(crearTarjeta(color));
    });
}

botongenerar.addEventListener("click", function() {
    paletaActual = paletaActual.map(color => {
        return color.anclado ? color : crearDatosColor();
    });

    mostrarPaleta();

    mensaje.textContent =
        `¡Paleta de ${paletaActual.length} colores generada correctamente!`;
});

selectorCantidad.addEventListener("change", function() {
    const cantidad = Number(selectorCantidad.value);

    const ancladaFuera = paletaActual.some((color, indice) => {
        return indice >= cantidad && color.anclado;
    });

    if (ancladaFuera) {
        mensaje.textContent =
            "Desancla las últimas tarjetas antes de reducir la cantidad.";

        selectorCantidad.value = String(paletaActual.length);
        return;
    }

    while (paletaActual.length < cantidad) {
        paletaActual.push(crearDatosColor());
    }

    if (paletaActual.length > cantidad) {
        paletaActual.length = cantidad;
    }

    mostrarPaleta();
});

selectorFormato.addEventListener("change", function() {
    const codigos = resultado.querySelectorAll(".codigo-color");

    paletaActual.forEach((color, indice) => {
        codigos[indice].textContent = selectorFormato.value === "hex" ? obtenerHEX(color) : obtenerHSL(color);
    });
});

selectorCantidad.value = "6";

for (let i = 0; i < 6; i++) {
    paletaActual.push(crearDatosColor());
}

mostrarPaleta();

const botonGuardar= document.getElementById("guardar");
const botonrecuperar= document.getElementById("recuperar");

/* guardar los colores actuales */
botonGuardar.addEventListener("click", function(){ // detecta el click y cumple la función de guardar
    const paletaParaGuardar = paletaActual.map(color => ({ // map recorre los colores, genera un nuevo arreglo y los guarda
        tono: color.tono,
        saturación: color.saturación,
        luminosidad: color.luminosidad

    }));

    try{ // try significa trata de ejecutar estas intrucciones
        localStorage.setItem("paletaGuardada", JSON.stringify(paletaParaGuardar)); // loclaStorage; guarda en el navegador, JSON.stringify traduce los colores a texto para guardarlos
        mensaje.textContent= "¡Paleta guardada correctamente!";
    } catch (error){
        mensaje.textContent="No se pudo guardar la paleta";}
    });
    /* recupera la última paleta guardada */
    botonrecuperar.addEventListener("click", function(){
        try{
        const datosGuardados= localStorage.getItem("paletaGuardada");
        if (!datosGuardados){
            mensaje.textContent="Todavía no hay una paleta guardada";
            return;
        }
         const paletaGuardada = JSON.parse(datosGuardados);

         // compueba que los datos guardados sean validos
         const esValida=Array.isArray(paletaGuardada) // comprueba que sea un arreglo
         && paletaGuardada.length > 0 // comprueba que tenga un color al menos
         && paletaGuardada.every(color => // comprueba que todos los colores cumplan las condiciones
            color !== null // comprueba que el color no sea un valor vacío llamado null
            && typeof color === "object" // comprueba que sea un objeto donde podamos leer sus propiedades
            && Number.isFinite(color.tono) // && significa que además de aquellas, también debe cumplir con estas
            && Number.isFinite(color.saturación)
            && Number.isFinite(color.luminosidad) // comprueba que tono, saturación y luminosidad sean números finitos
         );
         if (!esValida){ // si la paleta no pasa esa comprobación, arroja ese msj
            mensaje.textContent="La paleta guardada no es compatible. Guarda una nueva";
            return;
         }
         paletaActual= paletaGuardada.map(color => ({ // se reemplaza la paletaActual por los colores recuperados
            tono: color.tono,
            saturación: color.saturación,
            luminosidad: color.luminosidad,
            anclado: false  // anclado: false indica que cada color empieza sin anclar, de modo que puede cambiar cuando pulses Generar
         }));
         selectorCantidad.value= String(paletaActual.length); // Ajusta el selector a la cantidad de colores recuperados. Por ejemplo, si guardaste seis colores, selecciona 6
         mostrarPaleta(); // Ejecuta tu función para dibujar los colores recuperados en la página
         mensaje.textContent= "¡Paleta recuperada correctamente!";
        } catch(error){
            mensaje.textContent="No se pudo recuperar la paleta";
        }
    });

