// UI vars and event listeners
const input = document.getElementById('input')
const digits = document.getElementById('digits')
const button = document.getElementById('button')
const message = document.getElementById('message')
button.addEventListener('click', fireItUp)

//This function fires the search function with necessary data
function fireItUp() {
	scanNdetect(input.value, digits.value)
}

//Main search function
function scanNdetect(input, digits) {
	//Transform the raw input into an array to work on it
	const inputArray = input.split('')
	//Create an array which will contain all the numbers in 1, 2 or 3
	//digits for them to be searched upon
	let numbersArray = []
	forEachDigit(inputArray, digits, numbersArray)
	//Create an object which will contain the coincidences found
	//and print them on the screen
	let resultsObject = {}
	findCoin(resultsObject, numbersArray)
}

//Call the filler function as many times as the digits chosen
function forEachDigit(inputArray, digits, numbersArray) {
	for (let index = 1; index <= digits; index++) {
		arrayFiller(inputArray, index, numbersArray)
	}
}

//This fills the numbersArray with to-be-searched numbers
function arrayFiller(inputArray, digits, numbersArray) {
	inputArray.forEach((each, index) => {
		//Slice the array in digits size chunks, then join, then push
		const sliced = inputArray.slice(index, index + digits)
		const joined = sliced.join('')
		numbersArray.push(joined)
	})
}

//Coincidence finder, using filter. Results goes to resultsObject
function findCoin(resultsObject, numbersArray) {
	numbersArray.forEach(each => {
		let filteredArray = numbersArray.filter(element => {
			return element == each
		})
		if (filteredArray.length > 1) resultsObject[each] = filteredArray.length
	})
	printResults(resultsObject)
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