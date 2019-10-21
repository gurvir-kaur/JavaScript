//////////////// CREAR PUNTOS aleatoriamente//////////////

function crearPuntos(){

	//crear un numero random 
	return Math.round(Math.random()*10);
	
}


///////////////////// MOSTRAR PUNTOS /////////////////////
function mostrarPuntos(){

	document.getElementById("puntoA").innerHTML = "Punto A: " + crearPuntos() + "," + crearPuntos();
	document.getElementById("puntoB").innerHTML = "Punto B: " + crearPuntos() + "," + crearPuntos();
}

/////////////////// VALIDAR EL PUNTO INTRODUCIDO /////////////

var x , y;
function validarPunto(){

	x = document.getElementById("puntoX").value;
	y = document.getElementById("puntoY").value;

	

}