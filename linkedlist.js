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

```java

public class Node { 
	Node next;
	int data;
	public Node(int data) {
		this.data = data
	}
}

public class LinkedList {
	Node head; 

	public void append(int data) { 
		if (head == null) {
			head = new Node(data);
		return;
		}
		Node current = head;
		while (current.next != null) {
			current = current.next;
		}
		current.next = new Node(data);
	}

	public void prepend(int data) {
		Node newHead = new Node(data);
		newHead.next = head;
		head = newHead;
	}

	public void deleteWithValue(int data) {
		if (head == null) return;
		if (head.data == data) {
			head = head.next;
			return;
		}
		
		Node current = head;
		while (current.next != null) {
			if (current.next.data == data) {
				current.next = current.next.next;
				return;
			}
			current = current.next;
		}
	}
}
		

```

// retype java into javascript

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next; 
  }
}

class LinkedList {

}