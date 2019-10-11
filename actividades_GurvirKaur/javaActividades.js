//////////////////////// Functions //////////////////////////////

var numero = null;

/////////////////////// función COMPROBAR ///////////////////

function comprobar(){

	// el valor pasado via input hay que asignarlo dentro de la función llamada. 
	// para que la guarde bien. 
	numero = document.getElementById("this_number").value;

	// para imprimir el valor de la variable ->>>>  alert(numero);

	if(numero >= 0 && numero <= 10000){
		
		//llamar la funcion is_prime para averiguar si es primer o no

		if(is_prime(numero)){

			alert("Es primer.")
		}
		else{

			alert("No es primer.")
		}

	}

	else{

		alert("El nombre no està dins del rang! [0:10000]");
	}
}

//////////////////// Function PRIMER ///////////

function is_prime(n){

  if (n === 1){

    return false;
  }

  else if(n === 2){

	    return true;
	}
	  else
		  {
		    for(var x = 2; x < n; x++){

		      if(n % x === 0){

		        return false;
		      }
		    }
		    return true;  
		  }
};

///////////////funcion ACERTADO ///////////////////

var numero_introducido = null, contador = 0;

//crear un numero random 
var aleatorio = Math.round(Math.random()*10);

function acertado(){

	contador += 1;

	console.log(aleatorio);

	numero_introducido = document.getElementById("numero_juego").value;

	if(numero_introducido == aleatorio){
		alert("Has Acertado!");
		document.getElementById("clicks").innerHTML = "Clicks: " + contador;
	}
	else{
		if(numero_introducido < aleatorio){
			alert("El numero es mayor del que has introducido.")
		}
		else{
			alert("El numero es menor del que has introcducido.")
		}
	}
};


/////////////////////// función MULTIPLOS /////////////////////


// Array que contendra los valores multiples del 13
var multiples_13=[];

function multiplos_de_13(){

	// bucle del 1 al 2000
        for(var i=1;i<=2000;i++)
        {
            if(multiple(i,13))
                multiples_13.push(i);
 
        }
        document.getElementById("multiplos").style.display = "block";
        document.getElementById("multiplos").innerHTML = multiples_13;
};
 
 ////////////////Funcion para calcular si el numero es multiplo ////////

 //utilizando el modulo de la division
        
function multiple(valor, multiple){
            resto = valor % multiple;
            if(resto==0)
                return true;
            else
                return false;
};