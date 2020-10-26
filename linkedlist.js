/*
Linked List notes:
    - notes from JS algos repo:
        - linked list: a linear collection of data elements in which order is not given by their physical placement in memory
        - each element points to the next
        - a group of nodes which together represent a sequence
        - each node has data and a reference to the next node
        - efficient insertion or removal of elements from any position in the sequence;
        - drawback is that access time is linear, random access is not feasible
    - cracking the coding interview video on linked list:
        - have to always start at the head of a linked list
        - O(1) insert or delete from beginning
        - O(n) insert or delete from end
        - O(n) to find elements
        - double linked list
            - links to both next and previous element
*/

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

// ---------------------- reverse list -----------------------------------------------

// solution 1: iterative
let reverseList = function(head) {
  let previousNode = null
  let currentNode = head
  while (currentNode) {
      let tempNext = currentNode.next
      currentNode.next = previousNode
      previousNode = currentNode
      currentNode = tempNext
  }
  return previousNode
};

// solution 2: recursive

var reverseList = function(head) {
  if (head === null || head.next === null) {
      return head
  }
  let p = reverseList(head.next)
  
  head.next.next = head
  head.next = null
  return p
  
};

// ---------------------- insert at position ------------------------------

function insertNodeAtPosition(head, data, position) {
  let current = head
  let counter = 1

  while (current.next) {
      if (counter !== position) {
          current = current.next
          counter += 1
      } else {
          let newNode = new SinglyLinkedListNode(data)
          newNode.next = current.next
          current.next = newNode
          return head
      }
  }
}