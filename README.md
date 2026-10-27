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
- [¿Cómo reducir la cantidad de colores?](#cómo-reducir-la-cantidad-de-colores)

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
- Paso 3: te diriges al selector de de cantidad de colores y escoges que cantidad de color que deseas genara, puede ser entre 6,8 o 9
- Paso 4: selecciona el formato que deseas, puede ser entre HEX o HSL 
- Paso 5: accionas el botón "generar paleta" 
- Paso 6: se refleja el mensaje de "¡Paleta de 6 colores generada correctamente!", el numero del mensaje cambia según la cantidad de colores que selecciones 
- Paso 7: ya tenemos la paleta de colores reflejada
- paso 8: Pulsa Anclar debajo del color que quieras conservar. Para liberar ese color, pulsa Desanclar debajo de su código
- paso 9: puedes volver a accionar el botón de "generar paleta". OJO los colores anclados se conservan y los demás se generan nuevamente. 

## ¿Cómo reducir la cantidad de colores?
AVISO: Si seleccionaste la cantidad de 9 colores y quieres reducirlo a 6, fijate que no hayas anclado alguno de los tres últimas tarjetas de colores, es decir, 7, 8 o 9. Esto te impedirá generar una nueva paleta de colores.
  por ejemplo: si seleccionaste 9 colores con formato HSL, anclaste la penúltima color de paleta y quieres reducir la cantidad a 6. Te va a arrojar el siguiente mensaje "Desancla las útltimas tarjetas antes de reducir la cantidad."
- paso 1: Desancla las tarjetas que quedarían fuera de la nueva cantidad
- paso 2: Seleciona la cantidad de color que desees en ese momento 
- paso 3: Selecciona el formato 
- paso 4: Acciona el boton "generar paleta"

Así sucesivamente hasta que creas tu paleta de color perfecta a tu gusto o utilidad 

## Capturas del funcionamiento de la app

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

### Generación de colores 
### Consulta 8
**Prompt utilizado:**
¿Cuál es de las dos opciones para usarlo en background de los colores? Es que tengo dos opciones para el proyecto. El RGB y el HSL. ¿Cuál considerarías que es mejor para hacer la paleta?. Me dieron dos opciones para hacer o estructurar la paleta de colores. qué es RGB y HSL ¿Cuál es de las dos es mejor?
[respuesta del prompt 8](img/IA/consulta-HSL-RGB.png)

### Consultas sobre conceptos, métodos y funciones 
  ## Consulta 9
  **Prompt utilizado:**
  ¿Puedes explicar con palabras claras y sencilla lo que significaría,  Para qué sirve el Return en, como la funciones?
  [respuesta del prompt 9](img/IA/consulta-return.png)

 ### consulta 10
  **Prompt utilizado:**
  Me puedes explicar de forma más didáctica el método for each en la función 
  [respuesta del prompt 10](img/IA/consulta-metodo-forEach.png)

 ### consulta 11
  **Prompt utilizado:**
  Me puedes explicar cómo funciona el Math random
  [respuesta del prompt 11](img/IA/consulta-Math-random.png)







