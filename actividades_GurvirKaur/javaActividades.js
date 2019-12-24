//////////////////////// Functions //////////////////////////////

/**

 * @fileoverview Actividades de M6: Desarrollo Web en entorno Cliente

 *

 * @author     Gurvir Kaur

*/


/**
@author Gurvir
@type {number} 
*/
var numero = null;

/////////////////////// función COMPROBAR ///////////////////

/** 
@func comprobar
* @description
*	La función comprobar realitza los seguientes pasos:
* 	verifica si el numero introducido esta dentro del dicho rango y 
	confirma si el numero es primo o no, llamando la función: is_prime
*/
function comprobar(){

	// el valor pasado via input hay que asignarlo dentro de la función llamada. 
	// para que la guarde bien. 
	numero = document.getElementById("this_number").value;

	// para imprimir el valor de la variable ->>>>  alert(numero);
	
	if(Number.isInteger(+numero) && numero != ""){

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
	else{
		alert("Not a number!")
	}
};

//////////////////// Function PRIMER //////////////

/** 
@func is_prime
@param {number}
@return  {boolean}
* @description
*	La función is_prime chequea si el numero pasado como parametro "n" es primo o no.
*/
function is_prime(n){
	if (n == 1){
		return false;
	}
	else{
		if(n == 2){
	  		return true;
		}
		else{
			for(var x = 2; x < n; x++){
				if(n % x === 0){
					return false;
				}
			}
			return true;
		}
	} 
};

///////////////funcion ACERTADO ///////////////////

/** 
@type {number}
* @description
*	Esta variable sirve para gurdar el valor introducido por usuario y usarlo en 
	la funcion acertado.
*/ 
var numero_introducido = null

/** 
@type {number}
* @description
*	Esta variable sirve para guardar el numero de clicks.
*/ 
var contador = 0;

/** 
@type {number}
* @description
*	Esta variable guarda un numero aleatorio.
*/ 
var aleatorio = Math.round(Math.random()*500);


/** 
@func acertado
* @description
*	La funcion acertado examina si el usuario ha acertado con el numero aleatorio.
*/
function acertado(){

	contador += 1;

	console.log(aleatorio);

	numero_introducido = document.getElementById("numero_juego").value;

	if(Number.isInteger(+numero_introducido) && numero_introducido != ""){

		if(numero_introducido >= 0 && numero_introducido <= 500){

			if(numero_introducido == aleatorio){
				alert("Has Acertado!");
				document.getElementById("clicks").innerHTML = "Clicks: " + contador;
			}
			else
			{
				if(numero_introducido < aleatorio){
					alert("El numero es mayor del que has introducido.")
				}
				else{
					alert("El numero es menor del que has introcducido.")
				}
			}
		}
		else{
			alert("El nombre no està dins del rang! [0:500]")
		}
	}
	else{
		alert("Nombre Invàlid!")
	}
};


/////////////////////// función MULTIPLOS /////////////////////


// Array que contendra los valores multiples del 13
var multiplos_13=[], suma = 0, producto = 1;

/**
@func multiplos_de_13
* @description
*	Esta función devuelve multiplos de 13 hasta 2000.
*/
function multiplos_de_13(){

	// bucle del 1 al 2000
        for(var i=1;i<=2000;i++){
            if(multiple(i,13)){

            	suma = suma + i;

            	producto = producto * i;

            	if(producto > 7.257415615307994e+306){
            		producto = 7.257415615307994e+306;
            	}


                multiplos_13.push(i);

                //+ "<br/>"
            }
 
        }

        document.getElementById("multiplos").innerHTML = multiplos_13;
        document.getElementById("suma").innerHTML = suma;
        document.getElementById("producto").innerHTML =  producto;
};
 
 ////////////////Función para calcular si el numero es multiplo ////////

 //utilizando el modulo de la division
/**
@func multiple
@param {number}
@param {number}
@return {boolean}
* @description
*	La funcion multiple verifica si el paramentro "valor" es multiplo de "multiple".
*/
function multiple(valor, multiple){

	resto = valor % multiple;

	if(resto==0){
		return true;
	}
    else{
    	return false;
    }
};