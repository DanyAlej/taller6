function generateRules(initialColor) {
    var rgb = hslToRgb(initialColor/359, 0.5, 0.5);
    var r = rgb[0]
    var g = rgb[1]
    var b = rgb[2]
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function randomPalette(){

  var initialColor = Math.floor(Math.random() * 360);
  var bg = generateRules(initialColor);
  document.body.style.backgroundColor = bg;

  //Cambiar el color del texto de los elementos
  var boxes = document.querySelectorAll(".color-view");

  initialColor+= 72;
  var colorTexto = generateRules(initialColor);
  for (i = 0; i < boxes.length; i++) {
      boxes[i].style.color = colorTexto;
  }

  //Cambiar el color del borde de los elementos
  initialColor+= 72;
  var border = generateRules(initialColor);
  for (i = 0; i < boxes.length; i++) {
      boxes[i].style.borderColor = border;
  }

  //Cambiar el color del fondo de los elementos
  initialColor+= 72;
  var bgElem = generateRules(initialColor);
  for (i = 0; i < boxes.length; i++) {
      boxes[i].style.backgroundColor = bgElem;
  }


  //Cambiar el texto del encabezado
  initialColor+= 72;
  var h2color = generateRules(initialColor);
  var h2 = document.querySelectorAll("h2");
  for (i = 0; i < h2.length; i++) {
      h2[i].style.color = h2color;
  }

  var textArea = document.getElementById("css-rules");
  var textoVariable = `
.website-background{ color: `+ bg +`;}
.element-text{ color: `+colorTexto+`;}
.element-border{ border-color: `+border+`;}
.element-background{ background-color: `+bgElem+`;}
.header{ color: `+h2color+`;}
`;
  textArea.value = textoVariable;
}



function cleanPalette(){
  var textArea = document.getElementById("css-rules");
  textArea.value = `
.website-background{ color: #FFFFFF;}
.element-text{ color: #FFFFFF;}
.element-border{ border-color: #FFFFFF;}
.element-background{ background-color: #FFFFFF;}
.header{ color: #FFFFFF;}
`;
  for (let i = 1; i <= 5; i++) {
      var dynamic = "color" + i;
      document.getElementById(dynamic).removeAttribute("style");
  }
  document.body.removeAttribute("style");

  var h2 = document.querySelectorAll("h2");
  for (i = 0; i < h2.length; i++) {
      h2[i].removeAttribute("style");
  }
}
