Algoritmo tablaNHastaM
	// Objetivo: muestre por pantalla la tabla de multiplicación del número que ingrese el usuario. 
	// para definir hasta que número desea que muestre la tabla de multiplicación el usuario 
	// también deberá ingresar este valor.
	// DECLARO VARIABLES
	DEFINIR tablaNum, tablaHast, contador, multiplicacion Como entero 
	contador = 1;
	Escribir "Ingrese el número del cual desea conocer la tabla de multiplicación:" sin saltar
	Leer tablaNum
	Escribir "Ingrese el número hasta donde desea conocer la tabla:"
	Leer tablaHasta
	// Sentencia repetitiva para realizar la tabla de multiplicar
	Repetir
		multiplicacion = tablaNum * contador
	    Escribir tablaNum  " * "  contador  " = "  multiplicacion
		contador = contador + 1
	Hasta Que (contador > TablaHasta)
	
	
FinAlgoritmo
