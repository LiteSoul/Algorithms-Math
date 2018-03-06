const input = document.getElementById('input')
const message = document.getElementById('message')
const digits = document.getElementById('digits')
const button = document.getElementById('button')
button.addEventListener('click', fireItUp)

//This function fires the search function
function fireItUp() {
	scanNdetect(input.value, digits.value)
}
//Main search function
function scanNdetect(input, digits) {
	//Transform the raw input into an array to work on it
	const array = input.split('')
	//Crate an object to store the search results
	let storedResults = {}

	let digitizer = []
	for (let i = 0; i < digits; i++) {
		digitizer[i] = i + 1
	}
	console.log(digitizer)
	digitizer.forEach(digit => {
		console.log(digit)
		let mainPivot = ''
		let mainIterated = ''
		let iterator = 0
		let comparator = iterator + 1
		// function interaction(array,digits){
		for (iterator = 0; iterator < array.length; iterator++) {
			mainPivot = array[iterator]
			if (digits > 1) {
				for (let i = 1; i < digit; i++) {
					mainPivot += array[iterator + i]
				}
			}
			// mainPivot=array[iterator]+array[iterator+1]+array[iterator+2]
			console.log('MAINPIVOT RECURSIVE ' + mainPivot)
			let counter = 1
			if (storedResults[mainPivot] === undefined) {
				for (
					comparator = iterator + 1;
					comparator <= array.length;
					comparator++
				) {
					mainIterated = array[comparator]
					if (digits > 1) {
						for (let c = 1; c < digit; c++) {
							mainIterated += array[comparator + c]
						}
					}
					// let mainIterated = array[comparator]+array[comparator+1]+array[comparator+2]
					console.log('MAINITERATED RECURSIVE ' + mainIterated)
					if (mainPivot === mainIterated) {
						counter++
						console.log(counter)
						storedResults[mainPivot] = counter
					}
				}
			}
		}
	})
	printResults(storedResults)
}
// This function prints the results stored in the object
function printResults(object) {
	let superString = ''
	message.innerHTML = ''
	console.log(object)
	for (let key in object) {
		// Check if the property really exists
		if (object.hasOwnProperty(key)) {
			let value = object[key]
			superString = `The number <strong>${key}</strong> gets repeated <strong>${value} times</strong><br>`
			message.innerHTML += superString
			console.log(superString)
		}
	}
}
