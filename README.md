# taller6
## Autores
* Dany Benavides
* Juan Sebastián Gómez 
## Preguntas a responder
* Ve usted algún problema con los screenshots tomados por Cypress al intentar hacer Visual Regression Testing ?<br>
 Si, el tamaño de cada pantallazo cambia dependiendo de el tamaño y el formato en el que está cada ruta, haciendo que no se vean los cambios dada la mala resolucion.
* ¿Qué información puedo obtener de una imagen al usar resembleJS y que significado tiene cada uno de los componentes de la respuesta? <br>
  La información que se puede obtener información básica de la imagen como lo es la composición RGB y el brillo de la imagen
* ¿Qué información puedo obtener al comparar dos imagenes? <br>
misMatchPercentage: el porcentaje de missmatch que los cambios en las imágenes. <br>
isSameDimensions: si las imágenes tienen o no las mismas dimensiones.<br>
dimensionDifference: cuando las dimensiones son diferentes indica las diferencias que encuentra<br>
getImageDataUrl: la imagen con los cambios destacados dadas las opciones ingresadas por parámetro.<br>
* ¿Qué opciones se pueden seleccionar al realizar la comparación? <br>
Ignore Nothing<br>
Ignore Less<br>
Ignore Colors<br>
Ignore Antialiasing<br>
Ignore Alpha <br>
Use Original Size <br>
Scale to same size <br>
Pink/yellow for differences <br>
Opaque/Transparent<br>
Flat/movement/flat with diff intensity/movement with diff intensity/diff portion from the input<br>

## Como correr la aplicación

* Primero se debe ejecutar ingresar a la carpeta de prueba con el comando cd comparing_app
* Segundo ejecutar npm install
* Tercero ejecutar node server.js (Backend de la aplicación)
* Cuarto ejecutar cd compare
* Quinto ejecutar npx live-server --port=8080 (Front de la aplicación)
* Sexto ejecutar cd ..
* Septimo ejecutar npx live-sever --port=8082 (Servidor de imágenes)

## Reporte de la aplicación
El backend de la aplicación se realiza por medio de NodeJS, utilizando comunicación HTTP/REST por medio del uso de express.js. Adicionalmente, se tiene que el front de la
aplicación se ejecuta por medio de live-server, HTML, Bootstrap y JS. <br>

Ahora bien, la información se guarda en backend en un JSON local. En este objeto se guardan las direcciones de las imágenes de cada una de las pruebas y la información de la
comparación entre las diferentes imágenes obtenidas. <br>

Como herramienta para adquirir los screenshots de la paleta de colores se utiliza Cypress que es llamado a partir de una función Javascript dentro del backend. Adicionalmente,
cuando estos terminan se ejecuta una función llamada getDiff, que obtiene las diferencias entre las dos imágenes obtenidas por Cypress y con a partir de esta se obtiene
una y un reporte de las diferencias entre las imágenes.

## GIF de la aplicación funcionando
![Gif de la app](https://github.com/DanyAlej/taller6/blob/main/ezgif-3-b0f1de436227.gif)
