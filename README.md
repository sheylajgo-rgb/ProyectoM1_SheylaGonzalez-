# Colorfly Studio

Es un prototipo de proyecto de diseño web que genara paletas de colores aleatorio. 

## Indice 
- [Funciones de la página](#funciones-de-la-página)
- [Tecnología usadas](#funciones-de-la-página)
- [¿Qué hace cada tecnología usada?](#qué-hace-cada-tecnología-usada)
- [Desiciones Tecnicas](#desiciones-tecnicas)
- [HEAD](#head)
- [BODY](#body)
- [¿Cómo usar la pagina?](#cómo-usar-la-pagina)
  -  [¿Cómo reducir la cantidad de colores?](#cómo-reducir-la-cantidad-de-colores)
  - [¿Dónde puedo ver las paletas guardadas?](#donde-puedo-ver-las-paletas-guardadas)
  - [¿Cómo puedo eliminar cada una de ella?](#cómo-puedo-eliminar-cada-una-de-ella)
  - [¿Cómo puedo eliminar todo el historial de paletas?](#cómo-puedo-eliminar-todo-el-historial-de-paletas)
- [Ayuda con de Inteligencia Artificial](#ayuda-con-de-inteligencia-artificial)
  - [reoganización y diseño de la página](#reoganización-y-diseño-de-la-página)
  - [Generación de colores](#generación-de-colores)
  - [Consultas sobre conceptos, métodos y funciones ](#consultas-sobre-conceptos-métodos-y-funciones)

## Funciones de la página
- Genera paletas de colores según la *cantidad* seleccionada: 6, 8 o 9 
- Genera colores según el *formato* seleccionado: HEX o HSL
- Se visualiza cada color con su codigo determinado
- Contiene un mensaje de confirmación de ejecución optima del *botón generar paleta*
- Se puede *anclar* y *desanclar* los colores para continuar generando nuevos colores 
- Se adapta el diseño del proyecto a diferentes pantallas 

## Tecnologías usadas  
- HTML Semantico 
- CSS 
- JavaScript 
- Git, GitHub y Git Pages

## ¿Qué hace cada tecnología usada?
Se usó la estructura de HTML Sémantico, que es la más recomendada para el desarrollo web debido a que, sus jerarquias que hace facil su lectura y entendimiento. HTML organiza el contenido de la página. Usé etiquetas semánticas, como header, nav y main, para indicar la función de cada sección y facilitar su comprensión y accesibilidad. CSS define la apariencia: colores, tamaños, espacios y distribución. JavaScript agrega las interacciones, como generar paletas y anclar colores. El DOM es la representación del documento HTML como un árbol de elementos. JavaScript lo utiliza para encontrar y modificar esos elementos, por ejemplo, para agregar las tarjetas de colores a la página. Git es un control de versiones que funciona en el computador, que permite registrar los cambios de los archivos del proyecto. GitHub es la plataforma donde se alojan repositorios Git para guardar y compartir el código, GitHub Pages permite publicar el sitio web desde el repositorio y obtener una dirección URL para visitarlo por internet. 

## Desiciones Tecnicas 
La estructura del HtML  eL esquema se diseñó fue de forma consisa y sencilla; se divide entre:
### HEAD 
Contiene información y configuración de la página, es decir, como la codificación de caracteres, la configuración para adaptarla a diferentes pantallas, el título de la pestaña y el enlace al archivo CSS.

###  BODY
 Contiene el contenido principal que muestra la página. Dentro del *body* están los títulos, textos, enlaces, selectores y botones.  Un dato súper importante en el *body*, es que antes de cerrarlo; se inserta el enlace de JavaScript al html para que, los elementos HTML anteriores ya estén disponibles cuando se ejecute JavaScript. De esta manera: 
 [Ubicación de Script al final de body](image.png)
    
## ¿Cómo usar la pagina?
- Paso 1: abrir la pagina 👉 [Visitar ColorFly Studio](https://sheylajgo-rgb.github.io/ProyectoM1_SheylaGonzalez-/)
- Paso 2: esperar a que cargue la página 
- Paso 3: te diriges al selector de de cantidad de colores y escoges que cantidad de color que deseas genara, puede ser entre 6,8 o 9 [paso 3](img/Flujoapp/paso%203.png)
- Paso 4: selecciona el formato que deseas, puede ser entre HEX o HSL [paso 4](img/Flujoapp/paso%204.png)
- Paso 5: se refleja automatica el formato seleccioando; en este caso se seleccionó formato HEX [paso 5](img/Flujoapp/paso%205.png)
- Paso 6: Pulsa Anclar debajo del color que quieras conservar. Para liberar ese color, pulsa Desanclar debajo de su código [paso 6](img/Flujoapp/paso%206.png)
- paso 7: puedes volver a accionar el botón de "generar paleta". OJO los colores anclados se conservan y los demás se generan nuevamente [paso 7](img/Flujoapp/paso%207.png)

## ¿Cómo reducir la cantidad de colores?
AVISO: Si seleccionaste la cantidad de 8 colores y quieres reducirlo a 6, fijate que no hayas anclado todas las tajetas de colores. Esto te impedirá generar una nueva paleta de colores.
  por ejemplo: si seleccionaste 8 colores con formato HSL, y anclaste 8 colores de las paletas. Deberas desanclar 2 colores para que puedas reducir la cantidad de colores. de lo contrario te arrojará este mensaje "Hay más colores anclados que la cantidad seleccionada. Desancla alguno" [aviso](img/Flujoapp/aviso.png)
- paso 1: Desancla las tarjetas que quedarían fuera de la nueva cantidad
- paso 2: Seleciona la cantidad de color que desees en ese momento 
- paso 3: se generará la nueva paleta de color con la cantidad selecciona, pero conservando los colores anclados[paso 3 de aviso](img/Flujoapp/Aviso-paso3.png)

## ¿Dónde puedo ver las paletas guardadas?
Puedes guardar la cantidad de paletas que desees, estas se almacena dentro de mis paletas guardadas
  - paso 1: acciona el boton "guardar paleta"[historial de paletas, paso 1](img/Flujoapp/historial-paso1.png)
  - paso 2: busca el boton "mis paletas guardadas" ubicada al final de la pagina y seleccionado. Allí hayaras tu paleta guardada [historial de paletas, paso 2](img/Flujoapp/historial-paso2.png)
  En el caso de que quieras guardar más de una paletas en el historial debes:
  - paso 3: generar una nueva paletas con 8 colores con formato HEX y darle guardar paleta
  - paso 4: vuelve a accionar al boton "mis paletas guardadas" alli debería aprecer la nueva paletas guardada [historial de paletas, paso 4](img/Flujoapp/historial-paso4.png)
  
## ¿Cómo puedo eliminar cada una de ella?
Puedes eliminar de forma individual cada paletas que guardes en el historial 
  - paso 1: selecciona que paleta desees eliminar 
    Por ejemplo: selecciona la paleta número 
  - paso 2: acciona el boton "eliminar" , te va aparecer un mensaje de confirmación, escoge aceptar y ya quedará eliminada [eliminar una paleta, paso 2](img/Flujoapp/eliminarunapaleta-paso2.png)  
  - paso 3: compruba que se haya eliminado revisando el historial de paletas [eliminar una paleta, paso 3](img/Flujoapp/eliminarunapaleta-paso3.png)

## ¿Cómo puedo eliminar todo el historial de paletas?
En caso de que desees limpiar todo el historial de paletas puedes buscar el boton "eliminar todas las paletas" 
   - paso 1: selecciona el boton "eliminar todas las paletas" y accionalo [eliminar todas las paletas, paso 1](img/Flujoapp/eliminar-todas-las-paletas.png)
   - paso 2: acepta en el mensaje de confirmación y listo, tú historial quedará limpio [eliminar todas las paletas, paso 2](img/Flujoapp/eliminar-todas-paso2.png)

Así sucesivamente hasta que creas tu paleta de color perfecta a tu gusto o utilidad 

## Ayuda con de Inteligencia Artificial 

### reoganización y diseño de la página
  ### Consulta 1
  **Prompt utlizado:** 
  Necesito de tu ayuda, sabes que quiero colocar en el header obviamente el título de la página y una pequeña introducción, que sería como bienvenidos al Colorfly Studio, somos una agencia Brandy de productos propuestos visi-ble por más de 300 clientes de distintas ciudades. Te invitamos a explorar nuestra colección de paleta de colores. Y abajo, se ve la lista donde se ve como un link de referencia de li- de inicio y de paletas. Pero cuando lo veo mi en mi proyecto, o sea en la página como tal, se ve distorsionado, porque obviamente se ven los párrafos y abajo de los párrafos el link de inicio y de paleta. Entonces, ¿qué me recomiendas tú? ¿mudar los párrafos de introducción posterior del header y subir los los nav de los links del inicio de paleta
  [respuesta del prompt 1](img/IA/consulta-header-ia.png)

  ### guia semanal con IA 
  **Prompt utilizado:**
  Cada semana, guíame paso a paso para avanzar en mi proyecto web Colorfly Studio con HTML, CSS y JavaScript no uses fetxh, ni librería externas solo JS básico. Usa mi checklist pendiente: terminar el mensaje de confirmación, revisar la accesibilidad de forma sencilla (recuerda que soy principiante) , probar el diseño y publicar en GitHub. Propón una tarea pequeña y alcanzable, explícame cómo implementarla y cómo comprobar que funciona. No asumas que completé tareas sin confirmarlo.
  [respuesta del Prompt guia semanal](img/IA/guía-semanal-ia.png)
 
  ### Consulta 2 
  **Prompt utilizado:**
  ¿puedes sacar una duda en un proyecto anterior para colocar el botón, colocar un botón class en vez de botón ID?
  [respuesta del prompt 2](img/IA/consulta-btn.png)

  ### Consulta 3
  **Prompt utilizado:**
  Una pregunta ¿siempre se tiene que hacer la inserción o insertar el JavaScript después del cierre del main y antes del cierre del body? Siempre siempre hay que hacer eso en el Index HTML
  [respuesta del prompt 3](img/IA/consulta-script.png)

  ### consulta 4
 **Prompt utilizado:**
 Estoy prensentando problemas para que se refleje los cambios de color en la caja del mensaje
 [respuesra del prompt 4](img/IA/problema-cambio-color.png)
 
  ### consulta 5
  **Prompt utilizado:**
  Me puedes ayudar? quiero que el margen del botón de confirmación, o sea del mensaje, quede más pequeño, más ajustado al tamaño de la oración.
  [respuesta del propmt 5](img/IA/margen-btn.png)
  
  ### consulta 6
  **Prompt utilizado:**
  igual quiero modificar la proporción que se ve en pantalla de teléfono, porque allí se distorsiona la distancia entre los botones. ¿Cómo se podría hacer eso?
  [respuesta del prompt 6](img/IA/consulta-pantalla-pequeña.png)
 
  ### consulta 7
  **Prompt utilizado**
  Tengo un problema. Si me dejas seleccionar los colores con la tabulación, al igual que el formato, pero para generar la paleta no, me salta a otra parte de la página
  [respuesta del prompt 7](img/IA/tabulación-btn.png)

  ### consulta 8 
  **Prompt utilizado**
  Quiero agregar un footer a la pagina con mi información profesional, como mi usuario de GitHub, correo electronico, me puede ayudar hacerlo de una  forma organizada?
 [respuesta del prompt 8](img/IA/footer.png)

 ### consulta 9 
 **Prompt utilizado**
 Me ayudas a realizar una reestructura la proyecto: 
  1. Quiero que al cargar la pagina se visualice una paleta de colores por the foult, puede ser de 6 colores
  2. Quiero que al agregar nuevas cantidades de colores, pero que se mantenga la primera paleta de color generada y que solo se agrega los colores adiciones según la cantidad seleccionada
  3. Quiero que al cambiar de formato solo se cambie los codigo de color, pero se mantega la paleta generada
  4. El mensaje de microfeedback solo se visualice por un determinado tiempo
  5. posterios a estos cambios podemos continuar con la configuraciones de los botones de guardar paleta y recuperar paleta
 [respuesta del prompt 9](img/IA/reestructura-pag.png)

 ### consulta 10
 **Prompt utilizado**
 Quiero agregarle estilo y dimensiones al boton de guarda, pero no se genera los cambios. Me puedes decir qué paso me salté o pasé por alto
.botonguardar{
    background-color: hsl(300, 59%, 68%);
    color: black;
    padding: 8px 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}
[respuesta del prompt 10](img/IA/dimensiones-btnguardar.png)

### consulta 11
**Prompt utilizado**
Este cambio en la estetica afectaría el foco de visibilidad, ni los contrates?. qué recomeindas?
[respuesta del prompt 11](img/IA/foco-visible.png)

### Generación de colores 
### Consulta 12
**Prompt utilizado:**
¿Cuál es de las dos opciones para usarlo en background de los colores? Es que tengo dos opciones para el proyecto. El RGB y el HSL. ¿Cuál considerarías que es mejor para hacer la paleta?. Me dieron dos opciones para hacer o estructurar la paleta de colores. qué es RGB y HSL ¿Cuál es de las dos es mejor?
[respuesta del prompt 12](img/IA/consulta-HSL-RGB.png)

### consulta 13 
**Prompt utilizado**
Estoy presentanto un problema con la pagina. Se mantiene la misma paleta de colores, pero al carmbiaral formato HEX los codigo que aparecen son todos iguales y en la . Cómo puedo solucionar este error?
[respuesta del prompt 13](img/IA/Error-HEX.png)

### Consultas sobre conceptos, métodos y funciones 
  ## Consulta 14
  **Prompt utilizado:**
  ¿Puedes explicar con palabras claras y sencilla lo que significaría,  Para qué sirve el Return en, como la funciones?
  [respuesta del prompt 14](img/IA/consulta-return.png)

 ### consulta 15
  **Prompt utilizado:**
  Me puedes explicar de forma más didáctica el método for each en la función 
  [respuesta del prompt 15](img/IA/consulta-metodo-forEach.png)

 ### consulta 16
  **Prompt utilizado:**
  Me puedes explicar cómo funciona el Math random
  [respuesta del prompt 16](img/IA/consulta-Math-random.png)







