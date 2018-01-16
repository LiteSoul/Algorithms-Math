Algoritmo nombreDelMes
	// OBJETIVO: Mostrar el nombre  del mes que corresponde al numero ingresado por el usuario
	// DEFINO VARIABLES
	Definir mes Como Entero
	// INICIALIZO VARIABLES
	mes = 0
	// controlo que el valor que se ingrese sea un mes valido
	Mientras mes > 12 o mes < 1 hacer
		Escribir "Ingrese el numero de mes (valor entre 1 y 12) : " sin saltar
		Leer mes
	FinMientras
	// sentencia condicional para el mes
    Segun mes Hacer
		1:
			Escribir "El mes es enero"
		2:
			Escribir "El mes es febrero"
		3:
			Escribir "El mes es marzo"
		4:
			Escribir "El mes es abril"
		5:
			Escribir "El mes es mayo"
		6:
			Escribir "El mes es junio"
		7:
			Escribir "El mes es julio"
		8:
			Escribir "El mes es agosto"
		9:
			Escribir "El mes es septiembre"
		10:
			Escribir "El mes es octubre"
		11:
			Escribir "El mes es noviembre"
		De Otro Modo:
			Escribir "El mes es diciembre"
	Fin Segun
	
FinAlgoritmo
