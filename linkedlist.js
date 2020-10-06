// - JS Algoritions Repo
//     - Linked List
//         - linked list: a linear collection of data elements in which linear order is not        given by their physical placement in memory
//         - each element points to the next
//         - a group of nodes which togetehr represent a sequence
//         - each node has data and a reference to the next node
//         - efficient insertion or removal of elements from any position in the sequence;
//         - drawback is that access time is linear, random access is not feasible
//     - cracking the coding interview youtube video on linked list
//         - have to always start at the head of a linked list
//         - O(1) insert or delete from beginning
//         - O(n) insert or delete from end
//         - O(n) to find elements
//         - double linked list
//             - links to both next and previous element

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next; 
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // time complexity O(n); linear time
  append = (value) => {
    if (this.head === null) {
      return null
    }

    let current = this.head
    while (current.next !== null) {
      current = current.next
    }
    current.next = new Node(value)
  }
  
  // time complexity O(1); constant time
  prepend = (value) => {
    let newHead = new Node(value)

    newHead.next = this.head

    this.head = newHead
  }

  deleteWithValue = (value) => {
    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next
      return;
    }

    let current = this.head
    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next
        return
      }
      current = current.next
    }
  }
  
  printList = () => {
    let currentNode = list.head
    // let nodeList = []
    let nodeList = ''
    while (currentNode) {
      // nodeList.push(currentNode.value)
      // currentNode.next ? nodeList += `${currentNode.value}, ` : nodeList += currentNode.value
      nodeList += String(currentNode.value)
      if (currentNode.next) {
        nodeList += ", "
      }
      currentNode = currentNode.next
    }
    // nodeList = nodeList.join(', ')
    console.log(nodeList)
  }
  
  // time complexity O(1); constant time
  insertAfter = (newValue, node) => {
    let newNode = new Node(newValue)
    
    if (node === null) {
      return null
    }
    
    newNode.next = node.next
    
    node.next = newNode
  }
}

let list = new LinkedList

let first = new Node(1)

let second = new Node(2)

let third = new Node(3)

list.head = first

list.head.next = second

second.next = third

list.prepend(4)

list.append(56)

list.insertAfter(9, second)

list.printList() 

list.deleteWithValue(4)

list.printList()