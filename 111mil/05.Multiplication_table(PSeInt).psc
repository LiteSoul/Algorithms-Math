Algoritmo tablaNHastaM
	// Objetivo: muestre por pantalla la tabla de multiplicaci�n del n�mero que ingrese el usuario. 
	// para definir hasta que n�mero desea que muestre la tabla de multiplicaci�n el usuario 
	// tambi�n deber� ingresar este valor.
	// DECLARO VARIABLES
	DEFINIR tablaNum, tablaHast, contador, multiplicacion Como entero 
	contador = 1;
	Escribir "Ingrese el n�mero del cual desea conocer la tabla de multiplicaci�n:" sin saltar
	Leer tablaNum
	Escribir "Ingrese el n�mero hasta donde desea conocer la tabla:"
	Leer tablaHasta
	// Sentencia repetitiva para realizar la tabla de multiplicar
	Repetir
		multiplicacion = tablaNum * contador
	    Escribir tablaNum  " * "  contador  " = "  multiplicacion
		contador = contador + 1
	Hasta Que (contador > TablaHasta)
	
	
FinAlgoritmo
