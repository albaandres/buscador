
alert("Bienvenido al buscador de palabras");

let palabra = document.getElementById("palabra");

var cajas= document.querySelector(".texto").innerHTML;

//palabra.addEventListener("keyup", buscaPalabra,true);



function buscaPalabra(){


   if(palabra.value!=""){
        var sustituir="<mark>"+palabra.value+"</mark>";
    
  //con esto he intentado pasar la palabra y el texto a mayuscula para facilitar el trabajo pero no lo he conseguido. 
    /*var textoMin=texto.value.toLowerCase();
    var palabraMin=palabra.value.toLowerCase();*/


    
    var posicion=document.querySelector(".texto").innerHTML.indexOf(palabra.value);
    
   
    while(posicion>-1){
        document.querySelector(".texto").innerHTML=document.querySelector(".texto").innerHTML.substring(0,posicion)+sustituir+document.querySelector(".texto").innerHTML.substring(posicion+(palabra.value.length),document.querySelector(".texto").innerHTML.length);
        posicion=document.querySelector(".texto").innerHTML.indexOf(palabra.value,posicion+(sustituir.length));
        console.log(posicion);
    }

}
    

}


