var formElement=null;var respuestaText=null;var respuestaText2=null;var respuestaSelect=null;var respuestaSelect2=null;var respuestasCheckbox=[];var respuestasCheckbox2=[];var respuestasMultiple=[];var respuestasMultiple2=[];var respuestasRadio=[];var respuestasRadio2=[];var nota=0;window.onload=function(){formElement=document.getElementById('myform');formElement.onsubmit=function(){inicializar();corregirTexto();corregirTexto2();corregirSelect();corregirSelect2();corregirCheckbox();corregirCheckbox2();corregirMultiple();corregirMultiple2();presentarNota();return false;} var xhttp=new XMLHttpRequest();xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){gestionarXml(this);}};xhttp.open("GET","xml/questions.xml",true);xhttp.send();} function gestionarXml(dadesXml){var xmlDoc=dadesXml.responseXML;var tituloInput=xmlDoc.getElementsByTagName("title")[0].innerHTML;ponerDatosInputHtml(tituloInput);respuestaText=xmlDoc.getElementsByTagName("answer")[0].innerHTML;var tituloSelect=xmlDoc.getElementsByTagName("title")[1].innerHTML;var opcionesSelect=[];var nopt2=xmlDoc.getElementById("p002").getElementsByTagName('option').length;for(i=0;i<nopt2;i++){opcionesSelect[i]=xmlDoc.getElementById("p002").getElementsByTagName('option')[i].innerHTML;} ponerDatosSelectHtml(tituloSelect,opcionesSelect);respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].innerHTML);var tituloCheckbox=xmlDoc.getElementsByTagName("title")[2].innerHTML;var opcionesCheckbox=[];var nopt3=xmlDoc.getElementById("p003").getElementsByTagName('option').length;for(i=0;i<nopt3;i++){opcionesCheckbox[i]=xmlDoc.getElementById("p003").getElementsByTagName('option')[i].innerHTML;} ponerDatosCheckboxHtml(tituloCheckbox,opcionesCheckbox);var nres=xmlDoc.getElementById("p003").getElementsByTagName('answer').length;for(i=0;i<nres;i++){respuestasCheckbox[i]=xmlDoc.getElementById("p003").getElementsByTagName("answer")[i].innerHTML;} var tituloMultiple=xmlDoc.getElementsByTagName("title")[3].innerHTML;var opcionesMultiple=[];var nopt4=xmlDoc.getElementById("p004").getElementsByTagName('option').length;for(i=0;i<nopt4;i++){opcionesMultiple[i]=xmlDoc.getElementById("p004").getElementsByTagName('option')[i].innerHTML;} ponerDatosMultipleHtml(tituloMultiple,opcionesMultiple);var nresMS=xmlDoc.getElementById("p004").getElementsByTagName('answer').length;for(i=0;i<nresMS;i++){respuestasMultiple[i]=xmlDoc.getElementById("p004").getElementsByTagName("answer")[i].innerHTML;} var tituloRadio=xmlDoc.getElementsByTagName("title")[4].innerHTML;var opcionesRadio=[];var nopt=xmlDoc.getElementById("p005").getElementsByTagName('option').length;for(i=0;i<nopt;i++){opcionesRadio[i]=xmlDoc.getElementById("p005").getElementsByTagName('option')[i].childNodes[0].nodeValue;} ponerDatosradio(tituloRadio,opcionesRadio);var nres=xmlDoc.getElementById("p005").getElementsByTagName('answer').length;for(i=0;i<nres;i++){respuestasRadio[i]=xmlDoc.getElementById("p005").getElementsByTagName("answer")[i].innerHTML;} var tituloInput2=xmlDoc.getElementsByTagName("title")[5].innerHTML;ponerDatosInputHtml2(tituloInput2);respuestaText2=xmlDoc.getElementsByTagName("answer")[5].innerHTML;var tituloSelect2=xmlDoc.getElementsByTagName("title")[6].innerHTML;var opcionesSelect2=[];var nopt7=xmlDoc.getElementById("p007").getElementsByTagName('option').length;for(i=0;i<nopt7;i++){opcionesSelect2[i]=xmlDoc.getElementById("p007").getElementsByTagName('option')[i].innerHTML;} ponerDatosSelectHtml2(tituloSelect2,opcionesSelect2);respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);var tituloCheckbox2=xmlDoc.getElementsByTagName("title")[7].innerHTML;var opcionesCheckbox2=[];var nopt8=xmlDoc.getElementById("p008").getElementsByTagName('option').length;for(i=0;i<nopt8;i++){opcionesCheckbox2[i]=xmlDoc.getElementById("p008").getElementsByTagName('option')[i].innerHTML;} ponerDatosCheckboxHtml2(tituloCheckbox2,opcionesCheckbox2);var nres=xmlDoc.getElementById("p008").getElementsByTagName('answer').length;for(i=0;i<nres;i++){respuestasCheckbox2[i]=xmlDoc.getElementById("p008").getElementsByTagName("answer")[i].innerHTML;} var tituloMultiple2=xmlDoc.getElementsByTagName("title")[8].innerHTML;var opcionesMultiple2=[];var nopt9=xmlDoc.getElementById("p009").getElementsByTagName('option').length;for(i=0;i<nopt9;i++){opcionesMultiple2[i]=xmlDoc.getElementById("p009").getElementsByTagName('option')[i].innerHTML;} ponerDatosMultipleHtml2(tituloMultiple2,opcionesMultiple2);var nresMS2=xmlDoc.getElementById("p009").getElementsByTagName('answer').length;for(i=0;i<nresMS2;i++){respuestasMultiple2[i]=xmlDoc.getElementById("p009").getElementsByTagName("answer")[i].innerHTML;} var tituloRadio2=xmlDoc.getElementsByTagName("title")[9].innerHTML;var opcionesRadio2=[];var nopt=xmlDoc.getElementById("p010").getElementsByTagName('option').length;for(i=0;i<nopt;i++){opcionesRadio2[i]=xmlDoc.getElementById("p010").getElementsByTagName('option')[i].childNodes[0].nodeValue;} ponerDatosradio2(tituloRadio2,opcionesRadio2);var nres=xmlDoc.getElementById("p010").getElementsByTagName('answer').length;for(i=0;i<nres;i++){respuestasRadio2[i]=xmlDoc.getElementById("p010").getElementsByTagName("answer")[i].innerHTML;}} function corregirTexto(){var s=formElement.elements[0].value;if(s==respuestaText){darRespuestaHtml("P1: Exacto!");nota+=1;} else darRespuestaHtml("P1: Respuesta equivocada");} function corregirSelect(){var sel=formElement.elements[1];if(sel.selectedIndex==respuestaSelect){darRespuestaHtml("P2: Correcto");nota+=1;} else darRespuestaHtml("P2: Incorrecto");} function corregirCheckbox(){var f=formElement;var escorrecta=[];for(i=0;i<f.color.length;i++){if(f.color[i].checked){escorrecta[i]=false;for(j=0;j<respuestasCheckbox.length;j++){if(i==respuestasCheckbox[j])escorrecta[i]=true;}}} for(i=0;i<f.color.length;i++){if(f.color[i].checked){if(escorrecta[i]){nota+=1.0/respuestasCheckbox.length;darRespuestaHtml("P3: "+i+" correcta");nota+=1;}else{nota-=1.0/respuestasCheckbox.length;darRespuestaHtml("P3: "+i+" incorrecta");}}}} function corregirMultiple(){var mySel=formElement.elements[2];if(mySel.selectedIndex==respuestasMultiple){darRespuestaHtml("P4: Correcto");nota+=1;} else darRespuestaHtml("P4: Incorrecto");} function corregirTexto2(){var s1=formElement.elements[3].value;if(s1==respuestaText2){darRespuestaHtml("P6: Exacto!");nota+=1;} else darRespuestaHtml("P6: Respuesta equivocada");} function corregirSelect2(){var sel2=formElement.elements[4];if(sel2.selectedIndex==respuestaSelect2){darRespuestaHtml("P7: Correcto");nota+=1;} else darRespuestaHtml("P7: Incorrecto");} function corregirCheckbox2(){var f=formElement;var escorrecta=[];for(i=0;i<f.color.length;i++){if(f.color[i].checked){escorrecta[i]=false;for(j=0;j<respuestasCheckbox2.length;j++){if(i==respuestasCheckbox2[j])escorrecta[i]=true;}}} for(i=0;i<f.color.length;i++){if(f.color[i].checked){if(escorrecta[i]){nota+=1.0/respuestasCheckbox2.length;darRespuestaHtml("P8: "+i+" correcta");nota+=1;}else{nota-=1.0/respuestasCheckbox2.length;darRespuestaHtml("P8: "+i+" incorrecta");}}}} function corregirMultiple2(){var mySel2=formElement.elements[5];if(mySel2.selectedIndex==respuestasMultiple2){darRespuestaHtml("P9: Correcto");nota+=1;} else darRespuestaHtml("P9: Incorrecto");} function ponerDatosInputHtml(t){document.getElementById("tituloInput").innerHTML=t;} function ponerDatosSelectHtml(t,opt){document.getElementById("tituloSelect").innerHTML=t;var select=document.getElementsByTagName("select")[0];for(i=0;i<opt.length;i++){var option=document.createElement("option");option.text=opt[i];option.value=i+1;select.options.add(option);}} function ponerDatosCheckboxHtml(t,opt){var checkboxContainer=document.getElementById('checkboxDiv');document.getElementById('tituloCheckbox').innerHTML=t;for(i=0;i<opt.length;i++){var input=document.createElement("input");var label=document.createElement("label");label.innerHTML=opt[i];label.setAttribute("for","color_"+i);input.type="checkbox";input.name="color";input.id="color_"+i;;checkboxContainer.appendChild(input);checkboxContainer.appendChild(label);checkboxContainer.appendChild(document.createElement("br"));}} function ponerDatosMultipleHtml(t,opt){document.getElementById("tituloMultiple").innerHTML=t;var mSelect=document.getElementsByTagName("select")[1];for(i=0;i<opt.length;i++){var option=document.createElement("option");option.text=opt[i];option.value=i+1;mSelect.options.add(option);}} function ponerDatosradio(t,opt){var radioContainer=document.getElementById('tituloRadio');var h3=document.createElement("h3");h3.innerHTML=t;radioContainer.appendChild(h3);for(i=0;i<opt.length;i++){var input=document.createElement("input");var label=document.createElement("label");label.innerHTML=opt[i];label.setAttribute("for","radio1_"+i);input.type="radio";input.name="radio1";input.id="radio1_"+i;;radioContainer.appendChild(input);radioContainer.appendChild(label);radioContainer.appendChild(document.createElement("br"));}} function ponerDatosInputHtml2(t){document.getElementById("tituloInput2").innerHTML=t;} function ponerDatosSelectHtml2(t,opt){document.getElementById("tituloSelect2").innerHTML=t;var select=document.getElementsByTagName("select")[2];for(i=0;i<opt.length;i++){var option=document.createElement("option");option.text=opt[i];option.value=i+1;select.options.add(option);}} function ponerDatosCheckboxHtml2(t,opt){var checkboxContainer2=document.getElementById('checkboxDiv2');document.getElementById('tituloCheckbox2').innerHTML=t;for(i=0;i<opt.length;i++){var input=document.createElement("input");var label=document.createElement("label");label.innerHTML=opt[i];label.setAttribute("for","color_"+i);input.type="checkbox";input.name="color";input.id="color_"+i;;checkboxContainer2.appendChild(input);checkboxContainer2.appendChild(label);checkboxContainer2.appendChild(document.createElement("br"));}} function ponerDatosMultipleHtml2(t,opt){document.getElementById("tituloMultiple2").innerHTML=t;var mSelect=document.getElementsByTagName("select")[3];for(i=0;i<opt.length;i++){var option=document.createElement("option");option.text=opt[i];option.value=i+1;mSelect.options.add(option);}} function ponerDatosradio2(t,opt){var radioContainer=document.getElementById('tituloRadio2');var h3=document.createElement("h3");h3.innerHTML=t;radioContainer.appendChild(h3);for(i=0;i<opt.length;i++){var input=document.createElement("input");var label=document.createElement("label");label.innerHTML=opt[i];label.setAttribute("for","radio1_"+i);input.type="radio";input.name="radio1";input.id="radio1_"+i;;radioContainer.appendChild(input);radioContainer.appendChild(label);radioContainer.appendChild(document.createElement("br"));}} function darRespuestaHtml(r){var p=document.createElement("p");var node=document.createTextNode(r);p.appendChild(node);document.getElementById('resultadosDiv').appendChild(p);} function presentarNota(){darRespuestaHtml("Nota: "+nota+" puntos sobre 3");} function inicializar(){document.getElementById('resultadosDiv').innerHTML="";nota=0.0;}