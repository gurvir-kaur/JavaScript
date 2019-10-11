//////////////////////   SCRIPT DE JAVA.HTML   /////////////////////////////////

function doHola(){
	alert('hola');
}

///////////////////////////////////////////////////////////////////

function seeText(){
	document.getElementById("demo").innerHTML = "Hello JavaScript!";
}

///////////////////////////////////////////////////////////////////

// funcion para encender y apagar la bombilla

 function bulb(){

	var elem = document.getElementById('myImage');
	if(estado == 0){
		elem.src='on.png';
		estado = 1;
	}
	else {

		elem.src='off.png';
		estado = 0;
	}
	
} 

var estado = 0;

var holder = document.getElementById('myImage');
///////////////////////////////////////////////////////////////////

/// enciende y apaga despues de cada 3 clicks 

var contador = 0;

function click_3(){
	contador += 1;

  if(contador%3 == 0){
  	Encender();
  }

  if(contador%6 == 0){
  	Apagar();
  }
}


//////////////////////////////////////////////////////////////////

/// enciande a cada 3 clicks y apaga a cada 6  

function click_3_6(){
	contador += 1;

  if(contador%3 == 0){
  	Encender();
  }

  if(contador%9 == 0){
  	Apagar();
  }
}


/*
var button = document.getElementById("clicks"), contador = 0;

button.onclick = function() {
  contador += 1;
  button.innerHTML = "Clicks: " + contador;

}*/

///////////////////////////////////////////////////////////////////
function Switch(){

	if(estado == 0){
		estado = 1;
	}
	else {
		estado = 0;
	}

	if(estado == 0){
		Encender();
	}
	else{
		Apagar();
	}

}
///////////////////////////////////////////////////////////////////

function Encender(){
	holder.src ='on.png';
}
///////////////////////////////////////////////////////////////////

function Apagar(){
	holder.src ='off.png';
}

///////////////////////////////////////////////////////////////////

