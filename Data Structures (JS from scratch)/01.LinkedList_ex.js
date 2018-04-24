function LinkedList() {
	this.head = null
	this.tail = null
}

function Node(value, next, prev) {
	this.value = value
	this.next = next
	this.prev = prev
}

LinkedList.prototype.addToHead = function(value) {
	let newNode = new Node(value, this.head, null)
	if (this.head) this.head.prev = newNode
	else this.tail = newNode
	this.head = newNode
}

LinkedList.prototype.addToTail = function(value) {
	let newNode = new Node(value, null, this.tail)
	//Check if it has nodes or it's empty with this if/else
	if (this.tail) this.tail.next = newNode
	else this.head = newNode
	this.tail = newNode
}

LinkedList.prototype.removeHead = function() {
	//Check if the list is empty
	if (!this.head) return null
	//Grab the head value before removing it
	const val = this.head.value
	this.head = this.head.next
	//That next could be null, meaning that the list gets empty after we remove the head,
	//so we check if the new head actually exists
	if (this.head) this.head.prev = null
	else this.tail = null
	return val
}

LinkedList.prototype.removeTail = function() {
	if (!this.tail) return null
	const val = this.tail.value
	this.tail = this.tail.prev
	if (this.tail) this.tail.next = null
	else this.head = null
	return val
}

LinkedList.prototype.search = function(searchValue) {
	let currentNode = this.head
	while (currentNode) {
		if (currentNode.value === searchValue) return currentNode.value
		currentNode = currentNode.next
	}
	return null
}
//---Beginning of the excercise:---
// Create an indexOf and return an array with the indexes where the value was found
LinkedList.prototype.indexOf = function(value) {
	let currentNode = this.head
	let currentIndex = 0
	let arrayOfIndexes = []
	while (currentNode) {
		if (currentNode.value === value) arrayOfIndexes.push(currentIndex)
		currentNode = currentNode.next
		currentIndex++
	}
	return arrayOfIndexes
}

//---Start the execution... first create a new linkedlist---
const ll = new LinkedList()
// Add some data to it
ll.addToHead(15)
ll.addToHead(30)
ll.addToHead(45)
ll.addToTail(10)
ll.addToTail(5)
ll.addToTail(30)
ll.addToTail('hi')
