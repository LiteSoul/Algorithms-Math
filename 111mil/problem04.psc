Algoritmo bancosFaltantes
	// DEFINIR VARIABLES
	Definir cantBancosAula, cantAlumInscriptos, bancosFaltan como entero 
	// INGRESO DE DATOS
	Escribir "Ingrese la cantidad de bancos disponibles en el aula:" sin saltar
	Leer cantBancosAula;
    Escribir "Ingrese la cantidad de alumnos inscriptos al cursado:" sin saltar
		Leer cantAlumInscriptos;
	// REALIZO LOS CALCULOS
	SI (cantBancosAula >= cantAlumInscriptos) ENTONCES 
	    Escribir "Los bancos del aula son suficientes"
	SINO
		bancosFaltan = cantAlumInscriptos - cantBancosAula
	    Escribir  "La cantidad de bancos faltantes es: " bancosFaltan
	FIN SI
	
FinAlgoritmo
