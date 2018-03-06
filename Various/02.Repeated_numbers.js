const input = document.getElementById('input')
const message = document.getElementById('message')
const digits = document.getElementById('digits')
const button = document.getElementById('button')
button.addEventListener('click', fireItUp)

//This function fires the search function with necessary data
function fireItUp() {
	scanNdetect(input.value, digits.value)
}
//Main search function
function scanNdetect(input, digits) {
	//Transform the raw input into an array to work on it
	const array = input.split('')
	//Crate an object to store the search results
	let storedResults = {}
	//Create an array to iterate the search as per the number of digits
	let digitizer = []
	for (let i = 0; i < digits; i++) {
		digitizer[i] = i + 1
	}
	digitizer.forEach(digit => {
		//Create pivot as the chosen value to search
		let mainPivot = ''
		//Create iteration var to compare to chosen value
		let mainIterated = ''
		//Pivot will be iterated with iterator
		let iterator = 0
		//Iterated will be iterated with comparator
		let comparator = iterator + 1
		//Main iteration
		for (iterator = 0; iterator < array.length; iterator++) {
			mainPivot = array[iterator]
			//If user requests more digits, pivot will grow in digits
			if (digits > 1) {
				for (let i = 1; i < digit; i++) {
					mainPivot += array[iterator + i]
				}
			}
			//Create counter to count each repeated value
			let counter = 1
			//Stores the repeated value to the object as 'key', and
			//how many times it's been repeated as 'value', if
			//It hasn't been stored previously
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
					if (mainPivot === mainIterated) {
						counter++
						storedResults[mainPivot] = counter
					}
				}
			}
		}
	})
	//Calls the printing function and sends the stored object
	printResults(storedResults)
}
// This function prints the results stored in the object
function printResults(object) {
	let superString = ''
	//Clears the previously displayed results
	message.innerHTML = ''
	for (let key in object) {
		// Check if the property really exists, avoids unindexed properties
		if (object.hasOwnProperty(key)) {
			let value = object[key]
			superString = `The number <strong>${key}</strong> gets repeated <strong>${value} times</strong><br>`
			message.innerHTML += superString
		}
	}
}
