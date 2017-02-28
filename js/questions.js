var formElement=null;
var respuestaText=null;
var respuestaText2=null;
var respuestaSelect=null;
var respuestaSelect2=null;
var respuestasCheckbox = [];
var respuestasCheckbox2 = [];
var respuestasMultiple = [];
var respuestasMultiple2 = [];
var respuestasRadio = [];
var respuestasRadio2 = [];

var nota = 0;  //nota de la prueba sobre 3 puntos (hay 3 preguntas)

//**************************************************************************************************** 
//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function(){ 

 //CORREGIR al apretar el botón
 formElement=document.getElementById('myform');
 formElement.onsubmit=function(){
   inicializar();
   corregirTexto();
   corregirTexto2();
   corregirSelect();
   corregirSelect2();
   corregirCheckbox();
   corregirCheckbox2();
   corregirMultiple();
   corregirMultiple2();
   //corregirRadio();
   //corregirRadio2();
   
   presentarNota();   
   return false;
 }
 
 //LEER XML de xml/preguntas.xml
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET", "xml/questions.xml", true);
 xhttp.send();
}

//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/preguntas.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml){
 var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc
 
 //Pregunta TEXT
 //Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
 
 var tituloInput=xmlDoc.getElementsByTagName("title")[0].innerHTML;
 ponerDatosInputHtml(tituloInput);
 respuestaText=xmlDoc.getElementsByTagName("answer")[0].innerHTML;
 
 //Pregunta SELECT
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 
 var tituloSelect=xmlDoc.getElementsByTagName("title")[1].innerHTML;
 var opcionesSelect = [];
 var nopt2 = xmlDoc.getElementById("p002").getElementsByTagName('option').length;
  for (i = 0; i < nopt2; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("p002").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml(tituloSelect,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].innerHTML);

 //Pregunta CHECKBOX
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 
 var tituloCheckbox = xmlDoc.getElementsByTagName("title")[2].innerHTML;
 var opcionesCheckbox = [];
 var nopt3 = xmlDoc.getElementById("p003").getElementsByTagName('option').length;
 for (i = 0; i < nopt3; i++) { 
    opcionesCheckbox[i]=xmlDoc.getElementById("p003").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosCheckboxHtml(tituloCheckbox,opcionesCheckbox);
 var nres = xmlDoc.getElementById("p003").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox[i]=xmlDoc.getElementById("p003").getElementsByTagName("answer")[i].innerHTML;
 }
 
 //Pregunta MULTIPLE
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 
 var tituloMultiple = xmlDoc.getElementsByTagName("title")[3].innerHTML;
 var opcionesMultiple = [];
 var nopt4 = xmlDoc.getElementById("p004").getElementsByTagName('option').length;
  for (i = 0; i < nopt4; i++) { 
    opcionesMultiple[i] = xmlDoc.getElementById("p004").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosMultipleHtml(tituloMultiple,opcionesMultiple);
 var nresMS = xmlDoc.getElementById("p004").getElementsByTagName('answer').length;
 for (i = 0; i < nresMS; i++) { 
  respuestasMultiple[i]=xmlDoc.getElementById("p004").getElementsByTagName("answer")[i].innerHTML;
 }
 
 //Pregunta RADIO
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 
 var tituloRadio = xmlDoc.getElementsByTagName("title")[4].innerHTML;
 var opcionesRadio = [];
 var nopt = xmlDoc.getElementById("p005").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesRadio[i]=xmlDoc.getElementById("p005").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }  
 ponerDatosradio(tituloRadio,opcionesRadio);
 var nres = xmlDoc.getElementById("p005").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasRadio[i]=xmlDoc.getElementById("p005").getElementsByTagName("answer")[i].innerHTML;
 }
 
  //Pregunta TEXT 2
 //Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
 var tituloInput2 = xmlDoc.getElementsByTagName("title")[5].innerHTML;
 ponerDatosInputHtml2(tituloInput2);
 respuestaText2=xmlDoc.getElementsByTagName("answer")[5].innerHTML;
 
 //Pregunta SELECT 2
 //Recuperamos el título y las opciones, guardamos la respuesta correcta
 var tituloSelect2 = xmlDoc.getElementsByTagName("title")[6].innerHTML;
 var opcionesSelect2 = [];
 var nopt7 = xmlDoc.getElementById("p007").getElementsByTagName('option').length;
  for (i = 0; i < nopt7; i++) { 
    opcionesSelect2[i] = xmlDoc.getElementById("p007").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml2(tituloSelect2,opcionesSelect2);
 respuestaSelect2 = parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);
 
 // Pregunta CHECKBOX 2
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var tituloCheckbox2 = xmlDoc.getElementsByTagName("title")[7].innerHTML;
 var opcionesCheckbox2 = [];
 var nopt8 = xmlDoc.getElementById("p008").getElementsByTagName('option').length;
 for (i = 0; i < nopt8; i++) { 
    opcionesCheckbox2[i]=xmlDoc.getElementById("p008").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosCheckboxHtml2(tituloCheckbox2,opcionesCheckbox2);
 var nres = xmlDoc.getElementById("p008").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox2[i]=xmlDoc.getElementById("p008").getElementsByTagName("answer")[i].innerHTML;
 }
 
 //Pregunta MULTIPLE 2
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 
 var tituloMultiple2 = xmlDoc.getElementsByTagName("title")[8].innerHTML;
 var opcionesMultiple2 = [];
 var nopt9 = xmlDoc.getElementById("p009").getElementsByTagName('option').length;
  for (i = 0; i < nopt9; i++) { 
    opcionesMultiple2[i] = xmlDoc.getElementById("p009").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosMultipleHtml2(tituloMultiple2,opcionesMultiple2);
 var nresMS2 = xmlDoc.getElementById("p009").getElementsByTagName('answer').length;
 for (i = 0; i < nresMS2; i++) { 
  respuestasMultiple2[i]=xmlDoc.getElementById("p009").getElementsByTagName("answer")[i].innerHTML;
 }

 //Pregunta RADIO 2
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 
 var tituloRadio2 = xmlDoc.getElementsByTagName("title")[9].innerHTML;
 var opcionesRadio2 = [];
 var nopt = xmlDoc.getElementById("p010").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesRadio2[i]=xmlDoc.getElementById("p010").getElementsByTagName('option')[i].childNodes[0].nodeValue;
 }  
 ponerDatosradio2(tituloRadio2,opcionesRadio2);
 var nres = xmlDoc.getElementById("p010").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasRadio2[i]=xmlDoc.getElementById("p010").getElementsByTagName("answer")[i].innerHTML;
 }
} 

 
//****************************************************************************************************
//implementación de la corrección

function corregirTexto(){
  var s=formElement.elements[0].value;     
  if (s==respuestaText) {
   darRespuestaHtml("P1: Exacto!");
   nota +=1;
  }
    else darRespuestaHtml("P1: Respuesta equivocada");
}

function corregirSelect(){
  //Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
  //para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
  //luego comparar ese value con el value guardado en answer
  var sel = formElement.elements[1];  
  if (sel.selectedIndex==respuestaSelect) {
   darRespuestaHtml("P2: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P2: Incorrecto");
}

function corregirCheckbox(){
  //Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color.length; i++) {  //"color" es el nombre asignado a todos los checkbox
   if (f.color[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCheckbox.length; j++) {
     if (i==respuestasCheckbox[j]) escorrecta[i]=true;
    }
   } 
  }
  //Por cada opción que está chequedada, si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
  for (i = 0; i < f.color.length; i++) {   
   if (f.color[i].checked) {
    if (escorrecta[i]) {
     nota +=1.0/respuestasCheckbox.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P3: "+i+" correcta");
	 nota +=1;
    } else {
     nota -=1.0/respuestasCheckbox.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P3: "+i+" incorrecta");
    }   
   }
  }
}

function corregirMultiple(){
  //Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
  //para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
  //luego comparar ese value con el value guardado en answer
  var mySel = formElement.elements[2];  
  if (mySel.selectedIndex==respuestasMultiple) {
   darRespuestaHtml("P4: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P4: Incorrecto");
}

// FALTA RADIO

function corregirTexto2(){
  var s1=formElement.elements[3].value;     
  if (s1==respuestaText2) {
   darRespuestaHtml("P6: Exacto!");
   nota +=1;
  }
    else darRespuestaHtml("P6: Respuesta equivocada");
}


function corregirSelect2(){
  //Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
  //para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
  //luego comparar ese value con el value guardado en answer
  var sel2 = formElement.elements[4];  
  if (sel2.selectedIndex==respuestaSelect2) {
   darRespuestaHtml("P7: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P7: Incorrecto");
}

function corregirCheckbox2(){
  //Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color.length; i++) {  //"color" es el nombre asignado a todos los checkbox
   if (f.color[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCheckbox2.length; j++) {
     if (i==respuestasCheckbox2[j]) escorrecta[i]=true;
    }
   } 
  }
  //Por cada opción que está chequedada, si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
  for (i = 0; i < f.color.length; i++) {   
   if (f.color[i].checked) {
    if (escorrecta[i]) {
     nota +=1.0/respuestasCheckbox2.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P8: "+i+" correcta");
     nota +=1;	 
    } else {
     nota -=1.0/respuestasCheckbox2.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P8: "+i+" incorrecta");
    }   
   }
  }
}

function corregirMultiple2(){
  //Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
  //para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
  //luego comparar ese value con el value guardado en answer
  var mySel2 = formElement.elements[5];  
  if (mySel2.selectedIndex==respuestasMultiple2) {
   darRespuestaHtml("P9: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P9: Incorrecto");
}




//****************************************************************************************************
// poner los datos recibios en el HTML

// TEXT 1
function ponerDatosInputHtml(t){
 document.getElementById("tituloInput").innerHTML = t;
}

// SELECT 1

function ponerDatosSelectHtml(t,opt){                                       
  document.getElementById("tituloSelect").innerHTML=t;
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }
 
}

// CHECKBOX 1

function ponerDatosCheckboxHtml(t,opt){
 var checkboxContainer=document.getElementById('checkboxDiv');
 document.getElementById('tituloCheckbox').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
	checkboxContainer.appendChild(document.createElement("br"));
 }  
}

// MULTIPLE

function ponerDatosMultipleHtml(t,opt){
  document.getElementById("tituloMultiple").innerHTML=t;
     //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.   
  var mSelect = document.getElementsByTagName("select")[1];
  
     //Bucle para rellenar todas las opciones de select
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    mSelect.options.add(option);
 }  
}

// RADIO

function ponerDatosradio(t,opt){
 var radioContainer=document.getElementById('tituloRadio');
 var h3 = document.createElement("h3");
 h3.innerHTML = t;
 radioContainer.appendChild(h3); 
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "radio1_"+i);
    input.type="radio";
    input.name="radio1";
    input.id="radio1_"+i;;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
	radioContainer.appendChild(document.createElement("br"));
 }  
}

// TEXT 2
function ponerDatosInputHtml2(t){
 document.getElementById("tituloInput2").innerHTML = t;
}

// SELECT 2

function ponerDatosSelectHtml2(t,opt){
  document.getElementById("tituloSelect2").innerHTML=t;
  var select = document.getElementsByTagName("select")[2];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }
 
}

// CHECKBOX 2

function ponerDatosCheckboxHtml2(t,opt){
 var checkboxContainer2=document.getElementById('checkboxDiv2');
 document.getElementById('tituloCheckbox2').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;;    
    checkboxContainer2.appendChild(input);
    checkboxContainer2.appendChild(label);
	checkboxContainer2.appendChild(document.createElement("br"));
 }  
}

// MULTIPLE 2

function ponerDatosMultipleHtml2(t,opt){
  document.getElementById("tituloMultiple2").innerHTML=t;
     //RECUERDA document se refiere al documento HTML, xmlDOC es el documento leido XML.   
  var mSelect = document.getElementsByTagName("select")[3];
  
     //Bucle para rellenar todas las opciones de select
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    mSelect.options.add(option);
 }  
}

// RADIO 2

function ponerDatosradio2(t,opt){
 var radioContainer=document.getElementById('tituloRadio2');
 var h3 = document.createElement("h3");
 h3.innerHTML = t;
 radioContainer.appendChild(h3); 
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "radio1_"+i);
    input.type="radio";
    input.name="radio1";
    input.id="radio1_"+i;;    
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
	radioContainer.appendChild(document.createElement("br"));
 }  
}
//****************************************************************************************************
//Gestionar la presentación de las respuestas
function darRespuestaHtml(r){
 var p = document.createElement("p");
 var node = document.createTextNode(r);
 p.appendChild(node);
 document.getElementById('resultadosDiv').appendChild(p);
}

function presentarNota(){
   darRespuestaHtml("Nota: "+nota+" puntos sobre 3");
}

function inicializar(){
   document.getElementById('resultadosDiv').innerHTML = "";
   nota=0.0;
}