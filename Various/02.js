const input = document.getElementById('input')
const message = document.getElementById('message')
// input.addEventListener('keydown', bigOne)
// input.addEventListener('keyup', bigOne)
const myValue = input.value
const myArray = myValue.split('')
let storedResults = {}
let superString = ''
let counter = 1
let mainPivot = ''
let mainIterated = ''

function scanNdetect(array, digits) {
	let digitizer = []
	for (let i = 0; i < digits; i++) {
		digitizer[i] = i + 1
	}
	console.log(digitizer)
	digitizer.forEach(digit => {
		console.log(digit)
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
			counter = 1
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
		// }
		// Print the results stored in the object
		console.log(storedResults)
		for (let key in storedResults) {
			// Check if the property really exists
			if (storedResults.hasOwnProperty(key)) {
				let value = storedResults[key]
				superString = `The number ${key} gets repeated ${value} times`
				// message.innerHTML += superString
				console.log(superString)
			}
		}
	})
}
scanNdetect(myArray, 3)
