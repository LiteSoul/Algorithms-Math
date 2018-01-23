Algoritmo PromedioDeCuatro
	// Objetivo: Devolver el promedio de cuatro numeros ingresados por el usuario
	// declaro variables
	Definir acumulador,promedio, numero1 como real// no existe el tipo decimal en pseint
	// repetitiva para solicitar los cuatro numeros
	PARA i<-1 Hasta 4 con Paso 1
		Escribir "Ingrese el número: "  i 
		Leer numero1
	    acumulador = acumulador + numero1
	FINPARA
	
	promedio = acumulador/4 
	Escribir "El promedio de los números ingresados es: " promedio
	
FinAlgoritmo
